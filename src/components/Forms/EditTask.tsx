import React, { useEffect, useState } from "react";
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
  const [taskTags, setTaskTags] = useState<Tag[]>(task.tags ? task.tags : []);

  useEffect(() => {
    if (open) {
      setTaskName(task.name);
      setTaskDescription(task.description);
    }
  }, [open]);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const updatedTask = {
      ...task,
      name: taskName,
      description: taskDescription,
      tags: taskTags,
    };
    dispatch(updateTask(updatedTask));
    // TODO: update task tags
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
          taskTags={taskTags}
          setTaskTags={setTaskTags}
        />
      }
    />
  );
}
