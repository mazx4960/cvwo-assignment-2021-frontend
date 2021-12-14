import { ChevronRightIcon, PlusSmIcon } from "@heroicons/react/solid";
import React from "react";
import { connect, useDispatch } from "react-redux";
import { IState } from "../../states/reducers";
import { deleteTask, updateTask } from "../../states/reducers/taskReducer";
import EditTask from "../Forms/EditTask";
import { classNames, getDateString } from "../helper";
import SimpleMenu from "../Menu/SimpleMenu";

interface TaskTableProps {
  tasks: Task[];
}

function TaskTable({ tasks }: TaskTableProps) {
  const dispatch = useDispatch();

  const [editTaskOpen, setEditTaskOpen] = React.useState(false);
  const [editTask, setEditTask] = React.useState<Task | null>(null);

  const getTaskOptions = (task: Task) => {
    return [
      {
        label: "Edit",
        onClick: () => handleEdit(task),
      },
      {
        label: "Delete",
        onClick: () => handleDelete(task),
      },
      // {
      //   label: "Pin",
      //   onClick: () => handlePin(task),
      // }
    ];
  };

  const handleComplete = (task: Task) => {
    task.status = !task.status;
    dispatch(updateTask(task));
  };

  const handleEdit = (task: Task) => {
    setEditTask(task);
    setEditTaskOpen(true);
  };

  const handleDelete = (task: Task) => {
    dispatch(deleteTask(task.id));
  };

  return (
    <>
      {editTask && (
        <EditTask
          task={editTask}
          open={editTaskOpen}
          setOpen={setEditTaskOpen}
        />
      )}

      {/* Task list (only on smallest breakpoint) */}
      <div className="mt-10 sm:hidden">
        <div className="px-4 sm:px-6">
          <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
            Tasks
          </h2>
        </div>
        <ul
          role="list"
          className="mt-3 border-t border-gray-200 divide-y divide-gray-100"
        >
          {tasks.map((task) => (
            <li key={task.id}>
              <a
                href="#"
                className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6"
              >
                <span className="flex items-center truncate space-x-3">
                  <span
                    className={classNames(
                      task.bgColorClass ? task.bgColorClass : "bg-gray-200",
                      "w-2.5 h-2.5 flex-shrink-0 rounded-full"
                    )}
                    aria-hidden="true"
                  />
                  <span className="font-medium truncate text-sm leading-6">
                    {task.name}{" "}
                  </span>
                </span>
                <ChevronRightIcon
                  className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Tasks table (small breakpoint and up) */}
      <div className="hidden mt-8 sm:block">
        <div className="align-middle inline-block min-w-full border-b border-gray-200">
          <table className="min-w-full">
            <thead>
              <tr className="border-t border-gray-200">
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <span className="lg:pl-2">Task</span>
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tags
                </th>
                <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Deadline
                </th>
                <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Completed
                </th>
                <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" />
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td className="px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-900">
                    <div className="flex items-center space-x-3 lg:pl-2">
                      <div
                        className={classNames(
                          task.bgColorClass ? task.bgColorClass : "bg-gray-200",
                          "flex-shrink-0 w-2.5 h-2.5 rounded-full"
                        )}
                        aria-hidden="true"
                      />
                      <a href="#" className="truncate hover:text-gray-600">
                        <span>{task.name} </span>
                      </a>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-500 font-medium">
                    <div className="flex items-center space-x-2">
                      <div className="flex flex-shrink-0 -space-x-1">
                        {task.tags &&
                          task.tags.map((tag) => (
                            <img
                              key={tag.id}
                              className="max-w-none h-6 w-6 rounded-full ring-2 ring-white"
                              src={tag.color}
                              alt={tag.name}
                            />
                          ))}
                        <button
                          type="button"
                          className="flex-shrink-0 bg-white inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-gray-200 text-gray-400 hover:text-gray-500 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <span className="sr-only">Add tag</span>
                          <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right">
                    {task.deadline
                      ? getDateString(task.deadline)
                      : "No deadline"}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap text-right text-sm font-medium">
                    <div className="ml-3 flex items-center h-5">
                      <input
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        checked={task.status}
                        onChange={() => handleComplete(task)}
                      />
                    </div>
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap text-right text-sm font-medium">
                    {/* <a
                      className="text-indigo-600 hover:text-indigo-900"
                      onClick={() => handleEdit(task)}
                    >
                      Edit
                    </a> */}
                    <SimpleMenu items={getTaskOptions(task)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state: IState) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps)(TaskTable);
