import React from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

export default function About() {
  return (
    <section className="flex flex-col items-center space-y-6 mt-20 text-center">
      <div className="overflow-hidden rounded-full shadow-avatar">
        <Image
          className="scale-105"
          src="/images/james-currie.png"
          alt="James Currie"
          width={163}
          height={163}
        />
      </div>
      <div className="container space-y-5 sm:space-y-10">
        <h2 className="sr-only">About: James Currie and Hamworks</h2>
        <p className="text-xl sm:text-2xl md:text-3xl">
          James Currie | Hamworks
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          beatae dolore rem officiis maxime vel perspiciatis. Maiores ipsa nobis
          in voluptatum dolorum cumque debitis odio? Laboriosam, ducimus fugiat
          doloribus ipsa quo totam impedit. Enim, in?
        </p>
        <div className="flex space-x-4 justify-center">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">Facebook Profile</span>
            <FaFacebookF className="text-[#00b7ff] text-3xl" />
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">Twitter Profile</span>
            <FaTwitter className="text-[#00b7ff] text-3xl" />
          </a>
        </div>
      </div>
    </section>
  );
}
