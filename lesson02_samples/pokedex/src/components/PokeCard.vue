<template>
    <div class="m-2 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div>
            <h1 class="text-xl font-medium text-black">{{ pokemon.name.toUpperCase() }}</h1>
            <button 
              class="bg-sky-600 text-white rounded-lg p-3 border-black" 
              @click="goToDetail()">
              Details
            </button>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'; 

const router = useRouter();

const props = defineProps({
  pokemon: Object
});

function goToDetail() {
    // TODO navigate to the detail page use the getIdFromUrl method to get the id
}

function getIdFromUrl(url) {
    const urlParts = url.split('/');
    // the url ends in a slash, so the id is the second to last element
    const potentialId = urlParts[urlParts.length - 2];
    return potentialId;
}

</script>

<style scoped></style>
