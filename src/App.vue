<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div id="app">
    <!-- <div class="container"> -->
      <Navbar />
      <RouterView />
    <!-- </div> -->
  </div>
</template>

<style scoped></style>
