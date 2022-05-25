import type Categories from "@/types/Categories";

export default class Category {
  category: Categories;
  multiplier: number;
  hasRecorded: boolean;
  hasOwned: boolean;
  points: number;
  recorded: number;
  owned: number;

  constructor(category: Categories, multiplier: number, hasOwned?: boolean, hasRecorded?: boolean) {
    this.category = category;
    this.multiplier = multiplier;
    this.hasRecorded = hasRecorded ?? true;
    this.hasOwned = hasOwned ?? false;
    this.points = 0;
    this.recorded = 0;
    this.owned = 0;
  }
  copy(pts?: number) {
    const copyCat = new Category(this.category, this.multiplier, this.hasOwned);
    copyCat.points = pts ?? this.points;
    copyCat.recorded = this.recorded;
    copyCat.owned = this.owned;
    return copyCat;
  }
  public get needed() {
    return this.points * this.multiplier;
  }
  public get score() {
    const score = this.recorded + this.owned - this.needed;
    return (score < 0) ? score * 3 : score;
  }
  public get basicScore() {
    return Math.floor(this.score / this.multiplier);
  }
  public get bonusScore() {
    return this.basicScore * this.points;
  }
  public get finalScore() {
    return this.basicScore + this.bonusScore;
  }
}
