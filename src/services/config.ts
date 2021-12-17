import Cookies from "js-cookie";

const getAxiosConfig = () => {
  const config = {
    headers: { Authorization: `Bearer ${Cookies.get("access_token")}` },
  };
  return config;
};

const getBaseUrl = () => {
  const baseUrl = process.env.REACT_APP_API_URL;
  if (baseUrl === undefined) {
    return "http://localhost:8080/api/";
  }
  return baseUrl;
};

export default {
  getAxiosConfig,
  getBaseUrl,
};
