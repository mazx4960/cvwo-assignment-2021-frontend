import { BookmarkIcon } from "@heroicons/react/outline";
import React from "react";
import { classNames } from "../helper";
import SimpleMenu from "../Menu/SimpleMenu";

interface EventGridProps {
  items: any[] | null;
}

export default function EventGrid({ items }: EventGridProps) {
  const itemOptions = [
    {
      label: "View",
      onClick: () => null,
    },
    {
      label: "Remove from pinned",
      onClick: () => null,
    },
    {
      label: "Share",
      onClick: () => null,
    },
  ];

  return (
    <div className="px-4 mt-6 sm:px-6 lg:px-8">
      <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
        Pinned Items
      </h2>
      <ul
        role="list"
        className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4 mt-3"
      >
        {items &&
          items.map((item) => (
            <li
              key={item.id}
              className="relative col-span-1 flex shadow-sm rounded-md"
            >
              <div
                className={classNames(
                  item.bgColorClass,
                  "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md"
                )}
              >
                12
              </div>
              <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md">
                <div className="flex-1 px-4 py-2 text-sm truncate">
                  <a
                    href="#"
                    className="text-gray-900 font-medium hover:text-gray-600"
                  >
                    {item.title}
                  </a>
                  <p className="text-gray-500">Event</p>
                </div>
                <SimpleMenu items={itemOptions} />
              </div>
            </li>
          ))}
        {items && items.length === 0 && emptyItem}
      </ul>
    </div>
  );
}

const emptyItem = (
  <li className="relative col-span-1 flex shadow-sm rounded-md border-2 border-gray-300 border-dashed ">
    <div
      className={classNames(
        "bg-gray-200",
        "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md"
      )}
    >
      <BookmarkIcon height="50%" width="50%" />
    </div>
    <div className="flex-1 flex items-center justify-between bg-white rounded-r-md">
      <div className="flex-1 px-4 py-2 text-sm truncate">
        <a href="#" className="text-gray-900 font-medium hover:text-gray-600">
          No pinned items
        </a>
        <p className="text-gray-500">Pin an task or event to display it here</p>
      </div>
    </div>
  </li>
);
