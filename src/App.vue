<script setup lang="ts">
import vueLogo from "./assets/vue-logo.svg";
import { RouterLink, RouterView } from "vue-router";
import "primevue/resources/themes/md-dark-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>
        <img :src="vueLogo" alt="Vue logo" width="48" />
        Vue.js
      </h1>
    </div>
    <div class="wrapper">
      <nav>
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/score">Scoring</RouterLink>
        <RouterLink to="/rules">Rules</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style>
body {
  font-family: Inter, sans-serif;
  font-size: x-large;
  background: #121212;
  color: #fff;
}
#app {
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
.wrapper {
  display: flex;
  justify-content: center;
}
a {
  text-decoration: none;
  color: white;
  padding: 0 1em 0 1em;
}
a.router-link-active {
  color: rgb(101, 182, 135);
  text-decoration: underline;
}
h1 {
  color: rgb(101, 182, 135);
}
</style>
