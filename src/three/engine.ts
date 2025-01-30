import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  Clock,
  AmbientLight,
  DirectionalLight,
  Vector3,
  PCFSoftShadowMap
} from "three";

import { Bike } from "./models/bike"
import { Globe } from "./models/globe"

import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { FilmPass } from 'three/addons/postprocessing/FilmPass.js';
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";

import Stats from "stats.js";;
import GUI from "lil-gui";

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
  globalLight: AmbientLight;
  composer: any;
  bike: Bike;
  globe: Globe;

  constructor(ref: HTMLElement) {
    const { width, height } = ref.getBoundingClientRect();
    //this.stats = new Stats();
    //this.stats.showPanel(0);
    //document.body.appendChild(this.stats.dom);
    this.meshs = [];
    this.mousePos = { x: 0, y: 0 };
    this.ref = ref;
    this.scene = new Scene();

    this.camera = new PerspectiveCamera(50, width / height, 0.1, 24);
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
    bloomPass.strength = 0.23;
    bloomPass.radius = 0.1;
    this.composer.addPass(bloomPass);

    const filmPass = new FilmPass();
    filmPass.uniforms.intensity.value = 1;
    this.composer.addPass(filmPass)
    console.log(filmPass)

    const outputPass = new OutputPass();
    this.composer.addPass(outputPass);

    ref.appendChild(this.renderer.domElement);
    //this.stats.update();
    const globe = new Globe(this);
    const bike = new Bike(this);
    const loadedBike = async() => {
      await bike.loadMesh();
      this.bike = bike;
      this.globe = globe;
      this.meshs.push(this.bike, this.globe)
    }

    loadedBike().then(() => {
      this.setup();
    })
  }

  tick() {
    this.composer.render();
    //this.stats.begin();
    this.delta = this.clock.getDelta();
    this.elapsedTime = this.clock.getElapsedTime();
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

    const directionalLight = new DirectionalLight(0xffffff, 2); // Intensité plus élevée
    directionalLight.position.set(3, 20, 10); // Position : légèrement à droite et au-dessus du modèle
    directionalLight.target.position.set(-1.4, -1.6, 0); // Oriente la lumière vers le modèle
    directionalLight.castShadow = true; // Active les ombres
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.1;
    directionalLight.shadow.camera.far = 10;
    this.scene.add(directionalLight);
    this.scene.add(directionalLight.target);

    this.tick();
  }

  setupGUI() {
    const gui = new GUI({ title: "Acker'tools", closeFolders: true });
    const sceneGUI = gui.addFolder("Environment");
    const shaderPP = gui.addFolder("ShaderPP");
    const cameraGUI = gui.addFolder("Camera");
    const lightGUI = gui.addFolder("Light");
    gui.hide();

    cameraGUI
      .add(this.camera, "fov", 20, 140, 0.5)
      .name("FOV")
      .onChange(() => {
        this.camera.updateProjectionMatrix();
      });

    /*lightGUI
      .add(this.character?.light, "distance", 0.1, 7, 0.05)
      .name("distance light");

    lightGUI
      .addColor(this.character?.light, "color")
      .name("color light")
      .onChange((e) => {
        console.log(e.getHexString());
      });

    sceneGUI
      .add(this.environment?.mesh.children[0].material, "wireframe")
      .name("ground wireframe");*/

    shaderPP.add(this.composer.passes[1], "strength", 0.1, 5).name("strength");

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

  setView() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);
    this.renderer.setPixelRatio(this.pixelRatio);
  }

  /*moveVision(event) {
    const horizontalMovement = event.movementX;
    const verticalMovement = event.movementY;

    this.camera.rotation.reorder("YXZ");
    this.camera.rotation.y -= horizontalMovement * this.sensitivity;
    this.camera.rotation.x -= verticalMovement * (this.sensitivity / 2);
    this.camera.rotation.x = Math.min(
      Math.max(this.camera.rotation.x, -Math.PI * 0.5),
      Math.PI * 0.5
    );
  }

  handleMouseMove = (event: MouseEvent) => {
    this.moveVision(event);
  };*/

  registerEventListeners() {
    window.onresize = () => {
      this.setView();
    };
    window.addEventListener("mousemove", (e) => {
      this.mousePos = { x: e.clientX, y: e.clientY };
    });
    window.addEventListener("scroll", () => {
      this.globe.rotateGlobe();
    })
  }
}