import React from "react";
import { connect } from "react-redux";
import PinnedGrid from "../../components/Grid/PinnedGrid";
import TaskTable from "../../components/Table/TaskTable";
import { IState } from "../../states/reducers";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const items: any[] | null = [
  // {
  //   id: 1,
  //   title: "GraphQL API",
  //   initials: "GA",
  //   pinned: true,
  //   bgColorClass: "bg-pink-600",
  // },
];

function Home({ tasks }: { tasks: Task[] }): JSX.Element {
  return (
    <>
      <PinnedGrid items={items} />
      <TaskTable tasks={tasks} />
    </>
  );
}

const mapStateToProps = (state: IState) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps)(Home);
