import {
  Mesh,
  SphereGeometry,
  MeshMatcapMaterial,
  MeshPhongMaterial,
  TextureLoader,
  SRGBColorSpace,
  LoadingManager,
  RepeatWrapping,
  Vector2,
  Group
} from "three";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { Engine } from "../engine";

import lavatexture from "../../assets/textures/lava/lavatexture.jpg"
import lavaemissive from "../../assets/textures/lava/lavaemissive.png"
import lavadisp from "../../assets/textures/lava/lavadisp.png"

export class LavaPlanet {
  mesh: Mesh;
  engine: Engine;
  textureLoader: TextureLoader;
  lavatexture: Record<string, any>;
  lavaemissive: Record<string, any>;
  lavadisp: Record<string, any>;
  loadingManager: LoadingManager;
  font: any;
  pos: {
    static: boolean;
    basicPos: number;
  }
  rotateAnim: boolean;
  textMesh: Mesh;

  constructor(engine: Engine) {
    this.engine = engine;
    this.pos = {
      basicPos: 0,
      static: false
    }
    this.rotateAnim = false;

    this.loadingManager = new LoadingManager();
    this.textureLoader = new TextureLoader(this.loadingManager);

    this.lavatexture = this.textureLoader.load(lavatexture);
    this.lavatexture.colorSpace = SRGBColorSpace;
    this.lavadisp = this.textureLoader.load(lavadisp);
    this.lavaemissive = this.textureLoader.load(lavaemissive)
    this.lavatexture.wrapT = RepeatWrapping;
    this.lavatexture.wrapS = RepeatWrapping;
    this.lavatexture.repeat = new Vector2(2, 2);

    const geometry = new SphereGeometry(2, 12, 12);

    const lavamaterial = new MeshPhongMaterial({
      map: this.lavatexture,
      displacementMap: this.lavadisp,
      displacementScale: .2,
      emissive: 0x000000
    });

    const group = new Group()

    const mesh = new Mesh(geometry, lavamaterial);
    mesh.position.set(-4, 4, -35);


    group.add(mesh);
    this.mesh = group;
    this.mesh.position.y = -2
    this.mesh.rotation.y = 3
    this.loadFont();
  }

  loadFont() {
    const fontLoader = new FontLoader();
    fontLoader.load("/website/fonts/mewafont.json", (font) => {
      this.font = font;
      this.createText();
    });
  }

  createText() {
    const matCapTexture = this.textureLoader.load("/website/textures/7.png");
    matCapTexture.colorSpace = SRGBColorSpace;

    const textMaterial = new MeshMatcapMaterial({
      matcap: matCapTexture,
    });

    const geometryFirst = new TextGeometry(
      `Stack`,
      {
        font: this.font,
        size: .8,
        depth: 0.2,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5,
      }
    );
    this.textMesh = new Mesh(geometryFirst, textMaterial);

    this.textMesh.geometry.center();
    this.textMesh.position.set(-4, 1.2, -35);
    this.mesh.add(this.textMesh);
  }

  initialRotate() {
    this.mesh.rotation.y = (1 - 0.01) * this.mesh.rotation.y - 0.01 * this.pos.basicPos;
  }
  rotate() {
    const maxRotation = Math.PI * 2;
    const rotationSpeed = this.engine.delta / 5.5;

    if (Math.abs(this.mesh.rotation.y) > maxRotation) {
      this.mesh.rotation.y = 0;
    } else {
      this.mesh.rotation.y -= rotationSpeed;
    }
  }

  handleStaticState() {
    this.pos.static = !this.pos.static;
  }

  changeEmissive() {
    const oldMaterial = this.mesh.children[0].material;
    const material = new MeshPhongMaterial({
      map: oldMaterial.map,
      displacementMap: oldMaterial.displacementMap,
      displacementScale: oldMaterial.displacementScale,
      emissive: 0x330000,
      specular: oldMaterial.specular
    });
    this.mesh.children[0].scale.set(1.05, 1.05, 1.05);
    this.mesh.children[0].material = material
    this.rotateAnim = true;
  }
  withdrawEmissive() {
    const oldMaterial = this.mesh.children[0].material;
    const material = new MeshPhongMaterial({
      map: oldMaterial.map,
      displacementMap: oldMaterial.displacementMap,
      displacementScale: oldMaterial.displacementScale,
      emissive: 0x000000,
      specular: oldMaterial.specular
    });
    this.mesh.children[0].scale.set(1, 1, 1);
    this.mesh.children[0].material = material
    this.rotateAnim = false;
  }
  /*rotateAnime() {
    this.mesh.children[0].position.y = Math.cos(this.engine.elapsedTime / 20)
  }*/

  tick() {
    this.mesh.children[0].rotation.y -= this.engine.delta;
    if(this.pos.static) {
      this.initialRotate();
    }
    if(!this.pos.static) {
      this.rotate();
    }
    /*if(this.rotateAnim) {
      this.rotateAnime();
    }*/
  }
}
