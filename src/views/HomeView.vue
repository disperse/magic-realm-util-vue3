<template>
  <div class="home-container">
    <div class="cover">
      <img :src="imgUrl" alt="Magic Realm box cover" width="500"/>
    </div>
  </div>
</template>

<script>
import imgUrl from "../assets/magic-realm-cover.jpeg"
export default {
  name: "HomeView",
  data() {
    return {
      imgUrl,
    };
  },
};
</script>

<style>
.home-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
}
.cover {
  margin: 2em auto;
}
</style>
