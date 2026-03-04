<template>
  <div>
    Show TODOs here
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


// const currentID = ref(2)
// const newTodo = ref('');
// const createTodo = () => {
//   todos.value.push({
//     id: currentID.value,
//     text: newTodo.value,
//     completed: false
//   })
//   currentID.value++;
//   newTodo.value = '';
// }

// defineProps({
//   showTitle: {
//     type: Boolean,
//     default: false
//   }
// })
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