import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: "http://localhost:3000/",
});

api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers["x-api-auth"] = import.meta.env.VITE_API_KEY;
  }

  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    toast.error(error.response.data.message);
    return Promise.reject(error);
  }
);

export default api;
