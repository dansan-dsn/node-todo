import axios from "axios";

export const api = axios.create({
  baseURL: "/api/todos",
  headers: {
    "Content-Type": "application/json",
  },
});
