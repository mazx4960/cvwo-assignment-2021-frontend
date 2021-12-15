import React, { useState } from "react";
import SlideOver from "../SlideOver";
import { updateTask } from "../../states/reducers/taskReducer";
import { useDispatch } from "react-redux";
import TaskForm from "./TaskForm";

interface EditTaskProps {
  task: Task;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function EditTask({ task, open, setOpen }: EditTaskProps) {
  const dispatch = useDispatch();

  const [taskName, setTaskName] = useState(task.name);
  const [taskDescription, setTaskDescription] = useState(task.description);
  const tags = task.tags ? task.tags : [];

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const newTask = {
      ...task,
      name: taskName,
      description: taskDescription,
    };
    dispatch(updateTask(newTask));
    setTaskName("");
    setTaskDescription("");
    setOpen(false);
  };

  return (
    <SlideOver
      title="Update Task"
      open={open}
      setOpen={setOpen}
      handleSubmit={handleSubmit}
      component={
        <TaskForm
          taskName={taskName}
          setTaskName={setTaskName}
          taskDescription={taskDescription}
          setTaskDescription={setTaskDescription}
          taskTags={tags}
        />
      }
    />
  );
}
