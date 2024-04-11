import axios from "axios";

export const baseURL = "http://backend.gerenciador.marcoslop.es/financial-record";

const api = axios.create({
  baseURL,
});

export { api };
