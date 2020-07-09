import { actions, RecipesDataT } from '../stores/actions/recipesActions'
import * as types from '../stores/types'
import { appActions } from '../stores/actions/appActions'

describe('actions recipes', () => {
  test('should create an action to loadRecipes', () => {
    const expectedAction = {
      type: types.FETCH_RECIPES,
    }
    expect(actions.loadRecipes()).toEqual(expectedAction)
    expect(actions.loadRecipes()).not.toBeNull()
    expect(actions.loadRecipes()).toBeDefined()
  })
  test('should create an action to putRecipes', () => {
    const recipesData: RecipesDataT = {
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
    const expectedAction = {
      type: types.PUT_RECIPES,
      payload: recipesData,
    }
    expect(actions.putRecipes(recipesData)).toEqual(expectedAction)
    expect(actions.putRecipes(recipesData)).not.toBeNull()
    expect(actions.putRecipes(recipesData)).toBeDefined()
  })
  test('should create an action to searchRecipes', () => {
    const word = 'eggs'
    const expectedAction = {
      type: types.SEARCH_RECIPES,
      payload: word,
    }
    expect(actions.searchRecipes(word)).toEqual(expectedAction)
  })
})

describe('actions app', () => {
  test('should create an action to showAlert', () => {
    const text = 'Щось пішло не так'
    const expectedAction = {
      type: types.SHOW_ALERT,
      payload: text,
    }
    expect(appActions.showAlert(text)).toEqual(expectedAction)
  })

  test('should create an action to hideAlert', () => {
    const expectedAction = {
      type: types.HIDE_ALERT,
    }
    expect(appActions.hideAlert()).toEqual(expectedAction)
  })

  test('should create an action to showLoader', () => {
    const expectedAction = {
      type: types.SHOW_LOADER,
    }
    expect(appActions.showLoader()).toEqual(expectedAction)
  })

  test('should create an action to hideLoader', () => {
    const expectedAction = {
      type: types.HIDE_LOADER,
    }
    expect(appActions.hideLoader()).toEqual(expectedAction)
  })
})
