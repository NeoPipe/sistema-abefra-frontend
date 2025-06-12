import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: import.meta.env.VITE_ABEFRA_SERVER_URL,
});

api.interceptors.request.use((config) => {
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
