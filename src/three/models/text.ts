import {
  Mesh,
  MeshMatcapMaterial,
  MeshBasicMaterial,
  TextureLoader,
  Group,
  SRGBColorSpace,
  LoadingManager,
  Vector2,
} from "three";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { Engine } from "../engine";

export class Text {
  mesh: Group;
  engine: Engine;
  textureLoader: TextureLoader;
  loadingManager: LoadingManager;

  constructor(engine: Engine) {
    this.engine = engine;

    this.loadingManager = new LoadingManager();
    this.textureLoader = new TextureLoader(this.loadingManager);
    const matCapTexture = this.textureLoader.load('/website/textures/4.png');
    matCapTexture.colorSpace = SRGBColorSpace

    //const geometry = new SphereGeometry(18, 50, 30);
    //const material = new MeshMatcapMaterial({});

    //this.mesh = new Mesh(geometry, material);
    const group = new Group();
    const textMaterial = new MeshMatcapMaterial({
      matcap: matCapTexture
    });

    const fontLoader = new FontLoader();
    fontLoader.load("/website/fonts/mewafont.json", (font) => {
      const textGeometry = new TextGeometry("Acker", {
        font: font,
        size: this.engine.width < 900 ? 2.5 : 4,
        depth: 0.2,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5,
      });

      const mesh = new Mesh(textGeometry, textMaterial);
      mesh.position.set(0, this.engine.width < 900 ? 2.2 : 4, -15)
      mesh.geometry.center()
      mesh.rotation.x = -Math.PI * 2.1;

      group.add(mesh)
    });

    fontLoader.load("/website/fonts/mewafont.json", (font) => {
      const textGeometry = new TextGeometry("Prod", {
        font: font,
        size: this.engine.width < 900 ? 2.5 : 4,
        depth: 0.2,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5,
      });

      const mesh = new Mesh(textGeometry, textMaterial);
      mesh.position.set(0, this.engine.width < 900 ? -.5 : 0, -15)
      mesh.geometry.center()
      mesh.rotation.x = -Math.PI * 2.1;

      group.add(mesh)
    });
    this.mesh = group;
  }

  tick() {}
}
