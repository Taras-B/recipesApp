import { FETCH_RECIPES } from '../types'
import { takeEvery, call, put } from 'redux-saga/effects'

import { actions } from '../actions/recipesActions'
import { fetchRecipeData } from '../../api/api'
import { appActions } from '../actions/appActions'

function* workerFetchRecipes() {
  try {
    yield put(appActions.showLoader())
    const { hits } = yield call(fetchRecipeData)
    yield put(actions.putRecipes(hits))
    yield put(appActions.hideLoader())
  } catch (e) {
    // TODO: Show Alert
    // * Hide Alert
    console.log(e)
  }
}

export function* sagaFetchWatcher() {
  yield takeEvery(FETCH_RECIPES, workerFetchRecipes)
}
