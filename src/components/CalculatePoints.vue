<script setup lang="ts">
import useCategoriesStore from "@/stores/scoreTable";
import {
  NButton,
  NCard,
  NIcon,
  NTable,
  NThead,
  NTbody,
  NTr,
  NTh,
  NTd,
} from "naive-ui";
import { ArrowUpwardSharp, ArrowDownwardSharp } from "@vicons/material";
import type { PointArray } from "@/types/PointArray";
import { computed, reactive } from "vue";

const store = useCategoriesStore();

const state = reactive({
  sortFinal: "desc",
});

const toggleSort = () => {
  state.sortFinal = state.sortFinal === "desc" ? "asc" : "desc";
};

function sortByFinal(arr: Array<PointArray>): Array<PointArray> {
  return [...arr].sort((a, b) => {
    return state.sortFinal === "desc"
      ? b.totalScore - a.totalScore
      : a.totalScore - b.totalScore;
  });
}

let sortedArray = computed(() => sortByFinal(store.getPointArrays));
</script>

<template>
  <div class="main">
    <NCard>
      <template #header> Point distributions </template>
      <template #header-extra>
        <NButton @click="store.calculateNext()" type="primary">
          Calculate next
        </NButton>
        <NButton
          style="margin-left: 1em"
          @click="store.calculateAll()"
          type="primary"
        >
          Calculate all
        </NButton>
      </template>
      <div>
        <p>
          Calculate the best ways to allocate Victory Points based on the score
          recorded.
        </p>
      </div>
      <div>
        <NTable>
          <NThead>
            <NTr>
              <NTh>Great treasures</NTh>
              <NTh>Spells</NTh>
              <NTh>Fame</NTh>
              <NTh>Notoriety</NTh>
              <NTh>Gold</NTh>
              <NTh @click="toggleSort">
                Final
                <NIcon v-if="state.sortFinal === 'desc'">
                  <ArrowDownwardSharp />
                </NIcon>
                <NIcon v-else>
                  <ArrowUpwardSharp />
                </NIcon>
              </NTh>
            </NTr>
          </NThead>
          <NTbody>
            <NTr v-for="row in sortedArray" :key="row.id">
              <NTd
                v-for="field in [
                  'greatTreasures',
                  'spells',
                  'fame',
                  'notoriety',
                  'gold',
                  'totalScore',
                ]"
                :key="`${row.id}-${field}`"
              >
                {{ row[field] }}
              </NTd>
            </NTr>
          </NTbody>
        </NTable>
      </div>
    </NCard>
  </div>
</template>

<script lang="ts">
export default {
  name: "CalculatePoints",
};
</script>

<style scoped>
.main {
  padding: 1em 2em 1em 2em;
}
</style>
