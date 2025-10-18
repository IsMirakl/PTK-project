import axios from "axios";

export const api = axios.create({
  baseURL: "https://localhost:PORT/api",
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
   withCredentials: true,
});

export type { AxiosRequestConfig } from 'axios';