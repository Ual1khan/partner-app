import { declareAtom } from '@reatom/core';

import * as actions from './actions';

export const profile = declareAtom({ status: 'notasked' }, on => [
  on(actions.getProfile, () => ({ status: 'loading' })),
  on(actions.getProfileFail, (_, payload) => ({ status: 'failed', error: payload })),
  on(actions.getProfileSuccess, (_, payload) => ({ status: 'success', data: payload })),
]);
