import type { Category } from "@/types/Category";
import { calcTotalFinalScore } from "@/types/Category";

export interface PointArray {
  id: number;
  greatTreasures: number;
  spells: number;
  fame: number;
  notoriety: number;
  gold: number;
  totalScore: number;
}

export function createPointArray(id: number, vps: Array<number>, cats: Array<Category>): PointArray {
  return {
    id,
    greatTreasures: vps[0],
    spells: vps[1],
    fame: vps[2],
    notoriety: vps[3],
    gold: vps[4],
    totalScore: calcTotalFinalScore(vps, cats),
  };
}
