<template>
  <div
    class="tabs-item"
    :label="label"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MyTabPane',
  props: {
    label: String
  }
})
</script>

<style scoped lang="scss">
.tabs-item {
  padding: 0 20px;
  height: 40px;
  box-sizing: border-box;
  line-height: 40px;
  display: inline-block;
  list-style: none;
  font-size: 14px;
  font-weight: 500;
  color: #303133;
  position: relative;

  &:hover {
    cursor: pointer;
    color: #42b983;
  }

  &:nth-child(2) {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
}

.is-active {
  color: #42b983 !important;
}
</style>
