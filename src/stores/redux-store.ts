import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { recipesReducers } from "./reducers/recipesReducer";
import { rootSaga } from "./sagas/rootSaga";
// import { RecipesDataT } from "./actions/recipesActions";

let rootReducer = combineReducers({
  recipes: recipesReducers,
});

export type AppRootState = ReturnType<typeof rootReducer>;

const saga = createSagaMiddleware();

export const store = createStore(rootReducer, compose(applyMiddleware(logger, saga)));

saga.run(rootSaga);

export type InferActionsTypes<T> = T extends {
  [key: string]: (...args: any[]) => infer U;
}
  ? U
  : never;
