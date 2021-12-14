import React from "react";
import { connect } from "react-redux";
import EventGrid from "../../components/Grid/EventGrid";
import TaskTable from "../../components/Table/TaskTable";

const items: any[] | null = [
  // {
  //   id: 1,
  //   title: "GraphQL API",
  //   initials: "GA",
  //   pinned: true,
  //   bgColorClass: "bg-pink-600",
  // },
  // More projects...
];

function Home(): JSX.Element {
  return (
    <>
      <EventGrid items={items} />
      <TaskTable />
    </>
  );
}

export default connect()(Home);
