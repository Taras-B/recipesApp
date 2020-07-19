import { fork } from 'redux-saga/effects'
import { sagaFetchWatcher } from './recipesSaga'
import { sagaSearchWatcher } from './searchRecipesSaga'

export function* rootSaga() {
  yield fork(sagaFetchWatcher)
  yield fork(sagaSearchWatcher)
}
