/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import React from "react";
import { PlusIcon } from "@heroicons/react/solid";
import { IState } from "../../states/reducers";
import { connect } from "react-redux";
import { classNames } from "../helper";

const TagGrid = ({ tags }: { tags: Tag[] }): JSX.Element => {
  return (
    <>
      <div className="mt-10">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          Tags
        </h3>
        <ul
          role="list"
          className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-4 lg:grid-cols-6"
        >
          {tags &&
            tags.map((tag, tagIdx) => (
              <li key={tagIdx}>
                <button
                  type="button"
                  className="group p-2 w-full flex items-center justify-between rounded-full border border-gray-300 shadow-sm space-x-3 text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="min-w-0 flex-1 flex items-center space-x-3">
                    <span
                      className={classNames(
                        tag.color ? tag.color : "bg-gray-200",
                        "w-5 h-5 flex-shrink-0 rounded-full"
                      )}
                      aria-hidden="true"
                    />
                    <span className="block min-w-0 flex-1">
                      <span className="block text-sm font-medium text-gray-900 truncate">
                        {tag.name}
                      </span>
                      <span className="block text-sm font-medium text-gray-500 truncate"></span>
                    </span>
                  </span>
                  <span className="flex-shrink-0 h-10 w-10 inline-flex items-center justify-center">
                    <PlusIcon
                      className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </span>
                </button>
              </li>
            ))}
          {!tags || (tags.length === 0 && emptyTag)}
        </ul>
      </div>
    </>
  );
};

const emptyTag = (
  <li>
    <button
      type="button"
      className="group p-2 w-full flex items-center justify-between rounded-full border-2 border-gray-300 border-dashed shadow-sm space-x-3 text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <span className="min-w-0 flex-1 flex items-center space-x-3">
        <span
          className={classNames(
            "bg-gray-200",
            "w-5 h-5 flex-shrink-0 rounded-full"
          )}
          aria-hidden="true"
        />
        <span className="block min-w-0 flex-1">
          <span className="block text-sm font-medium text-gray-900 truncate">
            You have not created a tag yet
          </span>
          <span className="block text-sm font-medium text-gray-500 truncate">
            Create one now
          </span>
        </span>
      </span>
      <span className="flex-shrink-0 h-10 w-10 inline-flex items-center justify-center">
        <PlusIcon
          className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
          aria-hidden="true"
        />
      </span>
    </button>
  </li>
);

const mapStateToProps = (state: IState) => ({
  tags: state.tags,
});

export default connect(mapStateToProps)(TagGrid);
