<template>
  <div class="home-view-wrapper">
    <div class="page-title">LEEFLECT</div>
    <Tabs></Tabs>
  </div>
</template>

<script setup lang="ts">
import Tabs from '@/components/tabs/Tabs.vue';
</script>

<style lang="scss" scoped>
.home-view-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .page-title {
    display: flex;
    justify-content: center;
    font-size: $font-size-huge;
    font-weight: $font-weight-bold;
    margin: 20px 0;
    color: $grey-2;
  }
}
</style>
