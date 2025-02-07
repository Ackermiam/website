import {
  Mesh,
  MeshMatcapMaterial,
  TextureLoader,
  Group,
  SRGBColorSpace,
  LoadingManager,
} from "three";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { Engine } from "../engine";
import { useSettings } from "../../composable/settings";

const { steps, currentStep } = useSettings();

export class Text {
  mesh: Group;
  engine: Engine;
  textureLoader: TextureLoader;
  loadingManager: LoadingManager;
  animation: {
    smaller: boolean;
    higher: boolean;
    near: number;
    far: number;
  };
  font: any;
  textMeshFirst: Mesh;
  textMeshSecond: Mesh;

  constructor(engine: Engine) {
    this.animation = {
      smaller: false,
      higher: true,
      near: 0.3,
      far: -12,
    };

    this.engine = engine;

    this.loadingManager = new LoadingManager();
    this.textureLoader = new TextureLoader(this.loadingManager);

    this.loadFont();
  }

  loadFont() {
    const fontLoader = new FontLoader();
    fontLoader.load("/website/fonts/mewafont.json", (font) => {
      this.font = font;
      this.createText();
    });
  }

  disposeText() {
    this.textMeshFirst.geometry.dispose();
    this.textMeshSecond.geometry.dispose();
  }

  createText() {
    const matCapTexture = this.textureLoader.load("/website/textures/4.png");
    matCapTexture.colorSpace = SRGBColorSpace;

    const textMaterial = new MeshMatcapMaterial({
      matcap: matCapTexture,
    });

    const geometryFirst = new TextGeometry(
      `${steps[currentStep.value].first}`,
      {
        font: this.font,
        size: this.engine.width < 900 ? 2 : 4,
        depth: 0.2,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5,
      }
    );
    this.textMeshFirst = new Mesh(geometryFirst, textMaterial);
    this.textMeshFirst.position.set(0, this.engine.width < 900 ? 2.2 : 4, -15);
    this.textMeshFirst.geometry.center();
    this.textMeshFirst.rotation.x = -Math.PI * 2.1;

    const geometrySecond = new TextGeometry(
      `${steps[currentStep.value].second}`,
      {
        font: this.font,
        size: this.engine.width < 900 ? 2 : 4,
        depth: 0.2,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5,
      }
    );
    this.textMeshSecond = new Mesh(geometrySecond, textMaterial);
    this.textMeshSecond.position.set(0, this.engine.width < 900 ? -0.5 : 0, -15);
    this.textMeshSecond.geometry.center();
    this.textMeshSecond.rotation.x = -Math.PI * 2.1;

    const group = new Group();
    group.add(this.textMeshFirst, this.textMeshSecond);
    group.position.y = -10;
    this.mesh = group;
    this.engine.scene.add(this.mesh);
  }

  nextStep() {
    const newGeometryFirst = new TextGeometry(
      `${steps[currentStep.value].first}`,
      {
        font: this.font,
        size: this.engine.width < 900 ? 2 : 4,
        depth: 0.2,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5,
      }
    );

    this.textMeshFirst.geometry.dispose();

    this.textMeshFirst.geometry = newGeometryFirst;
    this.textMeshFirst.geometry.center();

    const newGeometrySecond = new TextGeometry(
      `${steps[currentStep.value].second}`,
      {
        font: this.font,
        size: this.engine.width < 900 ? 2 : 4,
        depth: 0.2,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5,
      }
    );
    this.textMeshSecond.geometry.dispose();
    this.textMeshSecond.geometry = newGeometrySecond;
    this.textMeshSecond.geometry.center();
    this.handleText();
  }

  triggerNextStep() {
    currentStep.value++;
    this.handleText();
    if(currentStep.value < steps.length - 1) {
      setTimeout(() => {
        this.nextStep();
      }, 1000);
    }
  }

  handleText() {
    this.animation.smaller = !this.animation.smaller;
    this.animation.higher = !this.animation.higher;
  }

  changeText() {
    if (this.animation.higher) {
      const size =
        (1 - 0.02) * this.mesh.position.y + 0.02 * this.animation.near;
      this.mesh.position.y = size;
    }
    if (this.animation.smaller) {
      const size =
        (1 - 0.02) * this.mesh.position.y + 0.02 * this.animation.far;
      this.mesh.position.y = size;
    }
  }

  tick() {
    this.changeText();
  }
}
