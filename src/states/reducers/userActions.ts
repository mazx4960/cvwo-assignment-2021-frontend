type AuthResponse = {
  message: string;
  access_token: string;
  user: User;
};

interface AuthSuccessAction {
  type: "LOGIN_SUCCESS" | "SIGNUP_SUCCESS";
  payload: AuthResponse;
}

interface AuthFailureAction {
  type: "LOGIN_FAILURE" | "SIGNUP_FAILURE";
  payload: string;
}

interface LogoutAction {
  type: "LOGOUT_SUCCESS";
}

type UserActions = AuthSuccessAction | AuthFailureAction | LogoutAction;
export default UserActions;
