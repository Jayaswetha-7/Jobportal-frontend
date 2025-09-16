import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:8000",
  headers: {
    "Cache-Control": "no-cache",
  },
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("USER_TOKEN");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
