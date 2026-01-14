let is_PROD = process.env.IS_PROD

const server = is_PROD ? process.env.REACT_APP_API_URL : "http://localhost:3000";

export default server;