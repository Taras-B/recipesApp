import { actions, RecipesDataT } from '../stores/actions/recipesActions'
import { recipesReducers, InitialStateRecipeT } from '../stores/reducers/recipesReducer'
import { InitialStateAppT, appReducer } from '../stores/reducers/appReducer'
import { appActions } from '../stores/actions/appActions'

describe('reducers recipes', () => {
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

  test('should be push data to state', () => {
    const newState = recipesReducers(initialState, actions.putRecipes(recipesData))

    expect(newState.fetchRecipes).toBe(recipesData)
    expect(newState.fetchRecipes.bought).toBe(false)
    expect(newState.fetchRecipes.recipe).toEqual(recipesData.recipe)
  })
})

describe('app reducers', () => {
  let initialState: InitialStateAppT

  beforeEach(() => {
    initialState = {
      alert: null,
      loading: false,
    }
  })

  test('should loading must be true, SHOW_LOADER ', () => {
    const newState = appReducer(initialState, appActions.showLoader())

    expect(newState.loading).toBeTruthy()
    expect(newState.loading).toBe(true)
    expect(newState.loading).not.toBe(false)
  })

  test('should loading must be false, HIDE_LOADER', () => {
    const newState = appReducer(initialState, appActions.hideLoader())

    expect(newState.loading).toBeFalsy()
    expect(newState.loading).toBe(false)
    expect(newState.loading).not.toBe(true)
  })

  test('should alert must be text actions, SHOW_ALERT', () => {
    const text = 'random text'
    const newState = appReducer(initialState, appActions.showAlert(text))

    expect(newState.alert).toBeTruthy()
    expect(newState.alert).toBe(text)
    expect(newState.alert).toContain(text)
    expect(newState.alert).not.toBeNull()
  })

  test('should alert must be null, HIDE_ALERT', () => {
    const newState = appReducer(initialState, appActions.hideAlert())

    expect(newState.alert).toBeFalsy()
    expect(newState.alert).toBe(null)
    expect(newState.alert).toBeNull()
  })
})
