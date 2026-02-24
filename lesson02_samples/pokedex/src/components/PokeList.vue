<template>
    <main>
        <h1 class="text-6xl text-center">Pokedex</h1>
        <p class="text-sm text-center">Using an API to show a list of Pokemons</p>
        <PokeCard v-for="poke in pokemonData" :pokemon="poke"></PokeCard>
    </main>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import PokeCard from '@/components/PokeCard.vue'

const pokemonData = ref([]);

async function fetchData() {
    try {
        let response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
        pokemonData.value = response.data.results;
    } catch (error) {
        console.error(error);
    }
}

fetchData().then(() => {
    console.log('data fetched')
});
    
</script>

<style scoped>
</style>