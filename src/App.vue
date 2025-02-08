<script setup lang="ts">
import Home from "./components/Home.vue";
import Summary from "./components/Summary.vue";
import Loading from "./components/Loading.vue";
import { useSettings } from "./composable/settings";

const { showSummary, handleSummary, isLoading } = useSettings();

setTimeout(() => {
  isLoading.value = false;
}, 2500);
</script>

<template>
  <div class="App">
    <div class="TitleContainer">
      <p class="Title Title--first">Acker'<br />Prod.</p>
    </div>

    <button v-if="!isLoading" class="Button" @click="handleSummary()">
      {{ showSummary === true ? "3D version" : "Summary" }}
    </button>

    <div v-if="showSummary" class="Hidder"></div>

    <Loading v-if="isLoading" />
    <Home />
    <Summary />
  </div>
</template>

<style scoped>
.TitleContainer {
  position: fixed;
  z-index: 4;
  animation: animateTitle 3s ease forwards;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
}

.Title {
  position: relative;
  margin: 0 auto;
  font-family: "Mewatonia";
  line-height: 94%;
  color: white;
}

.Title::before {
  content: "Acker'\AProd";
  position: absolute;
  top: -1px;
  left: -1px;
  color: rgb(0, 255, 213);
  z-index: -1;
}

.Title::after {
  content: "Acker'\AProd";
  position: absolute;
  top: 2px;
  left: 2px;
  color: rgb(255, 48, 21);
  z-index: -2;
}

.Button {
  position: fixed;
  top: 30px;
  right: 30px;
  background: none;
  padding: 15px;
  color: white;
  font-family: "News";
  font-style: italic;
  border: 4px white solid;
  font-size: 1.3rem;
  cursor: pointer;
  z-index: 4;
  backdrop-filter: blur(20px);
}

.Hidder {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 150px;
  background: linear-gradient(
    180deg,
    rgb(10, 10, 10) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  z-index: 3;
}

@media screen and (max-width: 900px) {
  .Button {
    font-size: 0.8em;
    padding: 10px;
    top: 45px;
    right: 30px;
    border: 2px solid white;
  }
}
</style>
