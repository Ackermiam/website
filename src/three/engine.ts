import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  Clock,
  DirectionalLight,
  Vector3,
  PCFSoftShadowMap,
  Raycaster
} from "three";

import { Bike } from "./models/bike";
import { Globe } from "./models/globe";
import { Text } from "./models/text";
import { Planets } from "./models/planets";
import { LavaPlanet } from "./models/lavaPlanet";
import { GrassPlanet } from "./models/GrassPlanet";

import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";
import { RGBShiftShader } from "three/addons/shaders/RGBShiftShader.js";
import { VignetteShader } from "three/addons/shaders/VignetteShader.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { FilmPass } from "three/addons/postprocessing/FilmPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";

import { useSettings } from "../composable/settings";

import Stats from "stats.js";
import GUI from "lil-gui";

const { worlds } = useSettings();

export class Engine {
  scene: Scene;
  renderer: WebGLRenderer;
  camera: PerspectiveCamera;
  meshs: any[];
  stats: Stats;
  ref: HTMLElement;
  pixelRatio: number;
  animationFrameId: number | null = null;
  mousePos: {
    x: number;
    y: number;
  };
  mouseDirection: Vector3;
  clock: Clock;
  delta: number;
  elapsedTime: number;
  sensitivity: number;
  composer: any;
  bike: Bike;
  globe: Globe;
  text: Text;
  planets: Planets;
  lavaPlanet: LavaPlanet;
  grassPlanet: GrassPlanet;
  width: number;
  height: number;
  raycaster: Raycaster;
  fov: {
    base: number;
    current: number;
    accel: number;
    isAccelerate: boolean;
  };

