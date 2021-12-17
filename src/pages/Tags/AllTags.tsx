import React from "react";
import AddTagForm from "../../components/Forms/AddTag";
import TagGrid from "../../components/Grid/TagGrid";

export default function AllTags(): JSX.Element {
  return (
    <div className="px-4 my-6 sm:px-6 lg:px-8">
      <AddTagForm />
      <TagGrid />
    </div>
  );
}
