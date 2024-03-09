<template>
  <tr>
    <th scope="row">{{ index + 1 }}</th>
    <td>{{ todo.text }}</td>
    <td>
      <button type="button" class="btn btn-default">
        {{ todo.completed }}
      </button>
    </td>
    <td>
      <button type="button" class="btn btn-default" @click="editTodo(todo, index)">
        <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
      </button>
    </td>
    <td>
      <button @click="deleteTodo(index)" type="button" class="btn btn-default">
        <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    todo: { type: Object, required: true },
    index: { type: Number, required: true }
  },
  emits: ['deleteTodo', 'editTodo'],
  methods: {
    deleteTodo(index) {
      this.$emit('deleteTodo', index)
    },
    editTodo(todo, index) {
      this.$emit('editTodo', todo, index)
    }
  }
}
</script>

<style scoped></style>
