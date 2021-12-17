import React from "react";
import { connect } from "react-redux";
import TaskTable from "../../components/Table/TaskTable";
import { IState } from "../../states/reducers";

function Tasks({ tasks }: { tasks: Task[] }): JSX.Element {
  return (
    <>
      <TaskTable tasks={tasks} />
    </>
  );
}

const mapStateToProps = (state: IState) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps)(Tasks);
