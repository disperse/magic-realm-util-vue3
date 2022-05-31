import type { Category } from "@/types/Category";

export default interface ColumnDef {
  label: string;
  valueGetter: (cat: Category) => string | number;
  showIf?: (cat: Category) => boolean;
  editable?: boolean;
  totalGetter?: () => number;
}
