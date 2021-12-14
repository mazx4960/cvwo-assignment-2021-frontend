import Cookies from "js-cookie";
import { Dispatch } from "react";
import { IStateUser } from ".";
import userService from "../../services/userService";
import UserActions from "./userActions";

const initialAuth: IStateUser = {
  isAuthenticated: false,
  user: null,
  accessToken: null,
  errorMessage: null,
};

export default function userReducer(
  state: IStateUser = initialAuth,
  action: UserActions
): IStateUser {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        accessToken: action.payload.access_token,
        errorMessage: "",
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        accessToken: null,
        errorMessage: action.payload,
      };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        accessToken: null,
        errorMessage: "",
      };
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        accessToken: action.payload.access_token,
        errorMessage: "",
      };
    case "SIGNUP_FAILURE":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        accessToken: null,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}

export const initUser = () => {
  return (dispatch: Dispatch<UserActions>) => {
    const accessToken = Cookies.get("access_token");
    if (!accessToken) {
      dispatch({
        type: "LOGOUT_SUCCESS",
      });
    } else {
      userService
        .getUser()
        .then((user) => {
          dispatch({
            type: "LOGIN_SUCCESS",
            payload: {
              message: "",
              access_token: accessToken,
              user: user,
            },
          });
        })
        .catch((error) => {
          dispatch({
            type: "LOGIN_FAILURE",
            payload: error.message,
          });
        });
    }
  };
};

export const login = (username: string, password: string) => {
  return function (dispatch: Dispatch<UserActions>) {
    return userService
      .login(username, password)
      .then((data) => {
        Cookies.set("access_token", data.access_token);
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: error.message,
        });
      });
  };
};

export const register = (user: User) => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      const data = await userService.register(user);
      Cookies.set("access_token", data.access_token);
      dispatch({
        type: "SIGNUP_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "SIGNUP_FAILURE",
        payload: "Failed to register",
      });
    }
  };
};

export const logout = () => {
  return async (dispatch: Dispatch<UserActions>) => {
    await userService.logout();
    Cookies.remove("access_token");
    dispatch({
      type: "LOGOUT_SUCCESS",
    });
  };
};
