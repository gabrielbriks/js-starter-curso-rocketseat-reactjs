import axios from "axios";

const api = axios.create({
  baseURL: "http://rocketseat-node.herokuapp.com/api" //"https://api.github.com"
});

export default api;
