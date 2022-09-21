import { declareAction } from "@reatom/core";

import * as api from "./api";
import { parseProfile } from "./parsers";

export const getProfileFail = declareAction();
export const getProfileSuccess = declareAction();
export const getProfile = declareAction(
  async (_, store) =>
    await api
      .getProfile()
      .then((res) => {
        if (res.data.code !== 0) {
          store.dispatch(getProfileFail(res.data.message));
        } else {
          store.dispatch(getProfileSuccess(parseProfile(res.data)));
        }
      })
      .catch((err) => {
        if (
          (err.response && err.response.status) ||
          (err.request && err.request.status)
        ) {
          store.dispatch(getProfileFail(err.data));
        } else {
          store.dispatch(getProfileFail("no internet"));
        }
      })
);
