import { Object3D, AnimationMixer } from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Engine } from "../engine";

export class Bike {
  mesh: Object3D;
  loader: GLTFLoader;
  animation: any;
  mixer: AnimationMixer | null = null;
  engine: Engine;
  canMove: boolean = true;

  constructor(engine: Engine) {
    this.loader = new GLTFLoader();
    this.mesh = new Object3D();
    this.engine = engine;
  }

  tick() {
    if (this.mixer) {
      const delta = this.engine.delta;
      this.mixer.update(delta);
    }
    if(this.canMove === true) this.moveBike();
  }

  async loadMesh() {
    const gltf = await this.loader.loadAsync("/website/models/bike.glb");

    this.mesh = gltf.scene;
    this.animation = gltf.animations;
    this.mesh.scale.set(0.004, 0.004, 0.004);
    this.mesh.position.set(0, 0, -2);
    this.mesh.rotation.y = Math.PI / 2;

    if (this.engine.width < 900) {
      this.mesh.scale.set(0.003, 0.003, 0.003);
    }

    if (gltf.animations.length > 0) {
      this.mixer = new AnimationMixer(this.mesh);
      const action = this.mixer.clipAction(gltf.animations[0]);
      action.play();
    }
  }

  moveTransition(start, end, factor) {
    this.mesh.position.x = (1 - factor) * start.x + factor * end.x;
    this.mesh.position.y = (1 - factor) * start.y + factor * end.y;
  }

  moveBike() {
    const normalizedX = (this.engine.mousePos.x / this.engine.width) * 2 - 1;
    const normalizedY = (this.engine.mousePos.y / this.engine.height) * 1.2 - 1;

    const newPos = {
      x: normalizedX * 1.5,
      y: this.engine.width < 900 ? -normalizedY - 1.3 : -normalizedY - 1.5,
    };

    this.moveTransition(this.mesh.position, newPos, 0.05);
  }
}
