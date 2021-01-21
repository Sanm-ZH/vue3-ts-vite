<template>
  <div :class="['todo-item', todo.completed ? 'completed' : '', isPc ? '': 'notPc']">
    <input
      type="checkbox"
      class="toggle"
      :value="+todo.completed"
      :checked="todo.completed"
      @click="optCompletedClick"
    />
    <label>{{ todo.content }}</label>
    <button
      class="destroy"
      @click="deleteTodo"
    >
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TodoItem } from './todoInterface'

export default defineComponent({
  props: {
    todo: {
      type: Object as PropType<TodoItem>,
      required: true
    },
    isPc: {
      type: Boolean,
      required: true
    }
  },
  setup(props, { emit }) {
    const deleteTodo = (): void => {
      emit('del', props.todo.id)
    }
    const optCompletedClick = (): void => {
      emit('opt', props.todo.id)
    }

    return {
      optCompletedClick,
      deleteTodo
    }
  }
})
</script>

<style scoped lang="scss">
.todo-item {
  position: relative;
  background: #ffffff;
  font-size: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  &:hover {
    .destroy::before {
      opacity: 1;
    }
  }

  label {
    white-space: pre-line;
    word-break: break-all;
    padding: 15px 60px 15px 15px;
    margin-left: 45px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
    color: #000;
    font-weight: 500;
  }
}
.completed {
  label {
    color: #c1c1c1;
  }
  color: #d9d9d9;
  text-decoration: line-through;
}
.toggle {
  text-align: center;
  width: 100%;
  height: 40px;
  position: absolute;
  top: -3px;
  bottom: 0;
  left: 0;
  margin: auto 0;
  border: none;
  outline: none;
  appearance: none;
}
.toggle:before {
  content: url("../../assets/round.png");
  position: absolute;
  left: 12px;
  top: 12px;
  cursor: pointer;
}
.toggle:checked:before {
  content: url("../../assets/done.png");
  position: absolute;
  left: 12px;
  top: 12px;
  cursor: pointer;
}
.destroy {
  position: absolute;
  top: 6px;
  right: 10px;
  margin: auto 0;
  font-size: 30px;
  color: #de0f0f;
  margin-bottom: 11px;
  transition: color 0.2s east-out;
  background-color: transparent;
  appearance: none;
  border-width: 0;
  cursor: pointer;
  outline: none;
  &::before {
    content: "x";
    font-size: 20px;
    opacity: 0;
    transition: opacity 1s;
  }
}
.notPc {
  .destroy::before {
    opacity: 1;
  }
}
</style>
