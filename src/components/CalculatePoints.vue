<script setup>
import { useCategoriesStore } from "@/stores/scoreTable";
const store = useCategoriesStore();
</script>

<template>
  <div>
    <p>Calculate the best ways to allocate Victory Points based on the score recorded.</p>
    <p>
      <button @click="store.calculateNext()">Calculate next</button>
      <button style="margin-left: 2em" @click="store.calculateAll()">
        Calculate all
      </button>
    </p>
    <table>
      <thead>
        <tr>
          <td
            v-for="c in store.categories"
            v-bind:key="c.category"
            style="text-align: right"
          >
            {{ c.category }}
          </td>
          <td>Final</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="a in store.getPointArrays" v-bind:key="a.join('')">
          <td
            style="text-align: right"
            v-for="(i, index) in a"
            v-bind:key="`${a.join('')}-${index}`"
          >
            {{ i }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "CalculatePoints",
};
</script>

<style scoped>
table {
  margin: 2em auto;
  border: 1px solid #fff;
}

thead td {
  font-variant-caps: small-caps;
  font-weight: bold;
}

td {
  /* top right bottom left */
  padding: 0.2em 0.5em 0.2em 0.5em;
  border: none;
  border-collapse: collapse;
}

tbody tr:nth-child(odd) {
  background-color: #222222;
}
</style>
