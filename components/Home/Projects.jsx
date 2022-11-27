import React from "react";
import Project from "./Project";
import projects from "../../data/projects";

export default function Projects() {
  return (
    <section className="flex flex-wrap justify-center container mx-auto gap-8 xl:gap-16 z-10 relative">
      <h2 className="sr-only">Recent Projects</h2>
      {projects?.items?.map((item, i) => (
        <Project
          href={item.href}
          src={item.src}
          skills={item.skills}
          title={item.title}
          date={item.date}
          key={i}
        />
      ))}
    </section>
  );
}
