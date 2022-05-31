import { defineStore } from "pinia";
import type { Category } from "@/types/Category";
import {
  createCategory,
  calcBasicScore,
  calcBonusScore,
  calcFinalScore,
} from "@/types/Category";
import combinations from "../functions/combinations";
import { createPointArray } from "@/types/PointArray";

export default defineStore({
  id: "category",
  state: () => {
    return {
      categories: [
        createCategory("GreatTreasures", 1, true, false),
        createCategory("Spells", 2),
        createCategory("Fame", 10, true),
        createCategory("Notoriety", 20, true),
        createCategory("Gold", 20, true),
      ] as Category[],
      pointArrays: [] as number[][],
      generator: combinations([0, 1, 2, 3, 4, 5], 5),
      tortureTest: false,
    };
  },
  getters: {
    getCategories: (state) => state.categories,
    getPointArrays: (state) => {
      return state.pointArrays.map((arr, index) =>
        createPointArray(index, arr, state.categories)
      );
    },
    getPointsTotal: (state) => {
      const reducer = (pv: number, cv: Category): number => pv + cv.points;
      return state.categories.reduce(reducer, 0);
    },
    getBasicScoreTotal(): number {
      const reducer = (pv: number, cv: Category) =>
        pv + calcBasicScore(cv, cv.points);
      return this.categories.reduce(reducer, 0);
    },
    getBonusScoreTotal(): number {
      const reducer = (pv: number, cv: Category) =>
        pv + calcBonusScore(cv, cv.points);
      return this.categories.reduce(reducer, 0);
    },
    getFinalScore(): number {
      return this.getBasicScoreTotal + this.getBonusScoreTotal;
    },
    getFinalScoreTotal(): number {
      const reducer = (pv: number, cv: Category) =>
        pv + calcFinalScore(cv, cv.points);
      return this.categories.reduce(reducer, 0);
    },
  },
  actions: {
    calculateNext() {
      const { value, done } = this.generator.next();
      if (value && value.length && !done) {
        this.addPoints(value);
      }
    },
    calculateAll() {
      let go = true;
      do {
        const { value, done } = this.generator.next();
        go = !done;
        if (!done && value) {
          this.addPoints(value);
        }
      } while (go);
    },
    addPoints(pointArray: number[]) {
      this.pointArrays.push(pointArray);
    },
    setRandomValues() {
      let points: Array<number> = [];
      let remaining = 5;
      for (let i = 0; i < 5; i++) {
        const p =
          i === 4 ? remaining : Math.floor(Math.random() * (remaining + 1));
        points.push(p);
        remaining -= p;
      }
      points = points.sort(() => (Math.random() < 0.5 ? -1 : 1));
      this.categories.forEach((category, index) => {
        category.points = points[index];
        if (category.hasOwned) {
          category.owned = Math.floor(
            (Math.random() * 8 - 2) * category.multiplier
          );
        }
        if (category.hasRecorded) {
          category.recorded = Math.floor(
            (Math.random() * 8 - 2) * category.multiplier
          );
        }
      });
    },
  },
});
