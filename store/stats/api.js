import { request } from "../axios";

export const getStats = () => {
  return request.get(`/moderators/visits_statistics/?type=month`);
};
