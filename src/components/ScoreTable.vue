<script setup>
import useCategoriesStore from "@/stores/scoreTable";
import AgGrid from "@/components/AgGrid.vue";
import { scoreTableColumnDefs } from "@/conf/ag-grid";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Card from "primevue/card";
import InputNumber from "primevue/inputnumber";

const store = useCategoriesStore();

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
</script>

<template>
  <div class="main">
    <Card>
      <template #title> Score calculator </template>
      <template #content>
        <DataTable
          :value="store.getCategories"
          responsiveLayout="scroll"
          stripedRows
          editMode="cell"
          @cellEditComplete="onCellEditComplete"
        >
          <Column field="category" header="Category"></Column>
          <Column field="points" header="Points">
            <template #editor="{ data, field }">
              <InputNumber v-model="data[field]" />
            </template>
            <template #footer>
              <div>
                {{ store.getPointsTotal }}
              </div>
            </template>
          </Column>
          <Column field="multiplier" header=""></Column>
          <Column field="needed" header="Needed"></Column>
          <Column field="recorded" header="Recorded">
            <template #editor="slotProps">
              <InputNumber
                v-if="slotProps.data.hasRecorded"
                v-model="slotProps.data[slotProps.field]"
              />
            </template>
            <template #body="slotProps">
              <div v-if="slotProps.data.hasRecorded">
                {{ slotProps.data.recorded }}
              </div>
            </template>
          </Column>
          <Column field="owned" header="Owned">
            <template #editor="slotProps">
              <InputNumber
                v-if="slotProps.data.hasOwned"
                v-model="slotProps.data[slotProps.field]"
              />
            </template>
            <template #body="slotProps">
              <div v-if="slotProps.data.hasOwned">
                {{ slotProps.data.owned }}
              </div>
            </template>
          </Column>
          <Column field="total" header="Total"></Column>
          <Column field="score" header="Score"></Column>
          <Column field="basicScore" header="Basic">
            <template #footer>
              <div>
                {{ store.getBasicScoreTotal }}
              </div>
            </template>
          </Column>
          <Column field="bonusScore" header="Bonus">
            <template #footer>
              <div>
                {{ store.getBonusScoreTotal }}
              </div>
            </template>
          </Column>
          <Column field="finalScore" header="Final">
            <template #footer>
              <div>
                {{ store.getFinalScore }}
              </div>
            </template>
          </Column>
        </DataTable>
      </template>
    </Card>
  </div>
</template>

<script>
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
