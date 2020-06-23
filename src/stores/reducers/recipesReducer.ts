import { PUT_RECIPES } from "../types";
import { ActionsType, RecipesDataT } from "../actions/recipesActions";

const initialState = {
  fetchRecipes: [] as Array<RecipesDataT>,
};

export type InitialStateRecipeT = typeof initialState;

export const recipesReducers = (
  state: InitialStateRecipeT = initialState,
  action: ActionsType
) => {
  switch (action.type) {
    case PUT_RECIPES:
      return { ...state, fetchRecipes: action.payload };
    default:
      return state;
  }
};
