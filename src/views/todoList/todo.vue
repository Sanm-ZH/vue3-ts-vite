<template>
  <div>
    <div class="todo-app">
      <input
        type="text"
        class="add-input"
        ref="inputRef"
        placeholder="接下来要做什么？"
        @keyup.enter="addTodo"
      />
      <Item
        v-for="todo in filteredTodos.value"
        :todo="todo"
        :key="todo.id"
        :isPc="isPc"
        @del="deleteTodo"
        @opt="optCompleted"
      />
      <Tabs
        :filter="filter"
        :todos="todos"
        @toggle="toggleFilter"
        @clearAll="clearAllCompleted"
      />
    </div>
    <Author />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed, watch, onMounted } from 'vue'
import Item from './item.vue'
import Tabs from './tab.vue'
import Author from './author'
import { TodoItem } from './todoInterface'
import { isPCHandle } from '@/utils/utils'

export default defineComponent({
  name: 'TodoPage',
  components: {
    Item,
    Tabs,
    Author
  },
  setup() {
    const lStorage = localStorage['test_vue3_demo'] ? JSON.parse(localStorage['test_vue3_demo']) : {}
    let id = 0
    const isPc = ref(true)
    const inputRef = ref<HTMLElement | null>(null)
    onMounted(() => {
      isPc.value = isPCHandle()
      inputRef.value && inputRef.value.focus()
    })
    const _todos = lStorage['todos'] || []
    let todos = reactive(_todos as Array<TodoItem>)
    const addTodo = (e: any): void => {
      if (!e.target.value.trim()) {
        // 没有输入不添加
        return
      }
      todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      })
      e.target.value = ''
    }
    const deleteTodo = (id: number): void => {
      todos.splice(todos.findIndex((todo) => todo.id === id), 1)
    }
    const clearAllCompleted = (): void => {
      const activeList = todos.filter(todo => !todo.completed)
      todos = activeList
    }
    const optCompleted = (id: number): void => {
      const activeTodoIndex = todos.findIndex(item => item.id === id)
      todos[activeTodoIndex]['completed'] = !todos[activeTodoIndex]['completed']
    }
    watch(todos,
      (nv) => {
        lStorage['todos'] = nv
        localStorage['test_vue3_demo'] = JSON.stringify(lStorage)
      }
    )

    const _filter: string = lStorage['filter'] || 'all'
    const filter = ref(_filter)
    const toggleFilter = (state: string): void => {
      filter.value = state
    }
    watch(filter,
      (nv) => {
        lStorage['filter'] = nv
        localStorage['test_vue3_demo'] = JSON.stringify(lStorage)
      }
    )

    const filteredTodos = computed(() => {
      if (filter.value === 'all') {
        return ref(todos)
      }
      const flag = filter.value === 'completed'
      return ref(todos.filter(todo => flag === todo.completed))
    })

    return {
      todos,
      addTodo,
      optCompleted,
      deleteTodo,
      clearAllCompleted,
      filter,
      toggleFilter,
      filteredTodos,
      isPc,
      inputRef
    }
  }
})
</script>

<style scoped lang="scss">
.todo-app {
  opacity: 0.7;
  max-width: 620px;
  margin: 0px auto;
  box-shadow: 6px 2px 10px #3c3c3c;
  border-radius: 5px;
  padding: 10px;
  background: #ffffff;

  @media (max-width: 28.125rem) {
    margin: 0 1.25rem;
  }
}
.add-input {
  margin: 0px;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4rem;
  border: 0;
  outline: none;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0px rgba(0, 0, 0, 0);
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  padding: 16px 16px 16px 16px;
  border: none;
  z-index: 1000;
  display: flex;
  text-align: center;
  position: sticky;
  top: 0;
  @media (max-width: 18.75rem) {
    font-size: 1rem;
  }
}
</style>
