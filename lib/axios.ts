import axios from "axios";

const api = axios.create({
  baseURL: "https://apiwhatsapp.jonife.com.br",
  headers: {
    "Content-Type": "application/json",
    apikey: "Lucas102030",
  },
});

export default api;
