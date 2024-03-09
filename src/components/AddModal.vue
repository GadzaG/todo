<template>
  <div class="modal" @click.self="$emit('close')">
    <div class="modal-content">
      <h2>Add Todo</h2>
      <form @submit.prevent="addTodo2">
        <input type="text" v-model="text" required />
        <button type="submit">Add</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddModal',
  emits: ['close', 'addTodo'],
  data() {
    return {
      text: ''
    }
  },
  methods: {
    addTodo() {
      this.$emit('addTodo', { text: this.newTodo, completed: false })
      this.text = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
