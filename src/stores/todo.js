import { defineStore } from 'pinia'

export const useTodoStore = defineStore({
  id: 'todo',
  state: () => ({
    todos: JSON.parse(localStorage.getItem('todos')) || []
  }),
  actions: {
    addTodo(newTodo) {
      this.todos.push(newTodo)
      this.saveToLocalStorage()
    },
    updateTodo(updatedTodo, index) {
      this.todos.splice(index, 1, updatedTodo)
      this.saveToLocalStorage()
    },
    deleteTodo(index) {
      this.todos.splice(index, 1)
      this.saveToLocalStorage()
    },
    saveToLocalStorage() {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    }
  },
  getters: {
    getTodos: (state) => state.todos
  }
})
