<script setup>
import Home from "./views/Home.vue"
import Navbar from "./components/Navbar.vue"

</script>

<template>
    <Navbar />
    <router-view></router-view>
</template>

<style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
