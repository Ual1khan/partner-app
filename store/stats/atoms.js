import { declareAtom } from "@reatom/core";

import * as actions from "./actions";

export const stats = declareAtom({ status: "notasked" }, (on) => [
  on(actions.getStats, () => ({ status: "loading" })),
  on(actions.getStatsFail, (_, payload) => ({
    status: "failed",
    error: payload,
  })),
  on(actions.getStatsSuccess, (_, payload) => ({
    status: "success",
    data: payload,
  })),
]);
