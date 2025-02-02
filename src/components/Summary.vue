<template>
  <section
    class="Summary"
    :class="showSummary ? 'Summary--displayed' : 'Summary--hide'"
  >
    <div class="SummaryContainer">
      <div class="SummaryContent">
        <h2>Who am I ?</h2>
        <p>
          Développeur <em>JavaScript/TypeScript</em>, <br />
          <br />
          J'aime créer des <em>interfaces web</em> en variant les designs,
          concevoir des <em>expériences 3D</em> uniques et amusantes qui vont de
          la présentation de produits jusqu'à des <em>jeux</em> ! <br />
          <br />
          Je souhaite à terme pouvoir créer des expériences en
          <em>réalité augmentée</em> pour smartphone, lunettes et casque de
          réalité virtuelle
        </p>
      </div>
      <div class="SummaryContent">
        <h2>My Work</h2>
        <p>
          Mon travail m'a permis de voir et concevoir différentes choses au sein
          du
          <em>front-end</em> ! <br> <br> Des interfaces soignées avec un
          <em>design system</em> millimétré, en passant par des
          <em>CMS</em> simples mais robustes faits-maison pour améliorer la
          productivité, des <em>pages de lancements</em> de nouveaux produits ou
          de <em>collaboration prestigieuses</em>.
        </p>
        <h5>Worked with</h5>
        <Slider />
        <h5>My Stack</h5>
        <div class="Stack">
          <img v-for="(image, idx) in images" :key="idx" :src="image" />
        </div>
      </div>
      <div class="SummaryContent">
        <h2>Projects</h2>
        <h5>Pro</h5>
        <div class="ContainerProjects">
          <div class="ContainerProject" v-for="(e, i) in 6" :key="i"></div>
        </div>
        <h5>Games</h5>
        <div class="ContainerProjects">
          <div class="ContainerProject" v-for="(e, i) in 6" :key="i"></div>
        </div>
      </div>
    </div>
    <div
      class="Circle CircleRed"
      :style="{ left: circlePos.x + 'px', top: circlePos.y + 'px' }"
    ></div>
    <div
      class="Circle CircleBlue"
      :style="{ left: circlePos.x - 40 + 'px', top: circlePos.y - 40 + 'px' }"
    ></div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useSettings } from "../composable/settings";
import Slider from "./Slider.vue"

const { handleSummary, showSummary, selectedTopic } = useSettings();
const mousePos = ref({
  x: 0,
  y: 0,
});

const circlePos = ref({
  x: 0,
  y: 0,
});

window.addEventListener("mousemove", (e) => {
  mousePos.value.x = e.clientX;
  mousePos.value.y = e.clientY;
});

window.addEventListener("touchmove", (e) => {
  mousePos.value.x = e.touches[0].clientX;
  mousePos.value.y = e.touches[0].clientY;
});

const tick = () => {
  circlePos.value.x = (1 - 0.04) * circlePos.value.x + 0.04 * mousePos.value.x;
  circlePos.value.y = (1 - 0.04) * circlePos.value.y + 0.04 * mousePos.value.y;

  const animate = requestAnimationFrame(() => {
    tick();
  });
};

const images = [
  "/website/images/html.png",
  "/website/images/css.png",
  "/website/images/js.png",
  "/website/images/ts.png",
  "/website/images/vuejslogo.png",
  "/website/images/nuxtlogo.png",
  "/website/images/threelogo.jpg",
  "/website/images/astrologo.jpg",
];

tick();
</script>

<style scoped>
.Summary {
  position: absolute;
  top: 0;
  left: -100%;
  height: 100vh;
  width: 100vw;
  color: white;
  background: rgb(10, 10, 10);
  padding: 200px 50px 50px 50px;
  box-sizing: border-box;
  overflow-x: hidden;
}

.Summary--hide {
  animation: hide 1s ease-in-out;
}

.Summary--displayed {
  left: 0;
  animation: display 1s ease-in-out;
}

.SummaryContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.SummaryTitle {
  margin-bottom: 100px;
  display: flex;
}
.SummaryContent {
  width: 70%;
  margin-bottom: 250px;
}
.SummaryButton {
  margin-bottom: 25px;
  z-index: 2;
}

.ContainerProjects {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.ContainerProject {
  border: 2px white solid;
  aspect-ratio: 16/9;
}
.Circle {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 999px;
  z-index: 0;
}
.CircleBlue {
  background: radial-gradient(
    circle,
    rgba(18, 255, 197, 0.3) 0%,
    rgba(255, 255, 255, 0) 65%
  );
}
.CircleRed {
  background: radial-gradient(
    circle,
    rgba(255, 65, 184, 0.3) 5%,
    rgba(255, 255, 255, 0) 70%
  );
}
.Stack {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}

.Stack img {
  width: 100px;
  height: auto;
}

h2 {
  margin: 0;
  font-family: "Mewatonia";
  font-size: 12em;
  line-height: 94%;
  color: white;
  margin-bottom: 50px;
}

h5 {
  margin: 0;
  font-family: "Mewatonia";
  font-size: 4em;
  line-height: 94%;
  color: #ffffff96;
  margin-bottom: 50px;
  margin-top: 200px;
}

p {
  font-family: "News";
  font-style: italic;
  font-size: 1.5em;
}

em {
  color: #00ffd0;
}

@media screen and (max-width: 900px) {
  .Summary {
    padding: 150px 30px 30px 30px;
  }

  h2 {
    font-size: 6em;
  }

  p {
    font-size: 1em;
  }

  .SummaryTitle {
    width: 100%;
    margin-right: 0px;
  }
  .SummaryContent {
    width: 100%;
    margin-bottom: 150px;
  }

  .ContainerProjects {
    grid-template-columns: repeat(2, 1fr);
  }

  .Stack img {
  width: 80px;
  height: auto;
}
}

@media (max-width: 600px) {
  .ContainerProjects {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
