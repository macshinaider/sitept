import axios from "axios";

const api = axios.create({
  baseURL: "https://apizap.jonife.com.br",
  headers: {
    "Content-Type": "application/json",
    apikey: "euamojesus102030",
  },
});

export default api;
