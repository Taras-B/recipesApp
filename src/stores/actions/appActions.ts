import { SHOW_ALERT, HIDE_ALERT, SHOW_LOADER, HIDE_LOADER } from "../types";

import { InferActionsTypes } from "../redux-store";

export type ActionsType = InferActionsTypes<typeof appActions>;

export const appActions = {
  showAlert: (text: string) =>
    ({
      type: SHOW_ALERT,
      payload: text,
    } as const),
  hideAlert: () =>
    ({
      type: HIDE_ALERT,
    } as const),
  showLoader: () =>
    ({
      type: SHOW_LOADER,
    } as const),
  hideLoader: () =>
    ({
      type: HIDE_LOADER,
    } as const),
};
