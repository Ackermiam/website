import {
  Mesh,
  SphereGeometry,
  MeshPhongMaterial,
  MeshMatcapMaterial,
  TextureLoader,
  SRGBColorSpace,
  LoadingManager,
  RepeatWrapping,
  Vector2,
  Group,
} from "three";
import { Engine } from "../engine";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";

import snowtexture from "../../assets/textures/snow/snowtexture.png";
import snowdisp from "../../assets/textures/snow/snowdisp.png";

export class Planets {
  mesh: Mesh;
  engine: Engine;
  textureLoader: TextureLoader;
  snowtexture: Record<string, any>;
  snowdisp: Record<string, any>;
  loadingManager: LoadingManager;
  font: any;
  pos: {
    static: boolean;
    basicPos: number;
  };
  textMesh: Mesh;

  constructor(engine: Engine) {
    this.engine = engine;
    this.pos = {
      basicPos: 0,
      static: false,
    };

    this.loadingManager = new LoadingManager();
    this.textureLoader = new TextureLoader(this.loadingManager);

    this.snowtexture = this.textureLoader.load(snowtexture);
    this.snowtexture.colorSpace = SRGBColorSpace;
    this.snowdisp = this.textureLoader.load(snowdisp);
    this.snowtexture.wrapT = RepeatWrapping;
    this.snowtexture.wrapS = RepeatWrapping;
    this.snowtexture.repeat = new Vector2(2, 2);

    const geometry = new SphereGeometry(2, 12, 12);

    const snowmaterial = new MeshPhongMaterial({
      map: this.snowtexture,
      displacementMap: this.snowdisp,
      displacementScale: 0.5
    });

    const group = new Group();

    const mesh = new Mesh(geometry, snowmaterial);
    mesh.position.set(0, 10, -35);

    group.add(mesh);
    this.mesh = group;
    this.mesh.position.y = -2;
    this.mesh.rotation.y = -2.5;
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
    const matCapTexture = this.textureLoader.load("/website/textures/4.png");
    matCapTexture.colorSpace = SRGBColorSpace;

    const textMaterial = new MeshMatcapMaterial({
      matcap: matCapTexture,
    });

    const geometryFirst = new TextGeometry(
      `Pro`,
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
    this.textMesh.position.set(0, 7, -35);
    this.mesh.add(this.textMesh);
  }

  initialRotate() {
    this.mesh.rotation.y =
      (1 - 0.03) * this.mesh.rotation.y + 0.03 * this.pos.basicPos;
  }
  rotate() {
    const maxRotation = Math.PI * 2;
    const rotationSpeed = this.engine.delta / 4;

    if (Math.abs(this.mesh.rotation.y) > maxRotation) {
      this.mesh.rotation.y = 0;
    } else {
      this.mesh.rotation.y += rotationSpeed;
    }
  }

  changeEmissive() {
    const oldMaterial = this.mesh.children[0].material;
    const material = new MeshPhongMaterial({
      map: oldMaterial.map,
      displacementMap: oldMaterial.displacementMap,
      displacementScale: oldMaterial.displacementScale,
      emissive: 0x000033,
    });
    this.mesh.children[0].scale.set(1.05, 1.05, 1.05);
    this.mesh.children[0].material = material;
    //this.rotateAnim = true;
  }
  withdrawEmissive() {
    const oldMaterial = this.mesh.children[0].material;
    const material = new MeshPhongMaterial({
      map: oldMaterial.map,
      displacementMap: oldMaterial.displacementMap,
      displacementScale: oldMaterial.displacementScale,
      emissive: 0x000000,
    });
    this.mesh.children[0].scale.set(1, 1, 1);
    this.mesh.children[0].material = material;
    //this.rotateAnim = false;
  }

  handleStaticState() {
    this.pos.static = !this.pos.static;
  }

  tick() {
    this.mesh.children[0].rotation.y += this.engine.delta;
    if (this.pos.static) {
      this.initialRotate();
    }
    if (!this.pos.static) {
      this.rotate();
    }
  }
}
