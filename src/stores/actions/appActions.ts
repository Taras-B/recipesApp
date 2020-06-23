import { SHOW_ALERT, HIDE_ALERT } from "../types";

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
};
