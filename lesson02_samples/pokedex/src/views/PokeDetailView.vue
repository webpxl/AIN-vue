<template>
<main>
    <h1>Pokemon detail</h1> 
    {{ id }}

</main>
</template>


<script setup>
import { useRoute } from 'vue-router'

const route = useRoute();
const id = route.params.id;
// Todo: fetch pokemon details via axios and show in UI!

</script>

<style scoped>

</style>