  constructor(ref: HTMLElement) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    //this.stats = new Stats();
    //this.stats.showPanel(0);
    //document.body.appendChild(this.stats.dom);
    this.width = width;
    this.height = height;
    this.meshs = [];
    this.mousePos = { x: width / 3, y: height / 1.5 };
    this.ref = ref;
    this.scene = new Scene();
    this.fov = {
      base: 50,
      current: 50,
      accel: 170,
      isAccelerate: false,
    };
    this.camera = new PerspectiveCamera(this.fov.base, width / height, 0.1, 60);
    this.camera.position.set(0, 0, 3);
    this.camera.lookAt(0, 0, 0);
    this.clock = new Clock();
    this.elapsedTime = 0;
    this.delta = 0;
    this.sensitivity = 0.002;
    this.mouseDirection = new Vector3(0, 0, 1);
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);

    this.renderer = new WebGLRenderer({
      antialias: true,
    });

    this.composer = new EffectComposer(this.renderer);
    this.composer.renderTarget1.samples = 8;
    this.composer.renderTarget2.samples = 8;
    this.renderer.setClearColor(0, 0);
    this.renderer.setPixelRatio(this.pixelRatio);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = PCFSoftShadowMap;
    const resizeCanvas = window.devicePixelRatio > 1;
    this.composer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setSize(width, height, resizeCanvas);

    const renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass();
    bloomPass.strength = 0.28;
    bloomPass.radius = 0.4;
    this.composer.addPass(bloomPass);

    const filmPass = new FilmPass();
    filmPass.uniforms.intensity.value = 1;
    this.composer.addPass(filmPass);

    const rgbPass = new ShaderPass(RGBShiftShader);
    rgbPass.uniforms.amount.value = 0.003;
    rgbPass.uniforms.angle.value = 5;
    this.composer.addPass(rgbPass);

    const vignettePass = new ShaderPass(VignetteShader);
    vignettePass.uniforms.offset.value = 1.4;
    this.composer.addPass(vignettePass);

    const outputPass = new OutputPass();
    this.composer.addPass(outputPass);

    ref.appendChild(this.renderer.domElement);
    //this.stats.update();
    const raycaster = new Raycaster();
    const globe = new Globe(this);
    const bike = new Bike(this);
    const text = new Text(this);
    const planets = new Planets(this);
    const lavaPlanet = new LavaPlanet(this);
    const grassPlanet = new GrassPlanet(this);
    const loadedBike = async () => {
      await bike.loadMesh();
      this.bike = bike;
      this.globe = globe;
      this.text = text;
      this.planets = planets;
      this.lavaPlanet = lavaPlanet;
      this.grassPlanet = grassPlanet
      this.raycaster = raycaster;
      this.meshs.push(this.bike, this.globe, this.text, this.planets, this.lavaPlanet, this.grassPlanet);
    };

    loadedBike().then(() => {
      this.setup();
    });
  }

  tick() {
    this.composer.render();
    //this.stats.begin();
    this.delta = this.clock.getDelta();
    this.elapsedTime = this.clock.getElapsedTime();
    this.checkFov();
    this.tickChildren();
    //this.stats.end();

    this.animationFrameId = requestAnimationFrame(() => {
      this.tick();
    });
  }

  setup() {
    this.addChildren();
    this.setupGUI();
    this.setView();
    this.registerEventListeners();

    const directionalLight = new DirectionalLight(0xffffff, 2);
    directionalLight.position.set(3, 20, 10);
    this.scene.add(directionalLight);
    this.scene.add(directionalLight.target);

    this.tick();
  }

  setupGUI() {
    const gui = new GUI({ title: "Acker'tools", closeFolders: true });
    const sceneGUI = gui.addFolder("Environment");
    const shaderPP = gui.addFolder("ShaderPP");
    const cameraGUI = gui.addFolder("Camera");
    const bike = gui.addFolder("Bike");
    const light = gui.addFolder("Light");
    gui.hide();

    cameraGUI
      .add(this.camera, "fov", 20, 140, 0.5)
      .name("FOV")
      .onChange(() => {
        this.camera.updateProjectionMatrix();
      });

    cameraGUI
      .add(this.fov, "isAccelerate")
      .name("activateSpeed")
      .onChange(() => {
        this.camera.updateProjectionMatrix();
      });

    bike.add(this.bike?.mesh.position, "x", -2, 2, 0.05).name("Xpos Bike");
    bike.add(this.bike?.mesh.position, "y", -2, 2, 0.05).name("Ypos Bike");

    /*lightGUI
      .addColor(this.character?.light, "color")
      .name("color light")
      .onChange((e) => {
        console.log(e.getHexString());
      });

    sceneGUI
      .add(this.environment?.mesh.children[0].material, "wireframe")
      .name("ground wireframe");*/

    shaderPP
      .add(this.composer.passes[1], "strength", 0.1, 5)
      .name("Bloomstrength");
    shaderPP
      .add(this.composer.passes[3].uniforms.amount, "value", 0.001, 1.1)
      .name("RGBstrength");
    shaderPP
      .add(this.composer.passes[3].uniforms.angle, "value", 0.1, 5)
      .name("RGBangle");
    shaderPP
      .add(this.composer.passes[4].uniforms.darkness, "value", 0.1, 5)
      .name("VignetteDarkness");
    shaderPP
      .add(this.composer.passes[4].uniforms.offset, "value", 0.1, 5)
      .name("VignetteOffset");

    window.addEventListener("keydown", (e) => {
      if (e.key == "t") gui.show(gui._hidden);
    });
  }

  addChildren() {
    for (let i = 0; i < this.meshs.length; i++) {
      this.scene.add(this.meshs[i].mesh);
    }
  }

  tickChildren() {
    for (let i = 0; i < this.meshs.length; i++) {
      this.meshs[i].tick(this);
    }
  }

  lerpBloom(start: number, end: number, factor: number) {
    this.composer.passes[1].strength = (1 - factor) * start + factor * end;
  }

  lerpFOV(start: number, end: number, factor: number) {
    //this.fov.current = (1 - factor) * start + factor * end;
    this.camera.fov = (1 - factor) * start + factor * end;
    this.camera.updateProjectionMatrix();
  }

  checkFov() {
    if (this.fov.isAccelerate) {
      this.lerpFOV(this.camera.fov, this.fov.accel, 0.03);
      this.lerpBloom(this.composer.passes[1].strength, 1, 0.02);
      this.globe.mesh.rotation.x += this.delta * 2;
      this.camera.position.z = 0;
      this.composer.passes[3].uniforms.amount.value = 0.008;
      this.composer.passes[3].uniforms.angle.value = 1.8;
      setTimeout(() => {
        this.globe.changeEmissive(0x3b002a);
      }, 200);
    }
    if (!this.fov.isAccelerate) {
      this.lerpFOV(this.camera.fov, this.fov.base, 0.03);
      this.lerpBloom(this.composer.passes[1].strength, 0.28, 0.02);
      this.globe.changeEmissive(0x202020);
      this.camera.position.z = 2;
      this.composer.passes[3].uniforms.amount.value = 0.003;
      this.composer.passes[3].uniforms.angle.value = 5;
    }
  }

  handleHyperspeed() {
    this.fov.isAccelerate = !this.fov.isAccelerate;
  }

  setView() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);
    this.renderer.setPixelRatio(this.pixelRatio);
  }

  registerEventListeners() {
    window.onresize = () => {
      this.setView();
    };
    window.addEventListener("mousemove", (e) => {
      this.mousePos = { x: e.clientX, y: e.clientY };
      const rect = this.renderer.domElement.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const normalized = {
        x: (x / rect.width) * 2 - 1,
        y: -(y / rect.height) * 2 + 1,
      };

      this.raycaster.setFromCamera(normalized, this.camera);

      const intersectsLava = this.raycaster.intersectObject(this.lavaPlanet.mesh);
      const intersectsGrass = this.raycaster.intersectObject(this.grassPlanet.mesh);
      const intersectsPlanet = this.raycaster.intersectObject(this.planets.mesh);

      if (intersectsLava.length > 0) {
        console.log("lavaPlanet intersects");
        if (!worlds.lavaPlanet) {
          this.lavaPlanet.changeEmissive();
          worlds.lavaPlanet = true;
        }
      } else {
        this.lavaPlanet.withdrawEmissive();
        worlds.lavaPlanet = false;
      }
      if (intersectsGrass.length > 0) {
        console.log("lavaPlanet intersects");
        if (!worlds.grassPlanet) {
          this.grassPlanet.changeEmissive();
          worlds.grassPlanet = true;
        }
      } else {
        this.grassPlanet.withdrawEmissive();
        worlds.grassPlanet = false;
      }
      if (intersectsPlanet.length > 0) {
        console.log("lavaPlanet intersects");
        if (!worlds.planet) {
          this.planets.changeEmissive();
          worlds.planet = true;
        }
      } else {
        this.planets.withdrawEmissive();
        worlds.planet = false;
      }
    });
    window.addEventListener("scroll", () => {
      this.globe.rotateGlobe();
    });
    window.addEventListener("touchmove", (e) => {
      this.mousePos.x = e.touches[0].clientX;
      this.mousePos.y = e.touches[0].clientY;
    });
    window.addEventListener("nextText", () => {
      this.text.triggerNextStep();
    });
    window.addEventListener("displayPlanets", () => {
      this.planets.handleStaticState();
      this.lavaPlanet.handleStaticState();
      this.grassPlanet.handleStaticState();
    });
  }
}
