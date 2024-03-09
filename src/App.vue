<template>
  <div class="app">
    <TodoList />
  </div>
</template>

<script>
import { provide } from 'vue'
import './assets/main.css'
import TodoList from './components/TodoList.vue'
import { useTodoStore } from './stores/todo'

export default {
  name: 'App',
  components: {
    TodoList
  },
  setup() {
    const store = useTodoStore()
    provide('todoStore', store)
  }
}
</script>
