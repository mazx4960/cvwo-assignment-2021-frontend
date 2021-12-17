import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import TaskTable from "../../components/Table/TaskTable";
import taskTagService from "../../services/taskTagService";

function TasksByTags(): JSX.Element {
  const { id } = useParams();
  if (!id) {
    return <div>No id Specified</div>;
  }
  const tagId = parseInt(id) || 0;

  const [tasks, setTasks] = React.useState<Task[]>([]);

  useEffect(() => {
    taskTagService.getTasksByTagId(tagId).then((t: Task[]) => {
      setTasks(t);
    });
  }, [setTasks]);

  return (
    <>
      <TaskTable tasks={tasks} />
    </>
  );
}

export default connect()(TasksByTags);
