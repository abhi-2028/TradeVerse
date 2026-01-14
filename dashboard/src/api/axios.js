import axios from "axios";
import server from "../environment";

const API = axios.create({
  baseURL: `${server}`,
  withCredentials: true, 
});

export default API;
