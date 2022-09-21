import { request } from "../axios";

export const getProfile = () => request.get(`/moderators/partner_fitness/`);
