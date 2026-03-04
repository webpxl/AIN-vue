import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import axios from 'axios';

export const usePersonsStore = defineStore('persons', () => {
  const persons = ref([]);
  const errorMessage = ref("");

  
  async function fetchPersons() {
    try {
      errorMessage.value = ""; 
      const response = await axios.get('http://localhost:3000/persons'); 
      persons.value = response.data; 
    } catch (e) {
      errorMessage.value = e.message; 
    }
  }

  
  async function updateName(id, name) {
    try {
      errorMessage.value = ""; 
      const response = await axios.put(`http://localhost:3000/persons/${id}`, { name }); 
      const index = persons.value.findIndex(child => child.id === id);
      if (index !== -1) {
        persons.value[index] = { id, name };
      }
    } catch (e) {
      errorMessage.value = e.message; 
    }
  }

  function getPersonById(id) {
    const index = persons.value.findIndex(child => child.id === id);
    return index ===  -1 ? null : persons.value[index];
  }
  
  return { persons, errorMessage, updateName, getPersonById, fetchPersons };
},
{
    persist: true,
});

