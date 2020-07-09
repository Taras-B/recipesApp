import { actions, RecipesDataT } from '../stores/actions/recipesActions'
import { recipesReducers, InitialStateRecipeT } from '../stores/reducers/recipesReducer'

let recipesData: RecipesDataT
let initialState: InitialStateRecipeT | any

beforeEach(() => {
  recipesData = {
    bookmarked: true,
    bought: false,
    recipe: {
      calories: 89,
      cautions: ['any string'],
      yield: 1,
      dietLabels: ['second string'],
      digest: [{ one: 'one' }],
      healthLabels: ['one', 'two'],
      image: 'https://cake2.png',
      ingredients: [{ text: 'salt', weight: 34 }],
      ingredientLines: ['one', 'three'],
      label: 'stringLabel',
      source: 'stringSource',

      totalWeight: 34,
    },
  }

  initialState = {
    fetchRecipes: {},
  }
})

describe('reducers recipes', () => {
  test('should be push data to state', () => {
    const newState = recipesReducers(initialState, actions.putRecipes(recipesData))

    expect(newState.fetchRecipes).toBe(recipesData)
    expect(newState.fetchRecipes.bought).toBe(false)
    expect(newState.fetchRecipes.recipe).toEqual(recipesData.recipe)
  })
})
