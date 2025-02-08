import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  Clock,
  DirectionalLight,
  Vector3,
  PCFSoftShadowMap,
  Raycaster,
} from "three";

import { Bike } from "./models/bike";
import { Globe } from "./models/globe";
import { Text } from "./models/text";
import { Planets } from "./models/planets";
import { LavaPlanet } from "./models/lavaPlanet";
import { GrassPlanet } from "./models/grassPlanet";
import { Cylinder } from "./models/cylinder";

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

const {
  worlds,
  displayWorlds,
  selectedWorld,
  displayInfos,
  textToDisplay,
  handleDisplayWorlds,
} = useSettings();

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
  cylinder: Cylinder;
  width: number;
  height: number;
  raycaster: Raycaster;
  fov: {
    base: number;
    current: number;
    accel: number;
    isAccelerate: boolean;
  };
  light: DirectionalLight;

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
    this.pixelRatio = Math.min(window.devicePixelRatio, window.innerWidth < 768 ? 1 : 2);

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

    this.light = new DirectionalLight(0xffffff, 2);
    this.light.position.set(7, 40, 13);
    this.scene.add(this.light);
    this.scene.add(this.light.target);

    ref.appendChild(this.renderer.domElement);
    //this.stats.update();
    const raycaster = new Raycaster();
    const globe = new Globe(this);
    const cylinder = new Cylinder(this);
    const bike = new Bike(this);
    const text = new Text(this);
    const planets = new Planets(this);
    const lavaPlanet = new LavaPlanet(this);
    const grassPlanet = new GrassPlanet(this);
    const loadedBike = async () => {
      await bike.loadMesh();
      this.bike = bike;
      this.cylinder = cylinder;
      this.globe = globe;
      this.text = text;
      this.planets = planets;
      this.lavaPlanet = lavaPlanet;
      this.grassPlanet = grassPlanet;
      this.raycaster = raycaster;
      this.meshs.push(
        this.bike,
        this.cylinder,
        this.globe,
        this.text,
        this.planets,
        this.lavaPlanet,
        this.grassPlanet
      );
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
    this.intersects();
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
      .addColor(this.light, "color")
      .name("color light")
      .onChange((e) => {
        console.log(e.getHexString());
      });

    sceneGUI
      .add(this.environment?.mesh.children[0].material, "wireframe")
      .name("ground wireframe");*/

    light.add(this.light?.position, "x", -6, 50, 0.1).name("Xpos");
    light.add(this.light?.position, "y", -6, 50, 0.1).name("Ypos");
    light.add(this.light?.position, "z", -6, 50, 0.1).name("Zpos");

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
        this.globe.changeEmissive(0x404040);
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

  intersects() {
    const rect = this.renderer.domElement.getBoundingClientRect();
    const x = this.mousePos.x - rect.left;
    const y = this.mousePos.y - rect.top;

    const normalized = {
      x: (x / rect.width) * 2 - 1,
      y: -(y / rect.height) * 2 + 1,
    };

    this.raycaster.setFromCamera(normalized, this.camera);

    const intersectsLava = this.raycaster.intersectObject(
      this.lavaPlanet.mesh
    );
    const intersectsGrass = this.raycaster.intersectObject(
      this.grassPlanet.mesh
    );
    const intersectsPlanet = this.raycaster.intersectObject(
      this.planets.mesh
    );

    if (intersectsLava.length > 0) {
      if (!worlds.lavaPlanet) {
        this.lavaPlanet.changeEmissive();
        worlds.lavaPlanet = true;
        selectedWorld.value = "lava";
      }
    } else {
      this.lavaPlanet.withdrawEmissive();
      worlds.lavaPlanet = false;
    }
    if (intersectsGrass.length > 0) {
      if (!worlds.grassPlanet) {
        this.grassPlanet.changeEmissive();
        worlds.grassPlanet = true;
        selectedWorld.value = "grass";
      }
    } else {
      this.grassPlanet.withdrawEmissive();
      worlds.grassPlanet = false;
    }
    if (intersectsPlanet.length > 0) {
      if (!worlds.planet) {
        this.planets.changeEmissive();
        worlds.planet = true;
        selectedWorld.value = "snow";
      }
    } else {
      this.planets.withdrawEmissive();
      worlds.planet = false;
    }
  }

  triggerClickPlanet(){
    if (
      displayWorlds.value &&
      (worlds.planet || worlds.lavaPlanet || worlds.grassPlanet)
    ) {
      textToDisplay.value = "Call the Planets";
      displayInfos.value = false;
      this.cylinder.pos.isBottom = false;
      this.cylinder.mesh.visible = false;
      this.handleHyperspeed();

      setTimeout(() => {
        this.globe.changeSkin(selectedWorld.value);
        this.cylinder.changeSkin(selectedWorld.value);
      }, 1000);
      handleDisplayWorlds();
      setTimeout(() => {
        this.handleHyperspeed();
        displayInfos.value = true;
        this.cylinder.pos.isBottom = true;
        this.cylinder.mesh.visible = true;
      }, 3000);
    }
  }

  registerEventListeners() {
    window.onresize = () => {
      this.setView();
    };
    window.addEventListener("pointermove", (e) => {
      this.mousePos = { x: e.clientX, y: e.clientY };
    });
    window.addEventListener("pointerdown", (e) => {
      this.mousePos = { x: e.clientX, y: e.clientY };
    });
    window.addEventListener("pointerup", (e) => {
      this.triggerClickPlanet();
    });
    window.addEventListener("scroll", () => {
      this.globe.rotateGlobe();
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
