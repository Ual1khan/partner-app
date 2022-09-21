import { request } from "../axios";

export const getVisits = ({ status }) => {
  const queryParams = `date_range=week&status=${status}&page=${1}&limit=${10}`;
  const getVisitsUrl = `/moderators/visits/v2/?${queryParams}`;

  return request.get(getVisitsUrl);
};

export const getVisitsCounters = (dateRange) => {
  const getVisitsCountersUrl = `/moderators/visits/v2/preview/?date_range=week`;

  return request.get(getVisitsCountersUrl);
};
