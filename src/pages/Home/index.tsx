import React from "react";
import { connect } from "react-redux";
import PinnedGrid from "../../components/Grid/PinnedGrid";
import TaskTable from "../../components/Table/TaskTable";

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

function Home(): JSX.Element {
  return (
    <>
      <PinnedGrid items={items} />
      <TaskTable />
    </>
  );
}

export default connect()(Home);
