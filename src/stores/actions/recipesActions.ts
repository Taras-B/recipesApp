import { InferActionsTypes } from "../redux-store";
import { FETCH_RECIPES, PUT_RECIPES, SEARCH_RECIPES } from "../types";

export type ActionsType = InferActionsTypes<typeof actions>;

type RecipeT = {
  calories: number;
  cautions: Array<string>;
  diatLabels: Array<string>;
  digest: Array<{}>;
  healthLabels: Array<string>;
  image: string;
  ingredients: Array<{}>;
  label: string;
  source: string;
  yield: number;
  totalWeight: number;
};
export type RecipesDataT = {
  bookmarked: boolean;
  bought: boolean;
  recipe: RecipeT;
};

export const actions = {
  loadRecipes: () =>
    ({
      type: FETCH_RECIPES,
    } as const),
  putRecipes: (data: RecipesDataT) =>
    ({
      type: PUT_RECIPES,
      payload: data,
    } as const),
  searchRecipes: (word: string) =>
    ({
      type: SEARCH_RECIPES,
      payload: word,
    } as const),
};
