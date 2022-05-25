import { defineStore } from "pinia";
import Categories from "@/types/Categories";
import Category from "@/types/Category";
import combinations from "../functions/combinations";

export const useCategoriesStore = defineStore("category", {
  state: () => {
    return {
      categories: [
        new Category(Categories.GreatTreasures, 1, true, false),
        new Category(Categories.Spells, 2),
        new Category(Categories.Fame, 10, true),
        new Category(Categories.Notoriety, 20, true),
        new Category(Categories.Gold, 30, true),
      ] as Category[],
      pointArrays: [] as number[][],
      generator: combinations([0, 1, 2, 3, 4, 5], 5),
    };
  },
  getters: {
    getCategory: (state) => {
      return (needle: Categories) =>
        state.categories.find((haystack) => needle === haystack.category);
    },
    getBasicScoreTotal: (state) =>
      state.categories.reduce((pv, cv) => pv + cv.basicScore, 0),
    getBonusScoreTotal: (state) =>
      state.categories.reduce((pv, cv) => pv + cv.bonusScore, 0),
    getFinalScore(): number {
      return this.getBasicScoreTotal + this.getBonusScoreTotal;
    },
    getPointArrays: (state) => {
      return state.pointArrays
        .map((pa) => {
          let finalScore = 0;
          for (let i = 0; i < pa.length; i++) {
            const copyCat = state.categories[i].copy(pa[i]);
            finalScore += copyCat.finalScore;
          }
          return [...pa, finalScore];
        })
        .sort((a, b) => b[5] - a[5]);
    },
  },
  actions: {
    calculateNext() {
      const { value, done } = this.generator.next();
      if (!done) {
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
      for (let i = 0; i < pointArray.length; i++) {
        this.categories[i].points = pointArray[i];
      }
      this.pointArrays.push(pointArray);
    },
  },
});
