import { declareAtom } from '@reatom/core';

import * as actions from './actions';
import { parseClass } from './parsers';

export const schedule = declareAtom({ status: 'notasked' }, on => [
  on(actions.getSchedule, () => ({ status: 'loading' })),
  on(actions.getScheduleFail, (_, payload) => ({ status: 'failed', error: payload })),
  on(actions.getScheduleSuccess, (_, payload) => ({
    status: 'success',
    data:
      payload.trainings && payload.trainings.length > 0
        ? payload.trainings.map(t => parseClass(t))
        : [],
  })),
]);
