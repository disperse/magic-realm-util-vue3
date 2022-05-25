<template>
  <div class="rules-container">
    <div class="rules">
      <object
        :data="pdfUrl"
        type="application/pdf"
        title="Magic Realm Rules"
        width="500"
        height="650"
      >
        <a :href="pdfUrl">Magic Realm Rules</a>
      </object>
    </div>
  </div>
</template>

<script>
import pdfUrl from "../assets/MR-31-Complete.pdf"
export default {
  name: "RulesView",
  data() {
    return {
      pdfUrl,
    };
  },
};
</script>

<style>
.rules-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
}
.rules {
  margin: 2em auto;
}
</style>
