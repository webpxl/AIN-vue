<template>
  <h1 data-test="title" v-if="showTitle">Todos</h1>
  <div class="grid">
    <div v-for="(todo, index) in todos" :key="todo.id" data-test="todo" class="todo-card"
    :class="[todo.completed ? 'completed' : '']">
      <input type="checkbox" v-model="todo.completed" data-test="todo-checkbox" />
      <span>{{ index + 1 }}. {{ todo.text }}</span>
    </div>

  </div>
  <div class="add-form">
    <form data-test="form" @submit.prevent="createTodo">
      <label>Add a new todo: </label>
      <input data-test="new-todo" v-model="newTodo" />
      <button type="submit">Add</button>
    </form>
  </div>

</template>

<script setup>
import { ref } from 'vue'

const todos = ref([
  {
    id: 1,
    text: 'Learn Vue 3',
    completed: false
  }
])

const currentID = ref(2)
const newTodo = ref('');
const createTodo = () => {
  todos.value.push({
    id: currentID.value,
    text: newTodo.value,
    completed: false
  })
  currentID.value++;
  newTodo.value = '';
}

defineProps({
  showTitle: {
    type: Boolean,
    default: false
  }
})

</script>

<style scoped>
.completed {
  text-decoration: line-through;
}

h1 {
  margin: 0 0 .25rem;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

input[type="checkbox"] {
  margin-right: 0.5rem;
}

.todo-card {
  border: 2px solid #ddd;
  border-radius: 12px;
  padding: 1.5rem;
  width: 220px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .08);
  transition: border-color .2s;
}

.add-form {
  margin-top: 1.5rem;
}

.add-form form {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.add-form input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.add-form button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #42b983;
  color: white;
  cursor: pointer;
}

.add-form button:hover {
  background-color: #36a374;
}
</style>