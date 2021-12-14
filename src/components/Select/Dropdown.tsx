import React from "react";

interface Option {
  id: number;
  name: string;
}

const Dropdown = ({
  options,
  handleSelect,
}: {
  options: Option[];
  handleSelect: (option: Option) => void;
}) => {
  return (
    <div
      id="dropdown"
      className="absolute shadow top-100 bg-white z-40 w-full lef-0 rounded max-h-select overflow-y-auto "
    >
      <div className="flex flex-col w-full">
        {options.map((option) => {
          return (
            <div
              key={option.id}
              className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100"
              onClick={() => handleSelect(option)}
            >
              <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                <div className="w-full items-center flex">
                  <div className="mx-2 leading-6  ">{option.name}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
