import { fork } from "redux-saga/effects";
import { sagaFetchWatcher } from "./recipesSaga";
import { sagaSearchhWatcher } from "./searchRecipesSaga";

export function* rootSaga() {
  yield fork(sagaFetchWatcher);
  yield fork(sagaSearchhWatcher);
}
