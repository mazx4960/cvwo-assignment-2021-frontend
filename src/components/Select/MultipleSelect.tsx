import { XCircleIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import Dropdown from "./Dropdown";

interface Option {
  id: number;
  name: string;
}

interface MultipleSelectProps {
  options: Option[];
  selected: Option[];
  setSelected: (selected: Option[]) => void;
  text: string;
  setText: (text: string) => void;
}

export default function MultipleSelect({
  options,
  selected,
  setSelected,
  text,
  setText,
}: MultipleSelectProps) {
  const [dropdown, setDropdown] = useState(true);

  const handleSelect = (option: Option) => {
    setSelected([...selected, option]);
    options.filter((o) => o.id !== option.id);
  };

  const handleRemove = (option: Option) => {
    setSelected(selected.filter((o) => o.id !== option.id));
    options.push(option);
  };

  // toggle dropdown open/close
  const toogleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="autcomplete-wrapper">
      <div className="autcomplete">
        <div className="w-full flex flex-col items-center mx-auto">
          <div className="w-full">
            <div className="flex flex-col items-center relative">
              <div className="w-full ">
                <div className="my-2 p-1 flex border border-gray-200 bg-white rounded ">
                  <div className="flex flex-auto flex-wrap">
                    {selected.map((option) => {
                      return (
                        <div
                          key={option.id}
                          className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-teal-700 bg-teal-100 border border-teal-300 "
                        >
                          <div className="text-xs font-normal leading-none max-w-full flex-initial">
                            {option.name}
                          </div>
                          <div className="flex flex-auto flex-row-reverse">
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                height="100%"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2"
                              >
                                <XCircleIcon
                                  onClick={() => handleRemove(option)}
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <div className="flex-1">
                      <input
                        placeholder=""
                        className="bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                      />
                    </div>
                  </div>
                  <div
                    className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200"
                    onClick={toogleDropdown}
                  >
                    <button className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-chevron-up w-4 h-4"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
                {dropdown ? (
                  <Dropdown options={options} handleSelect={handleSelect} />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
