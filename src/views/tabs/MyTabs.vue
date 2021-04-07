<template>
  <div class="tabs">
    <div class="tabs-header">
      <div class="tabs-nav-wrap">
        <div
          class="tabs-nav"
          @click="handleTabClick"
        >
          <div
            class="tabs-active-bar"
            ref="tabsActiveBarRef"
          ></div>
          <slot></slot>
        </div>
      </div>
    </div>
    <div class="tabs-content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  name: 'MyTabs',
  setup() {
    const tabsActiveBarRef = ref(null)
    onMounted(() => {
      const _dom = document.querySelectorAll('.tabs-item')
      let tWidth = 0
      let aTLeft = 0
      Array.from(_dom).forEach((node:any, index) => {
        if (index === 0) {
          tWidth = node.offsetWidth
          aTLeft = node.offsetLeft
          node.classList.add('is-active')
        }
        node.onclick = handleTabClick(node, index, Array.from(_dom))
      })
      if (tabsActiveBarRef.value) {
        (tabsActiveBarRef.value as any).style = `width: ${tWidth - 20}px;transform: translateX(${aTLeft}px);`
      }
    })

    const handleTabClick = (el:any, index:number, _domList:Array<Element>) => {
      return () => {
        let defW = 40
        let defL = 20
        _domList.forEach((node:any) => {
          node.classList.remove('is-active')
        })
        const tWidth = el.offsetWidth as number
        const aTLeft = el.offsetLeft as number
        el.classList.add('is-active')
        if (index === 0) defL = 0
        if (index === 0 || index === _domList.length - 1) { defW = 20 }
        (tabsActiveBarRef.value as any).style = `width: ${tWidth - defW}px;transform: translateX(${aTLeft + defL}px);`
      }
    }

    return {
      tabsActiveBarRef,
      handleTabClick
    }
  }
})
</script>

<style scoped lang="scss">
.tabs-header {
  padding: 0;
  position: relative;
  margin: 0 0 15px;
}
.tabs-nav-wrap {
  overflow: hidden;
  margin-bottom: -1px;
  position: relative;
  & > .tabs-nav {
    white-space: nowrap;
    position: relative;
    transition: transform 0.3s;
    z-index: 2;

    & > .tabs-active-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      background-color: #42b983;
      z-index: 1;
      transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      list-style: none;
    }
  }
}

.tabs-nav-wrap:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: #e4e7ed;
  z-index: 1;
}
</style>
