import { declareAtom } from "@reatom/core";

import * as actions from "./actions";
import { parseVisit } from "./parsers";

export const visits = declareAtom({ status: "notasked" }, (on) => [
  on(actions.getVisits, () => ({ status: "loading" })),
  on(actions.getVisitsFail, (_, payload) => ({
    status: "failed",
    error: payload,
  })),
  on(actions.getVisitsSuccess, (_, payload) => ({
    status: "success",
    data: payload.visits.map((v) => parseVisit(v)),
  })),
]);

const initialVisitsCounter = {
  waiting: 0,
  canceled: 0,
  approved: 0,
};

export const visitsCounter = declareAtom(
  { status: "notasked", data: initialVisitsCounter },
  (on) => [
    on(actions.getVisitsCountersSuccess, (_, payload) => ({
      status: "success",
      data: {
        waitingCount: payload.waiting_visits,
        canceledCount: payload.canceled_visits,
        approvedCount: payload.approved_visits,
      },
    })),
  ]
);
