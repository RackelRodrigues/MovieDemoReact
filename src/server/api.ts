import axios from "axios";

interface ImportMetaEnv {
  readonly VITE_TMDB_BASE_URL: string;
  readonly VITE_TMDB_API_KEY: string;
}

declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

const api = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL,
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: "pt-BR",
  },
});

export default api;
