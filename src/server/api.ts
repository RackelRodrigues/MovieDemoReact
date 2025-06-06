import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "c5ae7b435c80c3e1a95b75ea79d5ffca",
    language: "pt-BR",
  },
});

export default api;
