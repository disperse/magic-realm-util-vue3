<script setup lang="ts">
import useCategoriesStore from "@/stores/scoreTable";
import type ColumnDef from "@/types/ColumnDef";
import {
  NCard,
  NButton,
  NTable,
  NThead,
  NTbody,
  NTr,
  NTh,
  NTd,
} from "naive-ui";
import {
  calcNeeded,
  calcScore,
  calcBasicScore,
  calcBonusScore,
  calcFinalScore,
} from "@/types/Category";
import { reactive } from "vue";

const store = useCategoriesStore();
const state = reactive({
  tortureTest: false,
});

const getTimeOut = () => Math.round(Math.random() * 150) + 50;

const randomTime = () => {
  store.setRandomValues();
  if (state.tortureTest) {
    setTimeout(randomTime, getTimeOut());
  }
};

const toggleTortureTest = () => {
  if (state.tortureTest) {
    state.tortureTest = false;
  } else {
    state.tortureTest = true;
    randomTime();
  }
};

const columnDefs: Array<ColumnDef> = [
  {
    label: "Category",
    valueGetter: (cat) => cat.name,
  },
  {
    label: "Points",
    valueGetter: (cat) => cat.points,
    totalGetter: () => store.getPointsTotal,
  },
  {
    label: "",
    valueGetter: (cat) => `times ${cat.multiplier}`,
  },
  {
    label: "Needed",
    valueGetter: (cat) => calcNeeded(cat, cat.points),
  },
  {
    label: "Recorded",
    showIf: (cat) => cat.hasRecorded,
    valueGetter: (cat) => cat.recorded,
    editable: true,
  },
  {
    label: "Owned",
    showIf: (cat) => cat.hasOwned,
    valueGetter: (cat) => cat.owned,
    editable: true,
  },
  {
    label: "Total",
    valueGetter: (cat) => cat.recorded + cat.owned,
  },
  {
    label: "Score",
    valueGetter: (cat) => calcScore(cat, cat.points),
  },
  {
    label: "Basic",
    valueGetter: (cat) => calcBasicScore(cat, cat.points),
    totalGetter: () => store.getBasicScoreTotal,
  },
  {
    label: "Bonus",
    valueGetter: (cat) => calcBonusScore(cat, cat.points),
    totalGetter: () => store.getBonusScoreTotal,
  },
  {
    label: "Final",
    valueGetter: (cat) => calcFinalScore(cat, cat.points),
    totalGetter: () => store.getFinalScoreTotal,
  },
];

/*
const onCellEditComplete = (event) => {
  let { data, newValue, field } = event;
  switch (field) {
    case "points":
      store.getCategory(data.category).points = newValue;
      break;
    case "recorded":
      store.getCategory(data.category).recorded = newValue;
      break;
    case "owned":
      store.getCategory(data.category).owned = newValue;
      break;
  }
};
 */
</script>

<template>
  <div class="main">
    <NCard>
      <template #header>Score calculator</template>
      <template #header-extra>
        <NButton @click="store.setRandomValues()" type="primary"
          >Random</NButton
        >
        <NButton
          type="primary"
          style="margin-left: 1em"
          @click="toggleTortureTest"
          >Toggle torture test</NButton
        >
      </template>
      <template #default>
        <NTable>
          <NThead>
            <NTr>
              <NTh v-for="col in columnDefs" :key="col.label">
                {{ col.label }}
              </NTh>
            </NTr>
          </NThead>
          <NTbody>
            <NTr v-for="cat in store.getCategories" :key="cat.name">
              <NTd v-for="col in columnDefs" :key="`${col.label}-${cat.name}`">
                {{ col.valueGetter(cat) }}
              </NTd>
            </NTr>
            <NTr>
              <NTd v-for="col in columnDefs" :key="`total-${col.label}`">
                {{ col.totalGetter ? col.totalGetter() : "" }}
              </NTd>
            </NTr>
          </NTbody>
        </NTable>
      </template>
    </NCard>
  </div>
</template>

<script lang="ts">
export default {
  name: "ScoreTable",
};
</script>

<style scoped>
.main {
  padding: 2em 2em 1em 2em;
}
table {
  margin: 0 auto;
}
</style>
