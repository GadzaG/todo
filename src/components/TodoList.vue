<template>
  <div class="md-5">
    <h1>TODO List Demo App</h1>
    <button type="button" class="btn btn-default add-button" @click="showAddModal = true">
      Add
    </button>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Task name</th>
          <th scope="col">Status</th>
          <th scope="col">Edit</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>
      <tbody>
        <div v-if="todos.length === 0">{{ console.log('l = 0') }}</div>
        <div v-else>
          <TodoItem v-for="(todo, index) in todos" :key="todo.id" :todo="todo" :index="index" />
        </div>
      </tbody>
    </table>
    <p>{{ todos }}</p>
    <AddModal v-if="showAddModal" @close="showAddModal = false" @addTodo="addTodo" />
    <EditModal
      v-if="showEditModal"
      @close="showEditModal = false"
      @updateTodo="updateTodo($event, todo, editedIndex)"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import { useTodoStore } from '../stores/todo.js'
import AddModal from './AddModal.vue'
import EditModal from './EditModal.vue'
import TodoItem from './TodoItem.vue'
export default {
  name: 'TodoList',
  components: {
    TodoItem,
    AddModal,
    EditModal
  },
  setup() {
    const store = useTodoStore()
    const todos = store.getTodos

    const showAddModal = ref(false)
    const showEditModal = ref(false)
    const editedIndex = ref(null)
    const editedTodo = ref({})

    const addTodo = (newTodo) => {
      store.addTodo(newTodo)
      showAddModal.value = false
    }

    const updateTodo = (updatedTodo, index) => {
      editedIndex.value = index
      editedTodo.value = { ...updatedTodo }
      showEditModal.value = true
    }

    const deleteTodo = (index) => {
      store.deleteTodo(index)
    }

    return {
      todos,
      showAddModal,
      showEditModal,
      editedIndex,
      editedTodo,
      addTodo,
      updateTodo,
      deleteTodo
    }
  }
}
</script>

<style scoped></style>

<!-- <template>
  <div class="container">
    <h1>TODO List Demo App</h1>
    <form @submit.prevent="addTask">
      <div class="form-group">
        <input v-model="newTask" class="form-control" placeholder="Enter task" />
      </div>
      <button type="submit" class="btn btn-default">Add Task</button>
    </form>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Task name</th>
          <th scope="col">Status</th>
          <th scope="col">Edit</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>
      <tbody>
        <Task
          v-for="(task, index) in tasks"
          :key="task.id"
          :task="task"
          :index="index"
          :deleteTask="deleteTask"
        />
      </tbody>
    </table>

    <ul class="list-group">
      <li class="list-group-item" v-for="(task, index) in tasks" :key="index">
        <input type="checkbox" v-model="task.completed" @change="updateTask(task)" />
        <span :class="{ completed: task.completed }">{{ task.text }}</span>
        <button @click="deleteTask(index)" class="btn btn-danger float-right">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { useTodoStore } from '../stores/todo.js'
import { ref } from 'vue'
import TodoItem from './TodoItem.vue'

export default {
  name: 'App',
  components: {
    TodoItem
  },
	
	setup(){
		const store = useTodoStore()
    const todos = store.getTodos
    
		const addTodo = (newTodo) => {
      store.addTodo(newTodo)
      showAddModal.value = false
    }

    const editTodo = (updatedTodo, index) => {
      editedIndex.value = index
      editedTodo.value = { ...updatedTodo }
      showEditModal.value = true
    }

    const deleteTodo = (index) => {
      store.deleteTodo(index)
    }

	}
	return{
		newTask,
		tasks
	}

	data() {
    return {
      newTask: '',
      tasks: []
    }
  },
  methods: {
    addTask() {
      this.tasks.push({
        text: this.newTask,
        completed: false
      })
      this.newTask = ''
    },
    updateTask(task) {
      const index = this.tasks.indexOf(task)
      this.tasks.splice(index, 1, { ...task })
    },
    deleteTask(index) {
      this.tasks.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style> -->
