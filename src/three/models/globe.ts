import {
  Mesh,
  SphereGeometry,
  MeshPhongMaterial,
  TextureLoader,
  SRGBColorSpace,
  LoadingManager,
  RepeatWrapping,
  Vector2
} from "three";
import { Engine } from "../engine";

import globetexture from "../../assets/textures/moon.png";
import normaltexture from "../../assets/textures/normalmoon.png";
import displacementtexture from "../../assets/textures/dispmoon.png";

export class Globe {
  mesh: Mesh;
  engine: Engine;
  textureLoader: TextureLoader;
  texture: Record<string, any>;
  normalTexture: Record<string, any>;
  displacementTexture: Record<string, any>;
  loadingManager: LoadingManager;

  constructor(engine: Engine) {
    this.engine = engine;

    this.loadingManager = new LoadingManager();
    this.textureLoader = new TextureLoader(this.loadingManager);
    this.texture = this.textureLoader.load(globetexture);
    this.texture.colorSpace = SRGBColorSpace;
    this.normalTexture = this.textureLoader.load(normaltexture);
    this.displacementTexture = this.textureLoader.load(displacementtexture);
    this.texture.wrapT = RepeatWrapping;
    this.texture.wrapS = RepeatWrapping;
    this.texture.repeat = new Vector2(45, 45);

    const geometry = new SphereGeometry(18, 50, 30);
    const material = new MeshPhongMaterial({
      color: 0xffffff,
      map: this.texture,
      displacementMap: this.displacementTexture,
      displacementScale: 1.5,
      emissive: 0x202020,
      specular: 0x004142
    });

    this.mesh = new Mesh(geometry, material);
    this.mesh.position.y = -19.5;
    this.mesh.position.z = -10;
    this.mesh.rotation.z = Math.PI / 2;
  }

  tick() {
    //this.rotateGlobe()
  }

  rotateGlobe() {
    this.mesh.rotation.x += this.engine.delta / 5
  }
}
