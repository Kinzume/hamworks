import React from "react";
import Image from "next/image";
import Tag from "./Tag";

export default function Project({ href, src, skills, title, date }) {
  return (
    <a
      className="flex"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <article
        className="grid grid-rows-[auto_1fr] md:max-w-[23rem] lg:max-w-[31rem] xl:max-w-[38rem] 2xl:max-w-[46rem]
        group bg-white rounded-lg shadow-project"
      >
        <Image
          className="rounded-lg shadow-img"
          src={src}
          alt={title}
          width={1920}
          height={1080}
        />
        <div className="flex flex-col rounded-b-lg m-2 md:m-3 lg:mx-6">
          <div className="flex gap-x-2 flex-wrap">
            {skills?.map((item, i) => (
              <Tag
                item={item}
                key={i}
              />
            ))}
          </div>
          <h3 className="pt-3 pb-6 text-gray-700 font-medium tracking-wider">
            {title}
          </h3>
          <span className="mt-auto text-gray-500 text-xs md:text-sm lg:text-base">
            {date}
          </span>
        </div>
      </article>
    </a>
  );
}
