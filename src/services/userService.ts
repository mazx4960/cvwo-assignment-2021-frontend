import axios from "axios";
import config from "./config";

const baseUrl = "http://localhost:8080/api/";

type AuthResponse = {
  message: string;
  access_token: string;
  user: User;
};

type UserResponse = {
  message: string;
  user: User;
};

const getUser = async () => {
  const cfg = config.getAxiosConfig();
  const response = await axios.get<UserResponse>(baseUrl + "user", cfg);
  return response.data.user;
};

const login = async (username: string, password: string) => {
  const response = await axios.post<AuthResponse>(baseUrl + "login", {
    username,
    password,
  });
  return response.data;
};

const register = async (user: User) => {
  const response = await axios.post<AuthResponse>(baseUrl + "register", user);
  return response.data;
};

const logout = async () => {
  const cfg = config.getAxiosConfig();
  const response = await axios.post(baseUrl + "logout", {}, cfg);
  return response.data;
};

export default {
  getUser,
  login,
  register,
  logout,
};
