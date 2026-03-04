<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <div class="container">
      <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/persons">Persons</RouterLink>
      </nav>
    </div>
  </header>
  <div class="router">
      <RouterView />
  </div>
    </div>
  </div>
  
</template>


<style scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .router{
    padding: 1em;
    border: 3px solid lightgrey;
  }

  nav a {
    display: inline-block;
    text-decoration: none;
    color: black;
    background-color: white;
    margin:0 1em; 
    padding: 0.4em 1em;
  }

  nav {
    border-bottom: 3px solid lightgreen;
    margin-bottom:1em;
  }

  .router-link-active{
    background-color: lightgreen;
  }
</style>

