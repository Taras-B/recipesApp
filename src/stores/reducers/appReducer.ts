import { SHOW_ALERT, HIDE_ALERT } from "../types";
import { ActionsType } from "../actions/appActions";

const initialState = {
  alert: null as null | string,
};

export type InitialStateAppT = typeof initialState;

export const appReducer = (
  state: InitialStateAppT = initialState,
  action: ActionsType
) => {
  switch (action.type) {
    case HIDE_ALERT:
      return { ...state, alert: null };
    case SHOW_ALERT:
      return { ...state, alert: action.payload };
    default:
      return state;
  }
};
