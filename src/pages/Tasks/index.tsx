import React from "react";
import { connect } from "react-redux";
import TaskTable from "../../components/Table/TaskTable";

function Tasks(): JSX.Element {
  return (
    <>
      <TaskTable />
    </>
  );
}

export default connect()(Tasks);
