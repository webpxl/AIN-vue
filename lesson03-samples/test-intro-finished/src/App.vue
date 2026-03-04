<script setup>
import TodoList from './components/TodoList.vue';

</script>

<template>
  <main class="overview">
    <h1>Super TODO app</h1>
    <TodoList />
  </main>
</template>

<style scoped>

.overview {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem;
  font-family: sans-serif;
}
</style>
