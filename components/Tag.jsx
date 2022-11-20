import React from "react";

export default function Tag({ item }) {
  return (
    <span
      className="border-2 text-gray-500 border-gray-300 pt-1
      rounded-2xl w-fit text-xs px-2 md:font-bold"
    >
      {item}
    </span>
  );
}
