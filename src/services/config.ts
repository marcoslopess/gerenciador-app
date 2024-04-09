import axios from "axios";

const api = axios.create({
  baseURL: "http://backend.gerenciador.marcoslop.es/",
});

export { api };
