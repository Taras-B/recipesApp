import { takeEvery, call, put, delay } from 'redux-saga/effects'

import { actions } from '../actions/recipesActions'
import { fetchRecipeData } from '../../api/api'
import { SEARCH_RECIPES } from '../types'
import { appActions } from '../actions/appActions'

import { Action } from 'redux'

interface AppAction extends Action {
  payload: string
}

function* workerSearchRecipes(action: AppAction) {
  try {
    const data = yield call(fetchRecipeData, action.payload)
    if (data.count > 0) {
      yield put(actions.putRecipes(data.hits))
    } else {
      yield put(appActions.showAlert('Нічого не знайдено. Введіть другу назву'))
      yield delay(5000, console.log('-------Delay 5 sec-------'))
      yield put(appActions.hideAlert())
    }
    // debugger;
  } catch (e) {
    console.log(e)
  }
}

export function* sagaSearchWatcher() {
  yield takeEvery(SEARCH_RECIPES, workerSearchRecipes)
}
