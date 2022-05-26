<script setup>
import { AgGridVue } from "ag-grid-vue3";
import { defaultColDef } from "@/conf/ag-grid";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";

const props = defineProps({
  columnDefs: Object,
  rowData: Array,
  sizeToFit: {
    type: Boolean,
    default: false,
  },
});

let gridColumnApi = null;
let gridApi = null;
const onGridReady = (params) => {
  gridColumnApi = params.columnApi;
  gridApi = params.api;
};
const onFirstDataRendered = () => {
  if (props.sizeToFit) {
    gridApi.sizeColumnsToFit();
  } else {
    gridColumnApi.autoSizeAllColumns();
  }
};
const getRowId = (data) => data.id;
</script>

<template>
  <AgGridVue
    style="width: 1167px; height: 277px; margin: 0 auto"
    class="ag-theme-alpine-dark"
    :columnDefs="props.columnDefs"
    :defaultColDef="defaultColDef"
    :rowData="props.rowData"
    @first-data-rendered="onFirstDataRendered"
    @grid-ready="onGridReady"
    :getRowId="getRowId"
  />
</template>
