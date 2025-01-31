<template>
  <section class="Home">
    <div ref="div" class="Scene"></div>
    <div class="TitleContainer">
      <h1 class="Title Title--first">Acker'<br />Prod</h1>
      <p class="Title Title--blue">Acker'<br />Prod</p>
      <p class="Title Title--red">Acker'<br />Prod</p>
    </div>

    <button class="Button">version résumée</button>

    <div class="DescriptionContainer">
      <p class="Description Description--first">
        web and 3D experience <br />
        creation studio
      </p>
      <p class="Description Description--blue">
        web and 3D experience <br />
        creation studio
      </p>
      <p class="Description Description--red">
        web and 3D experience <br />
        creation studio
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Engine } from "../three/engine";

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

.TitleContainer {
  position: fixed;
  width: 100%;
  top: 50px;
  left: 50px;
}

.Title {
  position: absolute;
  margin: 0;
  font-family: "Mewatonia";
  font-size: 4em;
  line-height: 94%;
}

.Title--first {
  top: 0px;
  left: 0px;
  z-index: 1;
}
.Title--red {
  top: 2px;
  left: 2px;
  color: rgb(255, 48, 21);
}
.Title--blue {
  top: -1px;
  left: -1px;
  color: rgb(0, 255, 213);
}

.Button {
  position: fixed;
  top: 50px;
  right: 50px;
  background: none;
  padding: 15px;
  color: white;
  font-family: "News";
  font-style: italic;
  border: 4px white solid;
  font-size: 1.3rem;
  cursor: pointer;
}

.DescriptionContainer {
  position: fixed;
  width: 100%;
  bottom: 50px;
  right: 50px;
}

.Description {
  position: absolute;
  margin: 0;
  font-family: "News";
  font-style: italic;
  font-size: 2.25em;
}

.Description--first {
  bottom: 0px;
  right: 0px;
  z-index: 1;
}
.Description--blue {
  bottom: 1px;
  right: 1px;
  color: rgb(0, 255, 213);
}
.Description--red {
  bottom: -1px;
  right: -1px;
  color: rgb(255, 48, 21);
}

@media screen and (max-width: 900px) {
  .Title {
    font-size: 2.3em;
  }

  .Description {
    font-size: 1em;
  }

  .Button {
    font-size: 0.8em;
    padding: 10px;
    top: 35px;
    right: 30px;
    border: 2px solid white;
  }

  .DescriptionContainer {
    bottom: 30px;
    right: 30px;
  }

  .TitleContainer {
    position: fixed;
    width: 100%;
    top: 30px;
    left: 30px;
  }
}
</style>
