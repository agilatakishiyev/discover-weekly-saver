import { Axios } from "axios";

export const axios = new Axios();

console.log(process.env.PUBLIC_URL);

axios.defaults.baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5555"
    : process.env.PUBLIC_URL;
