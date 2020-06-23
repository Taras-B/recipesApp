import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { recipesReducers } from "./reducers/recipesReducer";
import { rootSaga } from "./sagas/rootSaga";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { appReducer, InitialStateAppT } from "./reducers/appReducer";

let rootReducer = combineReducers({
  recipes: recipesReducers,
  app: appReducer,
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
