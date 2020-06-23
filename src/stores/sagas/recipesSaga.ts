import { FETCH_RECIPES } from "../types";
import { takeEvery, call, put } from "redux-saga/effects";

import { actions } from "../actions/recipesActions";
import { fetchRecipeData } from "../../api/api";

function* workerFetchRecipes() {
  try {
    const { hits } = yield call(fetchRecipeData);
    yield put(actions.putRecipes(hits));
  } catch (e) {
    console.log(e);
  }
}

export function* sagaFetchWatcher() {
  yield takeEvery(FETCH_RECIPES, workerFetchRecipes);
}
