import React from "react";

export default function Copyright() {
  return (
    <div
      className="flex justify-center gap-x-2 py-5
    text-gray-400 opacity-80 tracking-wide"
    >
      <p className="md:text-lg scale-[0.8] translate-y-[0.05rem]">&copy;</p>
      <p className="md:text-lg">2022 - Hamworks</p>
    </div>
  );
}
