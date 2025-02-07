<template>
  <section class="Home">
    <div ref="div" class="Scene"></div>
    <!--<div
      class="PanelInfos"
      :class="displayInfos ? 'PanelInfos--enter': 'PanelInfos--leave'"
    ></div>-->
    <button class="ButtonContinue" @click="manageSteps(engine.cylinder.pos)">
      {{ textToDisplay }}
    </button>
    <button style="display: none; position: absolute; z-index: 10" @click="() => {displayInfos = !displayInfos}">test</button>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Engine } from "../three/engine";
import { useSettings } from "../composable/settings";

const { manageSteps, textToDisplay, displayInfos } = useSettings();

let engine;
const div = ref();

onMounted(() => {
  engine = new Engine(div.value);
});
</script>

<style scoped>
.Home {
  height: 100vh;
  width: 100vw;
  color: white;
  position: relative;
  overflow: hidden;
}

.Scene {
  position: fixed;
  top: 0;
  left: 0;
}

.ButtonTest {
  position: fixed;
  top: 120px;
  right: 30px;
  background: none;
  padding: 15px;
  color: white;
  font-family: "News";
  font-style: italic;
  border: 4px white solid;
  font-size: 1.3rem;
  cursor: pointer;
}

.ButtonContinue {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
  background: none;
  padding: 15px 20px;
  backdrop-filter: blur(20px);
  color: white;
  font-family: "News";
  font-style: italic;
  border: 4px white solid;
  font-size: 1.3rem;
  cursor: pointer;
  white-space: nowrap;
}

.PanelInfos {
  width: 75%;
  height: 80%;
  border-radius: 8px;
  border: 5px solid rgba(0, 238, 255);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  backdrop-filter: blur(10px);
  z-index: -1;
  filter: drop-shadow(0px 0px 8px rgba(0, 238, 255));
}

.PanelInfos--enter {
  animation: panelEnter 2s ease forwards;
  animation-delay: 1s;
}

.PanelInfos--leave {
  animation: panelLeave 2s ease forwards;
}

@media screen and (max-width: 900px) {
  .ButtonTest {
    font-size: 0.8em;
    padding: 10px;
    top: 85px;
    right: 30px;
    border: 2px solid white;
  }
}
</style>
