import { TagIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { colors } from "../../helpers/colorsHelper";
import { createTag } from "../../states/reducers/tagReducer";

export default function AddTagForm(): JSX.Element {
  const dispatch = useDispatch();

  const [tagName, setTagName] = useState("");
  const [tagColor, setTagColor] = useState("red");

  const handleAddTag = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const newTag = {
      name: tagName,
      color: tagColor,
    };
    dispatch(createTag(newTag));
  };

  return (
    <div className="max-w-md mx-auto sm:max-w-3xl">
      <div>
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <TagIcon />
          </svg>
          <h2 className="mt-2 text-lg font-medium text-gray-900">Add tags</h2>
          <p className="mt-1 text-sm text-gray-500">
            Create tags to group tasks together.
          </p>
        </div>
        <form className="mt-6 sm:flex sm:items-center" onSubmit={handleAddTag}>
          <label htmlFor="tags" className="sr-only">
            Tags
          </label>
          <div className="relative rounded-md shadow-sm sm:min-w-0 sm:flex-1">
            <input
              type="text"
              name="tags"
              id="tags"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-32 sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter a tag name"
              value={tagName}
              onChange={(event) => setTagName(event.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <span className="h-4 w-px bg-gray-200" aria-hidden="true" />
              <label htmlFor="role" className="sr-only">
                Colour
              </label>
              <select
                id="role"
                name="role"
                className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-4 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                value={tagColor}
                onChange={(event) => setTagColor(event.target.value)}
              >
                {colors.map((color, index) => (
                  <option key={index} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-4 sm:flex-shrink-0">
            <button
              type="submit"
              className="block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
