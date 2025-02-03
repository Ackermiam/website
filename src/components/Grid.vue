<template>
  <div class="ContainerProjects">
    <a
      class="ContainerProject"
      v-for="(e, i) in project"
      :href="e.url"
      target="_blank"
      rel="noopener noreferrer"
      :key="i"
      :style="{
        background: `url(${e.img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'norepeat',
      }"
    >
      <svg
        v-if="e.isPhoneComp"
        id="Smartphone_Approve_24"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <rect width="24" height="24" stroke="none" fill="#ffffff" opacity="0" />

        <g transform="matrix(0.83 0 0 0.83 12 12)">
          <path
            style="
              stroke: none;
              stroke-width: 1;
              stroke-dasharray: none;
              stroke-linecap: butt;
              stroke-dashoffset: 0;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              fill: #00ffd0;
              fill-rule: nonzero;
              opacity: 1;
            "
            transform=" translate(-16, -16)"
            d="M 11 4 C 9.3550302 4 8 5.3550302 8 7 L 8 25 C 8 26.64497 9.3550302 28 11 28 L 21 28 C 22.64497 28 24 26.64497 24 25 L 24 7 C 24 5.3550302 22.64497 4 21 4 L 11 4 z M 11 6 L 21 6 C 21.56503 6 22 6.4349698 22 7 L 22 25 C 22 25.56503 21.56503 26 21 26 L 11 26 C 10.43497 26 10 25.56503 10 25 L 10 7 C 10 6.4349698 10.43497 6 11 6 z M 19.292969 11.292969 L 15 15.585938 L 12.707031 13.292969 L 11.292969 14.707031 L 15 18.414062 L 20.707031 12.707031 L 19.292969 11.292969 z M 14 23 L 14 25 L 18 25 L 18 23 L 14 23 z"
            stroke-linecap="round"
          />
        </g>
      </svg>
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps<{ project: string[] }>();
</script>

<style scoped>
.ContainerProjects {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.ContainerProject {
  border-radius: 8px;
  aspect-ratio: 16/9;
  transition: all 0.3s;
}

.ContainerProject:hover {
  box-shadow: 0px 0px 15px #00ffd09c;
  transform: scale(1.02);
}

svg {
  margin-top: 2px;
}

@media screen and (max-width: 900px) {
  .ContainerProjects {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .ContainerProjects {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
