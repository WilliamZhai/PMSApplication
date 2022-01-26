import axios from "axios";

const {APP_SERVER_API_BASE_URL} = process.env;

export default axios.create({
  baseURL: APP_SERVER_API_BASE_URL
});