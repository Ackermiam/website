import {
  Mesh,
  CylinderGeometry,
  MeshPhongMaterial,
  TextureLoader,
  SRGBColorSpace,
  LoadingManager,
  RepeatWrapping,
  Vector2,
  Group,
} from "three";
import { Engine } from "../engine";

import snowtexture from "../../assets/textures/protexture.png";
import lavatexture from "../../assets/textures/stacktexture.png";
import grasstexture from "../../assets/textures/projecttexture.png";

export class Cylinder {
  mesh: Mesh;
  engine: Engine;
  textureLoader: TextureLoader;
  texture: Record<string, any>;
  loadingManager: LoadingManager;
  pos: {
    basicPos: number;
    bottomPos: number;
    isBottom: boolean;
  };
  allTextures: Record<string, any>;

  constructor(engine: Engine) {
    this.engine = engine;
    this.loadingManager = new LoadingManager();
    this.textureLoader = new TextureLoader(this.loadingManager);
    this.pos = {
      basicPos: 20,
      bottomPos: 0,
      isBottom: false,
    };
    this.allTextures = {
      snowtexture: this.textureLoader.load(snowtexture),
      lavatexture: this.textureLoader.load(lavatexture),
      grasstexture: this.textureLoader.load(grasstexture),
    };
    this.texture = this.textureLoader.load(lavatexture);
    this.texture.colorSpace = SRGBColorSpace;
    this.texture.wrapT = RepeatWrapping;
    this.texture.wrapS = RepeatWrapping;
    this.texture.repeat = new Vector2(this.engine.width < 900 ? 4 : 5, 1);

    const geometry = new CylinderGeometry(this.engine.width < 900 ? 4.5 : 7, this.engine.width < 900 ? 4.5 : 7, 3.5, 64,1,true);
    geometry.openEnded = true;

    const edge = new CylinderGeometry(this.engine.width < 900 ? 4.55 : 7.05, this.engine.width < 900 ? 4.55 : 7.05, 0.03, 64, 1, true);
    const material = new MeshPhongMaterial({
      map: this.texture,
      transparent: true,
      specular: 0x00fbff
    });

    const edgematerial = new MeshPhongMaterial({
      color: 0x00ffde,
      emissive: 0x00fbff,
    });

    const mesh = new Mesh(geometry, material);
    const edgeTop = new Mesh(edge, edgematerial);
    const edgeBottom = new Mesh(edge, edgematerial);

    mesh.position.set(0, 2.5, -15);
    mesh.rotation.x = 0.1;
    edgeTop.rotation.x = 0.1;
    edgeTop.position.set(0, 4.3, -14.9);
    edgeBottom.rotation.x = 0.1;
    edgeBottom.position.set(0, 0.71, -15.2);
    const group = new Group();
    group.add(edgeTop, edgeBottom, mesh);
    this.mesh = group;
    this.mesh.position.y = 20;
    this.mesh.rotation.z = 0.1
    this.mesh.rotation.z = 0.1
    this.mesh.rotation.z = 0.1
  }

  rotate() {
    this.mesh.children[0].rotation.y -= this.engine.delta / 5;
    this.mesh.children[1].rotation.y -= this.engine.delta / 5;
    this.mesh.children[2].rotation.y += this.engine.delta / 5;
  }

  handlePosition(pos: number, factor: number) {
    this.mesh.position.y = (1 - factor) * this.mesh.position.y + factor * pos;
  }

  changeSkin(newSkin: string) {
    this.texture = this.allTextures[`${newSkin}texture`]
    this.texture.colorSpace = SRGBColorSpace;
    this.texture.wrapT = RepeatWrapping;
    this.texture.wrapS = RepeatWrapping;
    this.texture.repeat = new Vector2(this.engine.width < 900 ? 4 : 5, 1);

    const cylinderMaterial = this.mesh.children[2].material;
    cylinderMaterial.map = this.texture;
    cylinderMaterial.needsUpdate = true;
  }

  tick() {
    this.pos.isBottom
      ? this.handlePosition(this.pos.bottomPos, 0.02)
      : this.handlePosition(this.pos.basicPos, 0.01);
    this.rotate();
  }
}
