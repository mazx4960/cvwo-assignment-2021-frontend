interface SingleTaskActions {
  type: "CREATE_TASK" | "UPDATE_TASK";
  payload: Task;
}

interface MultipleTaskActions {
  type: "INIT_TASKS";
  payload: Task[];
}

interface IdTaskActions {
  type: "DELETE_TASK";
  payload: number;
}

type TaskActions = SingleTaskActions | MultipleTaskActions | IdTaskActions;

export default TaskActions;
