import { request } from "../axios";

export const getSchedule = ({ startTime, endTime }) => {
  const getScheduleUrl = `/moderators/trainings/?timestamp_start=${startTime}&timestamp_end=${endTime}`;
  // const getScheduleUrl = `/moderators/trainings/?timestamp_start=2020-11-11T06:27:56.853Z&timestamp_end=2020-11-12T06:27:56.853Z`;
  return request.get(getScheduleUrl);
};
