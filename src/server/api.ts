import axios from "axios";

/// <reference types="vite/client" />

const api = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL,
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: "pt-BR",
  },
});

export default api;
