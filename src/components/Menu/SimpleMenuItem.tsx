import { Menu } from "@headlessui/react";
import React from "react";
import { classNames } from "../helper";

export interface SimpleMenuItemProps {
  label: string;
  onClick: () => void;
}

export default function SimpleMenuItem({
  label,
  onClick,
}: SimpleMenuItemProps) {
  return (
    <div className="py-1">
      <Menu.Item>
        {({ active }) => (
          <a
            onClick={onClick}
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm"
            )}
          >
            {label}
          </a>
        )}
      </Menu.Item>
    </div>
  );
}
