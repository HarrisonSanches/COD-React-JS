import axios from "axios";

// URL DA MINHA API
// Também posso criar váriavel de ambiente
const api = axios.create({
  baseURL: "http://192.168.0.109:8010",
});

export default api;
