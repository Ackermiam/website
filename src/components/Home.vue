<template>
  <section class="Home">
    <div ref="div" class="Scene"></div>

    <button class="ButtonTest" @click="engine.handleHyperspeed()">hypervitesse test</button>
    <button class="ButtonContinue" @click="manageSteps()">Continue</button>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Engine } from "../three/engine";
import { useSettings } from "../composable/settings";

const { manageSteps, nextText, handleSummary, handleDisplayWorlds, currentStep, steps, showSummary, isLoading } = useSettings();

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
}

@media screen and (max-width: 900px) {
  .ButtonTest {
    font-size: 0.8em;
    padding: 10px;
    top: 85px;
    right: 30px;
    border: 2px solid white;
  }

  .ButtonContinue {
    font-size: 0.8em;
    padding: 10px;
    border: 2px solid white;
  }
}
</style>
