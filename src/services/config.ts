import Cookies from "js-cookie";

const getAxiosConfig = () => {
  const config = {
    headers: { Authorization: `Bearer ${Cookies.get("access_token")}` },
  };
  return config;
};

export default {
  getAxiosConfig,
};
