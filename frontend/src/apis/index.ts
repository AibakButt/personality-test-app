import axios from "axios";

let axios_client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default axios_client;