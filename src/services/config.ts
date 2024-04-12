import axios from "axios";

export const baseURL = "http://backend.gerenciador.marcoslop.es/";

const api = axios.create({
  baseURL,
});

export { api };
