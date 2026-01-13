const REACT_APP_API_URL =
  process.env.REACT_APP_API_URL || process.env.REACT_APP_API_BASE_URL || "https://tradeversebackend.onrender.com";

export const apiUrl = (path) => {
  const base = REACT_APP_API_URL.endsWith("/") ? REACT_APP_API_URL.slice(0, -1) : REACT_APP_API_URL;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
};

export default REACT_APP_API_URL;
export { REACT_APP_API_URL };
