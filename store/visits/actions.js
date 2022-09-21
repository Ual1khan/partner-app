import { declareAction } from "@reatom/core";
import * as api from "./api";

export const getVisitsFail = declareAction();
export const getVisitsSuccess = declareAction();
export const getVisits = declareAction(
  async (payload, store) =>
    await api
      .getVisits(payload)
      .then((res) => {
        if (res.data.code !== 0) {
          store.dispatch(getVisitsFail(res.data.message));
        } else {
          store.dispatch(getVisitsSuccess(res.data));
        }
      })
      .catch((err) => {
        if (
          (err.response && err.response.status) ||
          (err.request && err.request.status)
        ) {
          store.dispatch(getVisitsFail(err.data));
        } else {
          store.dispatch(getVisitsFail("no internet"));
        }
      })
);

export const getVisitsCountersFail = declareAction();
export const getVisitsCountersSuccess = declareAction();
export const getVisitsCounters = declareAction(
  async (payload, store) =>
    await api
      .getVisitsCounters(payload)
      .then((res) => {
        if (res.data.code !== 0) {
          store.dispatch(getVisitsCountersFail(res.data.message));
        } else {
          store.dispatch(getVisitsCountersSuccess(res.data));
        }
      })
      .catch((err) => {
        if (
          (err.response && err.response.status) ||
          (err.request && err.request.status)
        ) {
          store.dispatch(getVisitsCountersFail(err.data));
        } else {
          store.dispatch(getVisitsCountersFail("no internet"));
        }
      })
);
