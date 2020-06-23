import { takeEvery, call, put } from "redux-saga/effects";

import { actions } from "../actions/recipesActions";
import { fetchRecipeData } from "../../api/api";
import { SEARCH_RECIPES } from "../types";

function* workerSearchRecipes(action: any) {
  try {
    const data = yield call(fetchRecipeData, action.payload);
    if (data.count > 0) {
      yield put(actions.putRecipes(data.hits));
    } else {
      console.log("not result");
    }
    // debugger;
  } catch (e) {
    console.log(e);
  }
}

export function* sagaSearchhWatcher() {
  yield takeEvery(SEARCH_RECIPES, workerSearchRecipes);
}
