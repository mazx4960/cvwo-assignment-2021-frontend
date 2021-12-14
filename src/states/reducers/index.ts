import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import userReducer from "./userReducer";

export interface IStateUser {
  isAuthenticated: boolean;
  user: User | null;
  accessToken: string | null;
  errorMessage: string | null;
}

export interface IState {
  tasks: Task[];
  auth: IStateUser;
}

const reducer = combineReducers({
  tasks: taskReducer,
  auth: userReducer,
});

export default reducer;
