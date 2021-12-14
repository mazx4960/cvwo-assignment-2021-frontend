import React, { useState } from "react";
import SlideOver from "../SlideOver";
import { createTask } from "../../states/reducers/taskReducer";
import { useDispatch } from "react-redux";
import TaskForm from "./TaskForm";

interface NewTaskProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function NewTask({ open, setOpen }: NewTaskProps) {
  const dispatch = useDispatch();

  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const tags: Tag[] = [];

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const newTask = {
      name: taskName,
      description: taskDescription,
      deadline: null,
    };
    dispatch(createTask(newTask));
    setTaskName("");
    setTaskDescription("");
    setOpen(false);
  };

  return (
    <SlideOver
      title="New Task"
      open={open}
      setOpen={setOpen}
      handleSubmit={handleSubmit}
      component={
        <TaskForm
          taskName={taskName}
          setTaskName={setTaskName}
          taskDescription={taskDescription}
          setTaskDescription={setTaskDescription}
          tags={tags}
        />
      }
    />
  );
}
