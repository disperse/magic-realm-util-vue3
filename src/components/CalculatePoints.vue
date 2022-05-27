<script setup>
import useCategoriesStore from "@/stores/scoreTable";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Card from "primevue/card";
import Button from "primevue/button";

const store = useCategoriesStore();
</script>

<template>
  <div class="main">
    <Card>
      <template #title> Point distributions </template>
      <template #subtitle>
        Calculate the best ways to allocate Victory Points based on the score
        recorded.
      </template>
      <template #content>
        <Button label="Calculate next" @click="store.calculateNext()" />
        <Button
          label="Calculate all"
          style="margin-left: 1em"
          @click="store.calculateAll()"
        />
        <DataTable
          :value="store.getPointArrays"
          responsiveLayout="scroll"
          stripedRows
        >
          <Column field="greatTreasures" header="Great Treasures"></Column>
          <Column field="spells" header="Spells"></Column>
          <Column field="fame" header="Fame"></Column>
          <Column field="notoriety" header="Notoriety"></Column>
          <Column field="gold" header="Gold"></Column>
          <Column field="totalScore" header="Final" :sortable="true"></Column>
        </DataTable>
      </template>
    </Card>
  </div>
</template>

<script>
export default {
  name: "CalculatePoints",
};
</script>

<style scoped>
.main {
  padding: 1em 2em 1em 2em;
}
</style>
