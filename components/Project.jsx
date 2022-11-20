import React from "react";
import Image from "next/image";
import Tag from "./Tag";

export default function Project({ date, image, skills, title }) {
  return (
    <article className="group bg-white rounded-lg shadow-project">
      <Image
        className=" rounded-lg shadow-img"
        src={image}
        alt={title}
        width={1920}
        height={1080}
      />
      <div className="text-black py-4 px-3 rounded-b-lg">
        <div className="flex flex-col-reverse mb-6">
          <h3 className="pt-3 text-gray-700 text-lg font-medium tracking-wider">
            {title}
          </h3>
          <div className="flex gap-x-2 flex-wrap">
            {skills?.map((item, i) => (
              <Tag
                item={item}
                key={i}
              />
            ))}
          </div>
        </div>
        <span className="text-gray-500 text-xs">{date}</span>
      </div>
    </article>
  );
}
