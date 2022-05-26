const cellEditorParams = {
  type: "number",
  min: -999,
  max: 999,
};
const defaultColDef = {
  type: "numericColumn",
  resizable: true,
};
const scoreTableColumnDefs = [
  { headerName: "Category", field: "category" },
  { headerName: "Points", field: "points", editable: true, cellEditorParams },
  {
    headerName: "",
    field: "multiplier",
    valueGetter: (p) => `times ${p.data.multiplier}`,
  },
  { headerName: "Needed", field: "needed" },
  {
    headerName: "Recorded",
    field: "recorded",
    editable: true,
    cellEditorParams,
  },
  { headerName: "Owned", field: "owned", editable: true, cellEditorParams },
  { headerName: "Total", valueGetter: (p) => p.data.recorded + p.data.owned },
  { headerName: "Score", field: "score" },
  { headerName: "Basic", field: "basicScore" },
  { headerName: "Bonus", field: "bonusScore" },
  { headerName: "Final", field: "finalScore" },
];
const calculatePointsColumnDefs = [
  { headerName: "Great Treasures", field: "greatTreasures" },
  { headerName: "Spells", field: "spells" },
  { headerName: "Fame", field: "fame" },
  { headerName: "Notoriety", field: "notoriety" },
  { headerName: "Gold", field: "gold" },
  { headerName: "Final", field: "finalScore" },
];

export {
  defaultColDef,
  scoreTableColumnDefs,
  calculatePointsColumnDefs
}
