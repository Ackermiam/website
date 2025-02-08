import {
  Mesh,
  SphereGeometry,
  MeshPhongMaterial,
  TextureLoader,
  SRGBColorSpace,
  LoadingManager,
  RepeatWrapping,
  Vector2,
} from "three";
import { Engine } from "../engine";

import globetexture from "../../assets/textures/moon.png";
import displacementtexture from "../../assets/textures/dispmoon.png";

import lavatexture from "../../assets/textures/lava/lavatexture.jpg";
import lavaemissive from "../../assets/textures/lava/lavaemissive.png";
import lavadisp from "../../assets/textures/lava/lavadisp.png";

import grasstexture from "../../assets/textures/grass/grasstexture.png";
import grassdisp from "../../assets/textures/grass/grassedisp.png";

import snowtexture from "../../assets/textures/snow/snowtexture.png";
import snowdisp from "../../assets/textures/snow/snowdisp.png";

export class Globe {
  mesh: Mesh;
  engine: Engine;
  textureLoader: TextureLoader;
  texture: Record<string, any>;
  displacementTexture: Record<string, any>;
  loadingManager: LoadingManager;
  allTextures: Record<string, any>;

  constructor(engine: Engine) {
    this.engine = engine;
    this.loadingManager = new LoadingManager();
    this.textureLoader = new TextureLoader(this.loadingManager);
    this.allTextures = {
      lavatexture: this.textureLoader.load(lavatexture),
      lavaemissive: this.textureLoader.load(lavaemissive),
      lavadisp: this.textureLoader.load(lavadisp),
      grasstexture: this.textureLoader.load(grasstexture),
      grassdisp: this.textureLoader.load(grassdisp),
      snowtexture: this.textureLoader.load(snowtexture),
      snowdisp: this.textureLoader.load(snowdisp),
    };
    this.texture = this.textureLoader.load(globetexture);
    this.texture.colorSpace = SRGBColorSpace;
    this.displacementTexture = this.textureLoader.load(displacementtexture);
    this.texture.wrapT = RepeatWrapping;
    this.texture.wrapS = RepeatWrapping;
    this.texture.repeat = new Vector2(25, 25);

    const geometry = new SphereGeometry(18, 50, 30);
    const material = new MeshPhongMaterial({
      color: 0xffffff,
      map: this.texture,
      displacementMap: this.displacementTexture,
      displacementScale: 1.2,
      emissive: 0x202020,
      specular: 0x004142,
    });

    this.mesh = new Mesh(geometry, material);
    this.mesh.position.y = -19.5;
    this.mesh.position.z = -10;
    this.mesh.rotation.z = Math.PI / 2;
  }

  tick() {
    this.rotateGlobe();
  }

  rotateGlobe() {
    this.mesh.rotation.x += this.engine.delta / 5;
  }

  changeEmissive(emissive: number) {
    const oldMaterial = this.mesh.material;
    const material = new MeshPhongMaterial({
      color: oldMaterial.color,
      map: oldMaterial.map,
      displacementMap: oldMaterial.displacementMap,
      displacementScale: oldMaterial.displacementScale,
      emissive: emissive,
      specular: oldMaterial.specular,
    });

    this.mesh.material = material;
  }

  changeSkin(newSkin: string) {
    this.texture = this.allTextures[`${newSkin}texture`]
    this.displacementTexture = this.allTextures[`${newSkin}disp`]
    this.texture.colorSpace = SRGBColorSpace;
    this.texture.wrapT = RepeatWrapping;
    this.texture.wrapS = RepeatWrapping;
    this.texture.repeat = new Vector2(25, 25);

    const oldMaterial = this.mesh.material;
    const material = new MeshPhongMaterial({
      color: oldMaterial.color,
      map: this.texture,
      displacementMap: this.displacementTexture,
      displacementScale: oldMaterial.displacementScale,
      emissive: 0x202020,
      specular: oldMaterial.specular,
    });

    this.mesh.material = material;
    this.mesh.material.needsUpdate = true;
  }
}
