<template>
  <div class="flex flex-column align-items-center">
    <template
      v-for="(item, index) in lists"
      :key="index"
    >
      <div
        :key="`${item}-header`"
        v-if="index%2===0"
        class="fixed top0 z-index9999 flex flex-column align-items-center width-100"
      >
        <p class="banner">{{item}} HEADER</p>
      </div>
      <div class="flex flex-column align-items-center width-100">
        <div class="panel">
          <p class="text">{{item}}</p>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const lists = [
      'First', 'Second', 'Third', 'Fourth',
      'Fifth', 'Sixth', 'Seventh', 'Eighth'
    ]

    return {
      lists
    }
  }
})
</script>

<style scoped lang="scss">
.banner {
  width: 750px;
  padding: 25px;
  font-size: 60px;
  text-align: center;
  font-weight: bold;
  color: #41b883;
  background-color: rgb(162, 217, 192);
}
.panel {
  width: 600px;
  height: 300px;
  margin: 35px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(162, 217, 192);
  background-color: rgba(162, 217, 192, 0.2);
}
.text {
  font-size: 50px;
  text-align: center;
  color: #41b883;
}
@media (max-width: 28.125rem) {
  .banner {
    width: 90%;
    font-size: 1.875rem;
  }
  .panel {
    width: 80%;
    margin: 0.9375rem;
  }
  .text {
    font-size: 1.5rem;
  }
}
</style>
