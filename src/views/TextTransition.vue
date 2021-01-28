<template>
  <div class="text">{{ content }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const content = 'Vue3 TypeScript Vite 项目'

    return {
      content
    }
  }
})
</script>

<style scoped lang="scss">
.text {
  font-size: 18px;
  font-weight: 600;
  background: -webkit-linear-gradient(left, #2c3e50, #42b983);
  background: -o-linear-gradient(left, #2c3e50, #42b983);
  background: -moz-linear-gradient(left, #2c3e50, #42b983);
  background: linear-gradient(left, #2c3e50, #42b983);
  -webkit-text-fill-color: transparent;
  -o-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  -webkit-background-clip: text;
  -o-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  background-size: 200% 100%;
  -webkit-animation: textAn 4s infinite linear;
  -o-animation: textAn 4s infinite linear;
  -moz-animation: textAn 4s infinite linear;
  animation: textAn 4s infinite linear;
}

@-webkit-keyframes textAn {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -100% 0;
  }
}

@-o-keyframes textAn {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -100% 0;
  }
}

@-moz-keyframes textAn {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -100% 0;
  }
}

@keyframes textAn {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -100% 0;
  }
}
</style>
