import { takeEvery, call, put, delay } from "redux-saga/effects";

import { actions } from "../actions/recipesActions";
import { fetchRecipeData } from "../../api/api";
import { SEARCH_RECIPES } from "../types";
import { appActions } from "../actions/appActions";

function* workerSearchRecipes(action: any) {
  try {
    const data = yield call(fetchRecipeData, action.payload);
    if (data.count > 0) {
      yield put(actions.putRecipes(data.hits));
    } else {
      yield put(appActions.showAlert("Нічого не знайдено"));
      yield delay(3000, console.log("-------Delay 3 sec-------"));
      yield put(appActions.hideAlert());
    }
    // debugger;
  } catch (e) {
    console.log(e);
  }
}

export function* sagaSearchhWatcher() {
  yield takeEvery(SEARCH_RECIPES, workerSearchRecipes);
}
