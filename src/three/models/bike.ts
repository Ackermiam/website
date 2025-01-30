import { Object3D, AnimationMixer, Mesh, MeshPhysicalMaterial } from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Engine } from "../engine";

export class Bike {
  mesh: Object3D;
  loader: GLTFLoader;
  animation: any;
  mixer: AnimationMixer | null = null;
  engine: Engine;

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
  }

  async loadMesh() {
    const gltf = await this.loader.loadAsync(
      "/portfolio/models/bike.glb"
    );

    const material = new MeshPhysicalMaterial({
      metalness: 0.7,
      roughness: 0.2,
      clearcoat: 0.8
      // D'autres propriétés physiques comme le specular, clearcoat, etc., peuvent être ajustées ici
    });

    this.mesh = gltf.scene;
    this.animation = gltf.animations;
    this.mesh.scale.set(0.004, 0.004, 0.004);
    this.mesh.position.set(-1.4, -1.8, -2);
    this.mesh.rotation.y = Math.PI / 2
    this.mesh.rotation.x -= 0.1

    /*if (this.width < 900) {
      this.mesh.scale.set(2, 2, 2);
      this.mesh.position.y = 1.5;
    }*/

    if (gltf.animations.length > 0) {
      this.mixer = new AnimationMixer(this.mesh);
      const action = this.mixer.clipAction(gltf.animations[0]);
      action.play();
    }
  }
}
