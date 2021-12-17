import React, { useState } from "react";
import SlideOver from "../SlideOver";
import { createTask } from "../../states/reducers/taskReducer";
import { useDispatch } from "react-redux";
import TaskForm from "./TaskForm";
import { getRandomColor } from "../../helpers/colorsHelper";

interface NewTaskProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function NewTask({ open, setOpen }: NewTaskProps) {
  const dispatch = useDispatch();

  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskTags, setTaskTags] = useState<Tag[]>([]);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const newTask = {
      name: taskName,
      description: taskDescription,
      deadline: null,
      color: getRandomColor(),
      tags: taskTags,
    };
    dispatch(createTask(newTask));
    // TODO: update task tags

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
          taskTags={taskTags}
          setTaskTags={setTaskTags}
        />
      }
    />
  );
}
