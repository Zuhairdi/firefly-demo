<template>
  <div class="main-container">
    <FireflyField />
  </div>
</template>

<script setup lang="ts">
// FireflyField is auto-imported by Nuxt components
</script>

<style scoped>
.main-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background:
    radial-gradient(circle at 20% 0%, #0b1a2a 0, #000 60%),
    radial-gradient(circle at 80% 100%, #050810 0, #000 60%);
}
</style>
