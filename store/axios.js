import axios from "axios";
import { API_URL, TOKEN, FITNESS_ID } from "./config";

export const request = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    "auth-token": TOKEN,
    "fitness-id": FITNESS_ID,
  },
});
