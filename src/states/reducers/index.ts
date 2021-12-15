import { combineReducers } from "redux";
import tagReducer from "./tagReducer";
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
  tags: Tag[];
  auth: IStateUser;
}

const reducer = combineReducers({
  tasks: taskReducer,
  tags: tagReducer,
  auth: userReducer,
});

export default reducer;
