<template>
  <div class="person-list-container">
    <h1>Persons</h1>
    <div class="person-list">
      <div v-for="(person, index) in persons" :key="`person-${person.id}`" class="person-card">
        <EditPerson
            :person="person"
            @update-event="update"
        />
      </div>
    </div>
    <button class="fetch-button" @click = "fetchPersons">fetch persons from api</button>
    <pre v-if="store.errorMessage">{{ store.errorMessage }}</pre>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import EditPerson from './EditPerson.vue';
import { usePersonsStore } from '@/stores/persons';

const store = usePersonsStore();
const persons = computed(() => store.persons);

function update(payload) {
  const { id, name } = payload;
  store.updateName(id, name);
}

async function fetchPersons(){
  await store.fetchPersons();
}
</script>

<style scoped>
.person-list-container {
  font-family: 'Arial', sans-serif;
  padding: 20px;
}

.person-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.person-card {
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.person-card:hover {
  transform: translateY(-5px);
}

.fetch-button {
  margin-top: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.fetch-button:hover {
  background-color: #0069d9;
}
</style>

