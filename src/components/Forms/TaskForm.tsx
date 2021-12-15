import React from "react";
import {
  LinkIcon,
  PlusSmIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid";
import MultipleSelect from "../Select/MultipleSelect";
import { connect } from "react-redux";
import { IState } from "../../states/reducers";
interface TaskFormProps {
  taskName: string;
  setTaskName: (taskName: string) => void;
  taskDescription: string;
  setTaskDescription: (taskDescription: string) => void;
  taskTags: Tag[];
  tags: Tag[];
}

function TaskForm({
  taskName,
  setTaskName,
  taskDescription,
  setTaskDescription,
  taskTags,
  tags,
}: TaskFormProps) {
  const [selected, setSelected] = React.useState<Tag[]>(taskTags);

  return (
    <div className="flex-1 flex flex-col justify-between">
      <div className="px-4 divide-y divide-gray-200 sm:px-6">
        <div className="space-y-6 pt-6 pb-5">
          <div>
            <label
              htmlFor="project-name"
              className="block text-sm font-medium text-gray-900"
            >
              Task name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="project-name"
                id="project-name"
                className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-900"
            >
              Description
            </label>
            <div className="mt-1">
              <textarea
                id="description"
                name="description"
                rows={4}
                className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
              />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900">Tags</h3>
            <div className="mt-2">
              <div className="flex flex-shrink-0 -space-x-1">
                {selected &&
                  selected.map((tag) => (
                    <div
                      key={tag.id}
                      className="max-w-none h-6 w-6 rounded-full ring-2 ring-white bg-indigo-500"
                    />
                  ))}
                {!selected.length && emptyTag}
              </div>
            </div>
            <div className="mt-2">
              <MultipleSelect
                options={tags}
                selected={selected}
                setSelected={setSelected}
              />
            </div>
          </div>
          <fieldset>
            <legend className="text-sm font-medium text-gray-900">
              Privacy
            </legend>
            <div className="mt-2 space-y-5">
              <div className="relative flex items-start">
                <div className="absolute flex items-center h-5">
                  <input
                    id="privacy-public"
                    name="privacy"
                    aria-describedby="privacy-public-description"
                    type="radio"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    defaultChecked
                  />
                </div>
                <div className="pl-7 text-sm">
                  <label
                    htmlFor="privacy-public"
                    className="font-medium text-gray-900"
                  >
                    Public access
                  </label>
                  <p id="privacy-public-description" className="text-gray-500">
                    Everyone with the link will see this project.
                  </p>
                </div>
              </div>
              <div>
                <div className="relative flex items-start">
                  <div className="absolute flex items-center h-5">
                    <input
                      id="privacy-private-to-project"
                      name="privacy"
                      aria-describedby="privacy-private-to-project-description"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                  </div>
                  <div className="pl-7 text-sm">
                    <label
                      htmlFor="privacy-private-to-project"
                      className="font-medium text-gray-900"
                    >
                      Private to project members
                    </label>
                    <p
                      id="privacy-private-to-project-description"
                      className="text-gray-500"
                    >
                      Only members of this project would be able to access.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative flex items-start">
                  <div className="absolute flex items-center h-5">
                    <input
                      id="privacy-private"
                      name="privacy"
                      aria-describedby="privacy-private-to-project-description"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                  </div>
                  <div className="pl-7 text-sm">
                    <label
                      htmlFor="privacy-private"
                      className="font-medium text-gray-900"
                    >
                      Private to you
                    </label>
                    <p
                      id="privacy-private-description"
                      className="text-gray-500"
                    >
                      You are the only one able to access this project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="pt-4 pb-6">
          <div className="flex text-sm">
            <a
              href="#"
              className="group inline-flex items-center font-medium text-indigo-600 hover:text-indigo-900"
            >
              <LinkIcon
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-900"
                aria-hidden="true"
              />
              <span className="ml-2">Copy link</span>
            </a>
          </div>
          <div className="mt-4 flex text-sm">
            <a
              href="#"
              className="group inline-flex items-center text-gray-500 hover:text-gray-900"
            >
              <QuestionMarkCircleIcon
                className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
              />
              <span className="ml-2">Learn more about sharing</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const emptyTag = (
  <div className="flex-shrink-0 bg-white inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-dashed border-gray-200 text-gray-400 hover:text-gray-500 hover:border-gray-300">
    <PlusSmIcon className="h-4 w-4" aria-hidden="true" />
  </div>
);

const mapStateToProps = (state: IState) => ({
  tags: state.tags,
});

export default connect(mapStateToProps)(TaskForm);
