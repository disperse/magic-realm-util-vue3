export interface Category {
  readonly name: string;
  readonly multiplier: number;
  readonly hasRecorded: boolean;
  readonly hasOwned: boolean;
  points: number;
  recorded: number;
  owned: number;
}

function createCategory(
  name: string,
  multiplier: number,
  hasOwned?: boolean,
  hasRecorded?: boolean,
): Category {
  return {
    name,
    multiplier,
    hasOwned: hasOwned ?? false,
    hasRecorded: hasRecorded ?? true,
    recorded: 0,
    owned: 0,
    points: 0,
  };
}

const calcNeeded = (cat: Category, points: number) => points * cat.multiplier;

const calcScore = (cat: Category, points: number) => {
  const score = cat.recorded + cat.owned - calcNeeded(cat, points);
  // negative scores are multiplied by 3
  return score < 0 ? score * 3 : score;
};
const calcBasicScore = (cat: Category, points: number) =>
  Math.floor(calcScore(cat, points) / cat.multiplier);

const calcBonusScore = (cat: Category, points: number) =>
  calcBasicScore(cat, points) * points;

const calcFinalScore = (cat: Category, points: number) =>
  calcBasicScore(cat, points) + calcBonusScore(cat, points);

const calcTotalFinalScore = (vps: Array<number>, cats: Array<Category>) =>
  cats.reduce((pv, cv, index) => pv + calcFinalScore(cv, vps[index]), 0);

export {
  createCategory,
  calcNeeded,
  calcScore,
  calcBasicScore,
  calcBonusScore,
  calcFinalScore,
  calcTotalFinalScore,
};
