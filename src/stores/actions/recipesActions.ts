import { InferActionsTypes } from '../redux-store'
import { FETCH_RECIPES, PUT_RECIPES, SEARCH_RECIPES } from '../types'

export type ActionsType = InferActionsTypes<typeof actions>

export type RecipeIngredientsT = {
  text: string
  weight: number
}

type RecipeT = {
  calories: number
  cautions: Array<string>
  dietLabels: Array<string>
  digest: Array<{}>
  healthLabels: Array<string>
  image: string
  ingredients: Array<RecipeIngredientsT>
  ingredientLines: Array<string>
  label: string
  source: string
  yield: number
  totalWeight: number
}
export type RecipesDataT = {
  bookmarked: boolean
  bought: boolean
  recipe: RecipeT
}

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
}
