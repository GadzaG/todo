<!-- <template>
  <div class="modal" @click.self="$emit('close')">
    <div class="modal-content">
      <h2>Edit Task</h2>
      <form @submit.prevent="updateTodo">
        <input type="text" v-model="editedTodo.text" required />
        <button type="submit">Update</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditModal',
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  emits: ['close', 'update:todo'],
  data() {
    return {
      editedTodo: this.todo
    }
  },
  methods: {
    updateTodo() {
      this.$emit('updateTodo', this.editedTodo)
      this.$emit('close')
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
</style> -->

<template>
  <div class="modal" @click.self="$emit('close')">
    <div class="modal-content">
      <h2>Edit Task</h2>
      <form @submit.prevent="updateTodo">
        <input type="text" v-model="editedTodo.text" required />
        <button type="submit">Update</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditModal',
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  emits: ['close', 'update:todo'],
  data() {
    return {
      editedTodo: this.todo
    }
  },
  methods: {
    updateTodo() {
      this.$emit('updateTodo', this.editedTodo)
      this.$emit('close')
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
