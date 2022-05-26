<script setup lang="ts">
import ScoreTable from "@/components/ScoreTable.vue";
import CalculatePoints from "@/components/CalculatePoints.vue";
</script>

<template>
  <main>
    <ScoreTable />
    <CalculatePoints />
  </main>
</template>

<style scoped>
main {
  font-size: smaller;
}
</style>
