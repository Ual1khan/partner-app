import { declareAction } from "@reatom/core";

import * as api from "./api";

export const getScheduleFail = declareAction();
export const getScheduleSuccess = declareAction();
export const getSchedule = declareAction(
  async (payload, store) =>
    await api
      .getSchedule(payload)
      .then((res) => {
        if (res.data.code !== 0) {
          store.dispatch(getScheduleFail(res.data.message));
        } else {
          store.dispatch(getScheduleSuccess(res.data));
        }
      })
      .catch((err) => {
        if (
          (err.response && err.response.status) ||
          (err.request && err.request.status)
        ) {
          store.dispatch(getScheduleFail(err.data));
        } else {
          store.dispatch(getScheduleFail("no internet"));
        }
      })
);
