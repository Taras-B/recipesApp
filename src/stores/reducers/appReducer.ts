import { SHOW_ALERT, HIDE_ALERT, HIDE_LOADER, SHOW_LOADER } from "../types";
import { ActionsType } from "../actions/appActions";

const initialState = {
  alert: null as null | string,
  loading: true,
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
    case HIDE_LOADER:
      return { ...state, loading: false };
    case SHOW_LOADER:
      return { ...state, loading: true };
    default:
      return state;
  }
};
