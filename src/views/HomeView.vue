<template>
  <main>
    <div class="cover">
      <img :src="imgUrl" alt="Magic Realm box cover" width="500" />
    </div>
  </main>
</template>

<script>
import imgUrl from "../assets/magic-realm-cover.jpeg";
export default {
  name: "HomeView",
  data() {
    return {
      imgUrl,
    };
  },
};
</script>

<style scoped>
main {
  display: flex;
}
.cover {
  margin: 2em auto;
}
</style>
