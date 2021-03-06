import { defineStore } from "pinia";
import Categories from "@/types/Categories";
import Category from "@/types/Category";
import PointArray from "@/types/PointArray";
import combinations from "../functions/combinations";

export default defineStore({
  id: "category",
  state: () => {
    return {
      categories: [
        new Category(0, Categories.GreatTreasures, 1, true, false),
        new Category(1, Categories.Spells, 2),
        new Category(2, Categories.Fame, 10, true),
        new Category(3, Categories.Notoriety, 20, true),
        new Category(4, Categories.Gold, 30, true),
      ],
      pointArrays: [] as PointArray[],
      generator: combinations([0, 1, 2, 3, 4, 5], 5),
      tortureTest: false,
    };
  },
  getters: {
    getCategories: (state) => state.categories,
    getPointArrays: (state) => state.pointArrays,
    getCategory: (state) => {
      return (needle: Categories) =>
        state.categories.find((haystack) => needle === haystack.category);
    },
    getPointsTotal: (state) => {
      const reducer = (pv: number, cv: Category) => pv + cv.points;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return state.categories.reduce(reducer, 0);
    },
    getBasicScoreTotal(): number {
      const reducer = (pv: number, cv: Category) => pv + cv.basicScore;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return this.categories.reduce(reducer, 0);
    },
    getBonusScoreTotal(): number {
      const reducer = (pv: number, cv: Category) => pv + cv.bonusScore;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return this.categories.reduce(reducer, 0);
    },
    getFinalScore(): number {
      return this.getBasicScoreTotal + this.getBonusScoreTotal;
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
      this.pointArrays.push(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        new PointArray(this.pointArrays.length, pointArray, this.categories)
      );
    },
    setRandomValues() {
      let remaining = 5;
      this.categories
        .sort(() => (Math.random() < 0 ? -1 : 1))
        .forEach((category) => {
          const points = Math.floor(Math.random() * (remaining + 1));
          category.points = points;
          remaining -= points;
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
    toggleTortureTest() {
      const randomTime = () => {
        this.setRandomValues();
        if (this.tortureTest) {
          const timeOut = Math.round(Math.random() * 150) + 50;
          setTimeout(randomTime, timeOut);
        }
      };
      if (this.tortureTest) {
        this.tortureTest = false;
      } else {
        this.tortureTest = true;
        randomTime();
      }
    },
  },
});
