<template>
  <div class="helper">
    <span class="left"><b>{{ unFinishedTodoLength }}</b> iteams left</span>
    <span class="tabs">
      <span
        v-for="state in states"
        :key="state"
        :class="[state, filter === state ? 'actived' : '']"
        @click="toggleFilter(state)"
      >
        {{ state }}
      </span>
    </span>
    <span
      class="clear"
      @click="clearAllCompleted"
    >Clear completed</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import { TodoItem } from './todoInterface'
export default defineComponent({
  props: {
    filter: {
      type: String,
      required: true
    },
    todos: {
      type: Array as PropType<TodoItem>,
      required: true
    }
  },
  setup(props, { emit }) {
    const states = ['all', 'active', 'completed']

    const unFinishedTodoLength = computed(() => {
      const unFinishedList = (props.todos as Array<TodoItem>).filter(
        (todo) => !todo.completed
      )
      return unFinishedList.length
    })

    const toggleFilter = (state: string): void => {
      emit('toggle', state)
    }

    const clearAllCompleted = (): void => {
      emit('clearAll')
    }

    return {
      states,
      unFinishedTodoLength,
      toggleFilter,
      clearAllCompleted
    }
  }
})
</script>

<style scoped lang="scss">
.helper {
  font-weight: 100;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  line-height: 30px;
  background-color: #ffffff;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  position: sticky;
  bottom: 0;
}
.left,
.tabs {
  padding: 10px 10px 0px;
  box-sizing: border-box;
  color: #000;
  font-weight: 400;
}
.left,
.clear {
  width: 150px;
}
.left {
  text-align: left;
  b {
    color: #42b983;
  }
}
.clear {
  text-align: right;
  cursor: pointer;
  border: 1px solid #e3e3e3;
  height: 30px;
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 3px;
  margin-top: 10px;
  color: #b9b9b9;
  font-weight: bold;
  transition-property: text-shadow, box-shadow;
  transition-duration: 0.5s, 1s;
  &:hover {
    text-shadow: 5px 3px 3px;
    box-shadow: 0 0 10px 2px;
  }
}
.tabs {
  width: 200px;
  display: flex;
  justify-content: space-around;
  & > span {
    font-weight: bold;
  }
  * {
    display: inline-block;
    padding: 0px 10px;
    cursor: pointer;
    &.actived {
      background-color: #42b983;
      border-radius: 3px;
      color: #fff;
      font-weight: bold;
      transition: background-color 0.5s;
    }
  }
}
@media (max-width: 28.125rem) {
  .helper {
    flex-direction: row;
    flex-wrap: wrap;
    position: sticky;
    bottom: 0;
  }
  .left {
    width: 6.25rem;
    padding: 0;
  }
  .tabs {
    padding: 0;
  }
  .clear {
    position: relative;
    left: calc(100% - 9.7rem);
  }
}
@media (max-width: 18.75rem) {
  .helper {
    flex-direction: row;
    flex-wrap: wrap;
    position: sticky;
    bottom: 0;
  }
  .left {
    padding: 0;
  }
  .tabs {
    padding: 0;
  }
  .clear {
    position: relative;
    left: 0;
  }
}
</style>
