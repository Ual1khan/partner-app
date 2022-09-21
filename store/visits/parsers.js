import { statuses } from './statuses';

export const parseVisit = raw => ({
  id: raw.id,
  user: raw.user.full_name,
  userAvatar: raw.user.avatar ? raw.user.avatar.url : '',
  trainingName: raw.training.name,
  timestampStart: raw.training.timestamp_start,
  timestampEnd: raw.training.timestamp_end,
  timestamp: raw.timestamp,
  status: statuses[raw.status],
});
