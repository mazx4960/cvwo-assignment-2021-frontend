import { Dispatch } from "redux";
import taskService from "../../services/taskService";
import TaskActions from "./taskActions";

export default function taskReducer(
  state: Task[] = [] as Task[],
  action: TaskActions
): Task[] {
  switch (action.type) {
    case "INIT_TASKS":
      return action.payload;
    case "CREATE_TASK":
      return [...state, action.payload];
    case "DELETE_TASK":
      return state.filter((task: Task) => task.id !== action.payload);
    case "UPDATE_TASK":
      return state.map((task: Task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        } else {
          return task;
        }
      });
    default:
      return state;
  }
}

export const initTasks = () => {
  return (dispatch: Dispatch) => {
    taskService.getAllTasks().then((tasks: Task[]) => {
      dispatch({
        type: "INIT_TASKS",
        payload: tasks,
      });
    });
  };
};

export const createTask = (task: Task) => {
  return (dispatch: Dispatch) => {
    taskService.createTask(task).then((newTask: Task) => {
      dispatch({
        type: "CREATE_TASK",
        payload: newTask,
      });
    });
  };
};

export const deleteTask = (id: number) => {
  return (dispatch: Dispatch) => {
    taskService.deleteTask(id).then(() => {
      dispatch({
        type: "DELETE_TASK",
        payload: id,
      });
    });
  };
};

export const updateTask = (task: Task) => {
  return (dispatch: Dispatch) => {
    taskService.updateTask(task).then((updatedTask: Task) => {
      dispatch({
        type: "UPDATE_TASK",
        payload: updatedTask,
      });
    });
  };
};
