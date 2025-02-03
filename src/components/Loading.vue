<template>
  <section class="Loading"></section>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useSettings } from "../composable/settings";

const { handleSummary, showSummary, selectedTopic } = useSettings();
</script>

<style scoped>
.Loading {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgb(10, 10, 10);
  box-sizing: border-box;
  overflow-x: hidden;
  z-index: 3;
  animation: animateLoading 2.7s ease;
  opacity: 1;
}
</style>
