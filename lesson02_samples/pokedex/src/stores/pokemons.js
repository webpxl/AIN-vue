import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const usePokemonStore = defineStore('pokemon', {
    state: () => ({ pokeList: {} }),
    getters: {},
    actions: {
        async loadPokemonByIdAsync(pokemonId) {
            if (this.pokeList.pokemonId) {
                return new Promise(this.pokeList.pokemonId);
            }
            let data =  await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
            this.pokeList.pokemonId = data.data;
            return data.data;
        },
    },
})
