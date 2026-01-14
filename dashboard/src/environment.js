const API_URL = process.env.REACT_APP_API_URL;

const is_PROD = process.env.REACT_APP_IS_PROD === "true";

console.log("is_PROD:", is_PROD);

const server = is_PROD
  ? API_URL
  : "http://localhost:3002";

export default server;
