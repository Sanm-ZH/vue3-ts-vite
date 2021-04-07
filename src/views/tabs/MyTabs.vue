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
          <div class="tabs-item item-frist">nav 1</div>
          <div class="tabs-item">nav 2</div>
          <div class="tabs-item">nav 3</div>
          <div class="tabs-item">nav 4</div>
          <div class="tabs-item item-last">nav 5</div>
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
      const _dom = document.getElementsByClassName('tabs-item')
      const tWidth = (_dom[0] as any).getBoundingClientRect().width as number
      const aTLeft = (_dom[0] as any).getBoundingClientRect().left as number
      _dom[0].classList.add('is-active');
      (tabsActiveBarRef.value as any).style = `width: ${tWidth - 20}px;transform: translateX(${aTLeft}px);`
    })

    const handleTabClick = (el:PointerEvent) => {
      const _domList = document.querySelectorAll('.tabs-item')
      _domList.forEach((node:any) => {
        node.classList.remove('is-active')
      })
      let defW = 40
      let defL = 20
      const isFirst = (el.target as any).classList.value.includes('item-frist')
      const isLast = (el.target as any).classList.value.includes('item-last')

      const tWidth = (el.target as any).offsetWidth as number
      const aTLeft = (el.target as any).offsetLeft as number
      (el.target as any).classList.add('is-active')
      if (isFirst) defL = 0
      if (isFirst || isLast) { defW = 20 }
      (tabsActiveBarRef.value as any).style = `width: ${tWidth - defW}px;transform: translateX(${aTLeft + defL}px);`

      return false
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
    & > div:nth-child(2) {
      padding-left: 0;
    }

    & > div:last-child {
      padding-right: 0;
    }

    & > .tabs-item {
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

.is-active {
  color: #42b983 !important;
}
</style>
