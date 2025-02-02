<template>
  <div class="carousel-container">
    <div class="carousel-track">
      <div
        v-for="(image, index) in images"
        :key="`main-${index}`"
        class="carousel-slide"
      >
        <img :src="image" :alt="`Slide ${index + 1}`" class="carousel-image" />
      </div>
    </div>
  </div>
</template>

<script setup>
const images = [
  "/website/images/LogNes.jpg",
  "/website/images/VtsLogo.PNG",
  "/website/images/CerfLogo.jpg",
  "/website/images/LogNes.jpg",
  "/website/images/VtsLogo.PNG",
  "/website/images/CerfLogo.jpg",
  "/website/images/LogNes.jpg",
  "/website/images/VtsLogo.PNG",
  "/website/images/CerfLogo.jpg",
  "/website/images/LogNes.jpg",
  "/website/images/VtsLogo.PNG",
  "/website/images/CerfLogo.jpg",
];
</script>

<style scoped>
.carousel-container {
  margin: 50px auto;
  overflow: hidden;
  position: relative;
}

.carousel-track {
  display: flex;
  gap: 40px;
  animation: scroll 40s linear infinite;
}

.carousel-image {
  width: 250px;
  height: auto;
  object-fit: cover;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

.carousel-track:hover {
  animation-play-state: paused;
}

.carousel-slide {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

@media screen and (max-width: 900px) {
  .carousel-image {
    width: 150px;
    height: auto;
    object-fit: cover;
  }

  .carousel-track {
    display: flex;
    gap: 20px;
    animation: scroll 30s linear infinite;
  }
}
</style>
