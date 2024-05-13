<template>
  <div class="tabs-wrapper">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="Arts" name="arts" class="art-panel">
        <ArtTab></ArtTab>
      </el-tab-pane>
      <el-tab-pane label="Shop" name="shop" class="shop-panel">
        <div style="height: 300px; background-color: red">Shop</div>
        <div style="height: 300px; background-color: blue">Shop</div>
        <div style="height: 300px; background-color: green">Shop</div>
        <div style="height: 300px; background-color: pink">Shop</div>
      </el-tab-pane>
      <el-tab-pane label="Trip" name="trip" class="trip-panel"
        >Trip</el-tab-pane
      >
      <el-tab-pane label="Contact" name="contact" class="contact-panel"
        >Contact</el-tab-pane
      >
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { TabsPaneContext } from 'element-plus';
import ArtTab from '@/components/tabs/ArtsTab.vue';

const activeName = ref('arts');

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>

<style lang="scss" scoped>
.tabs-wrapper {
  width: 100%;
  max-width: 1440px;
  height: 100%;
  overflow: hidden;
  :deep(.el-tabs) {
    height: 100%;
    display: flex;
    flex-direction: column;
    .el-tabs__content {
      height: 100%;
    }
    .el-tab-pane {
      height: 100%;
      &.art-panel {
      }
      &.shop-panel {
        overflow: auto;
      }
    }
    .el-tabs__nav-scroll {
      display: flex !important;
      justify-content: center !important;
    }
    .el-tabs__item {
      font-size: $font-size-large;
    }
    .el-tabs__nav-wrap:after {
      display: none;
    }
  }
}
</style>
