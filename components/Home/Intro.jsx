import React from "react";

export default function Intro() {
  return (
    <section
      className="bg-cover bg-[url('/images/bg-hamworks.png')]
    bg-fixed bg-no-repeat h-screen
    grid grid-cols-[auto_1fr_auto_1fr] items-center"
    >
      <p
        className="text-decoration text-vertical font-medium
      pr-1 tracking-widest opacity-60 col-start-1"
      >
        - 2018-2022 Projects -
      </p>

      <h1 className="hamworks w-fit col-start-3">Hamworks</h1>
    </section>
  );
}
