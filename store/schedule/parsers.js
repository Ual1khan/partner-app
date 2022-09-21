// id, usersCount might be used later
export const parseClass = raw => ({
  id: raw.id,
  name: raw.name,
  usersCount: raw.users_count,
  timestampStart: raw.timestamp_start,
  timestampEnd: raw.timestamp_end,
  limit: raw.max_users,
});
