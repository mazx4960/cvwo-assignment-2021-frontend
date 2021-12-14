import { Menu, Transition } from "@headlessui/react";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import React, { Fragment } from "react";
import SimpleMenuItem, { SimpleMenuItemProps } from "./SimpleMenuItem";

interface SimpleMenuProps {
  items: SimpleMenuItemProps[];
}

export default function SimpleMenu({ items }: SimpleMenuProps) {
  return (
    <Menu as="div" className="flex-shrink-0 pr-2 relative">
      <Menu.Button className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
        <span className="sr-only">Open options</span>
        <DotsVerticalIcon className="w-5 h-5" aria-hidden="true" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="z-10 mx-3 origin-top-right absolute right-10 top-3 w-48 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none">
          {items.map((item, index) => (
            <SimpleMenuItem
              key={index}
              label={item.label}
              onClick={item.onClick}
            />
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
