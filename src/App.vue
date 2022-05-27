<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import "primevue/resources/themes/md-dark-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>
        <svg
          class="logo"
          viewBox="0 0 128 128"
          width="48"
          height="48"
          data-v-1c32dc7e=""
        >
          <path
            fill="#42b883"
            d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
            data-v-1c32dc7e=""
            data-darkreader-inline-fill=""
            style="--darkreader-inline-fill: #59c393"
          ></path>
          <path
            fill="#35495e"
            d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
            data-v-1c32dc7e=""
            data-darkreader-inline-fill=""
            style="--darkreader-inline-fill: #a6bbcd"
          ></path>
        </svg>
        Vue.js
      </h1>
    </div>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
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
  color: gold;
  padding: 0 1em 0 1em;
}
a.router-link-active {
  color: cornflowerblue;
  text-decoration: underline;
}
h1 {
  color: rgb(101, 182, 135);
}
</style>
