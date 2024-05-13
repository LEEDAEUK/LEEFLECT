<template>
  <div class="arts-tap-wrapper">
    <img
      class="airplane-img"
      src="../../assets/images/airplane.png"
      alt="airplane"
    />
    <img class="garo-img" src="../../assets/images/garo.jpg" alt="airplane" />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.arts-tap-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .garo-img {
    z-index: 10;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    max-width: 400px;
  }
  .airplane-img {
    z-index: 20;
    width: 65%;
    max-width: 500px;
  }
}
</style>
