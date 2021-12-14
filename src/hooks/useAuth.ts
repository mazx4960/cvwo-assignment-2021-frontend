// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";

// import { useState } from "react";
// import Cookies from "js-cookie";
// import userService from "../services/userService";

// export default function useAuth() {
//   const [accessToken, setAccessToken] = useState<string | undefined>(
//     Cookies.get("access_token")
//   );
//   const [user, setUser] = useState<User | undefined>(
//     Cookies.get("user") ? JSON.parse(Cookies.get("user") as string) : undefined
//   );
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
//     !!accessToken
//   );

//   const login = async (username: string, password: string) => {
//     const data = await userService.login(username, password);
//     Cookies.set("access_token", data.access_token);
//     Cookies.set("user", JSON.stringify(data.user));
//     setAccessToken(data.access_token);
//     setUser(data.user);
//     setIsAuthenticated(true);
//   };

//   const register = async (user: User) => {
//     const data = await userService.register(user);
//     Cookies.set("access_token", data.access_token);
//     Cookies.set("user", JSON.stringify(data.user));
//     setAccessToken(data.access_token);
//     setUser(data.user);
//     setIsAuthenticated(true);
//   };

//   const logout = async () => {
//     const res = await userService.logout();
//     Cookies.remove("access_token");
//     Cookies.remove("user");
//     setAccessToken("");
//     setUser(undefined);
//     setIsAuthenticated(false);
//     return res;
//   };

//   return { isAuthenticated, accessToken, user, login, register, logout };
// }
