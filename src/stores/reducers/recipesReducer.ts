import { FETCH_RECIPES, PUT_RECIPES } from "../types";
import { ActionsType, RecipesDataT } from "../actions/recipesActions";

const initialState = {
  fetchRecipes: [] as Array<RecipesDataT>,
};

type InitialStateT = typeof initialState;

export const recipesReducers = (
  state: InitialStateT = initialState,
  action: ActionsType
) => {
  switch (action.type) {
    case FETCH_RECIPES:
      return state;
    case PUT_RECIPES:
      return { ...state, fetchRecipes: action.payload };
    default:
      return state;
  }
};
