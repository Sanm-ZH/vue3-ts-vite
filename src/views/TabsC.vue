<template>
  <div class="tabs-cont">
    <label>Ex 1.</label>
    <ul @click="handleClick">
      <li
        v-for="item in ex1List"
        :key="item"
        :data-index="item"
        :class="{'active-tab': activeIndex === item}"
      >
        {{ `nav-${item}` }}
      </li>
    </ul>
  </div>
  <div class="tabs-cont">
    <label>Ex 2.</label>
    <my-tabs>
      <my-tab-pane label="Home">Home</my-tab-pane>
      <my-tab-pane label="Todo">Todo</my-tab-pane>
      <my-tab-pane label="HFixed">HFixed</my-tab-pane>
      <my-tab-pane label="TextTransition">TextTransition</my-tab-pane>
      <my-tab-pane label="Tabs">Tabs</my-tab-pane>
    </my-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import MyTabs from './tabs/MyTabs.vue'
import MyTabPane from './tabs/MyTabPane.vue'
export default defineComponent({
  name: 'TabsC',
  components: {
    MyTabs,
    MyTabPane
  },
  setup() {
    const ex1List = [1, 2, 3, 4, 5]
    const activeIndex = ref(0)
    const handleClick = (e: any): void => {
      if (e.target.nodeName.toLowerCase() === 'li') {
        activeIndex.value = parseInt(e.target.dataset.index)
      }
    }

    return {
      ex1List,
      handleClick,
      activeIndex
    }
  }
})
</script>

<style scoped lang="scss">
@import "../styles/_style.scss";

.tabs-cont {
  label {
    font-size: 14px;
    font-weight: 600;
    display: block;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 15px 0;
    display: inline-flex;
    justify-content: center;
  }
  li {
    position: relative;
    padding: 5px 10px;
    cursor: pointer;
  }
  li::before {
    content: "";
    position: absolute;
    top: -2px;
    left: 100%;
    width: 0;
    height: 100%;
    border-bottom: 2px solid $base-color;
    transition: 0.2s all linear;
  }
  li:hover::before {
    width: 100%;
    top: -2px;
    left: 0;
    transition-delay: 0.1s;
    border-bottom-color: $base-color;
    z-index: -1;
  }
  li:hover ~ li::before {
    left: 0;
  }
  li:active {
    background: $base-color;
    color: #fff;
  }

  .active-tab {
    font-weight: 600;
    color: $base-color;
    border-bottom: 2px solid $base-color;
  }

  ul:hover .active-tab {
    border: none;
  }
}
</style>
