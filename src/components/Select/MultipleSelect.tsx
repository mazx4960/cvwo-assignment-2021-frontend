import React, { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/solid";

interface MultipleSelectProps {
  options: Tag[];
  selected: Tag[];
  setSelected: (selected: Tag[]) => void;
}

export default function MultipleSelect({
  options,
  selected,
  setSelected,
}: MultipleSelectProps) {
  const isSelected = (tagId: number) =>
    selected.filter((o) => o.id == tagId).length > 0;

  const handleSelect = (tagId: number) => {
    if (isSelected(tagId)) {
      setSelected(selected.filter((o) => o.id !== tagId));
    } else {
      const newSelected = [
        ...selected,
        ...options.filter((o) => o.id == tagId),
      ];
      setSelected(newSelected);
    }
  };

  return (
    <Listbox
      as="div"
      className="space-y-1"
      value={0}
      onChange={(value) => handleSelect(value)}
    >
      <Listbox.Label className="block text-sm leading-5 font-medium text-gray-700">
        Add Tag
      </Listbox.Label>
      <div className="relative">
        <span className="inline-block w-full rounded-md shadow-sm">
          <Listbox.Button className="cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
            <span className="block truncate">
              {selected.length < 1
                ? "Select tags"
                : `Selected tags (${selected.length})`}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Listbox.Button>
        </span>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="z-10 absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options.map((option, idx) => (
              <Listbox.Option
                key={idx}
                className={({ active }) =>
                  `${active ? "text-amber-900 bg-amber-100" : "text-gray-900"}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                }
                value={option.id}
              >
                {({ active }) => (
                  <>
                    <span
                      className={`${
                        selected ? "font-medium" : "font-normal"
                      } block truncate`}
                    >
                      {option.name}
                    </span>
                    {isSelected(option.id) ? (
                      <span
                        className={`${
                          active ? "text-amber-600" : "text-amber-600"
                        }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                      >
                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
