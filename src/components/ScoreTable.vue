<script setup>
import { useCategoriesStore } from "@/stores/scoreTable";
const store = useCategoriesStore();
</script>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <td style="text-align: right">Category</td>
          <td>Points</td>
          <td></td>
          <td>Needed</td>
          <td>Recorded</td>
          <td>Owned</td>
          <td>Total</td>
          <td>Score</td>
          <td>Basic</td>
          <td>Bonus</td>
          <td>Final</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="c in store.categories" v-bind:key="c.category">
          <td style="text-align: right">{{ c.category }}</td>
          <td>
            <input type="number" min="0" max="5" v-model="c.points" />
          </td>
          <td style="text-align: left">times {{ c.multiplier }}</td>
          <td>{{ c.needed }}</td>
          <td>
            <input
              v-if="c.hasRecorded"
              type="number"
              min="-999"
              max="999"
              v-model="c.recorded"
            />
          </td>
          <td>
            <input
              v-if="c.hasOwned"
              type="number"
              min="-999"
              max="999"
              v-model="c.owned"
            />
          </td>
          <td>{{ c.recorded + c.owned }}</td>
          <td>{{ c.score }}</td>
          <td>{{ c.basicScore }}</td>
          <td>{{ c.bonusScore }}</td>
          <td>{{ c.basicScore + c.bonusScore }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td style="text-align: right">Totals</td>
          <td>{{ store.categories.reduce((pv, cv) => pv + cv.points, 0) }}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>{{ store.getBasicScoreTotal }}</td>
          <td>{{ store.getBonusScoreTotal }}</td>
          <td>{{ store.getFinalScore }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  name: "ScoreTable",
};
</script>

<style scoped>
table {
  margin: 2em auto;
  border: 1px solid #fff;
}

thead td,
tfoot td {
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
