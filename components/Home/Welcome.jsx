import React from "react";

export default function Welcome() {
  return (
    <section
      className="relative z-10 text-center bg-no-repeat
     bg-cover xl:bg-contain bg-center bg-black bg-[url('/images/bg-welcome.png')]
     py-40 shadow-welcome"
    >
      <div className="container mx-auto">
        <h2 className="">Welcome!</h2>
        <p className="mx-auto pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iure
          voluptate ab quis labore, maxime optio distinctio. Nesciunt explicabo
          nulla possimus nam veniam ipsum quam repudiandae, magni obcaecati ipsa
          sapiente.
        </p>
        <div
          className="my-9"
          aria-hidden="true"
        >
          <svg
            className="opacity-0 mx-auto animate-pulse-1"
            width="47"
            height="19"
            viewBox="0 0 47 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23.5001 13.9999L9.49096 0.764745L0.584229 0.822107L19.2766 18.9999H27.7839L46.2958 0.52771L37.7015 0.58306L23.5001 13.9999Z"
              fill="white"
            />
          </svg>
          <svg
            className="opacity-0 mx-auto animate-pulse-2"
            width="47"
            height="19"
            viewBox="0 0 47 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23.5001 13.9999L9.49096 0.764745L0.584229 0.822107L19.2766 18.9999H27.7839L46.2958 0.52771L37.7015 0.58306L23.5001 13.9999Z"
              fill="white"
            />
          </svg>
          <svg
            className="opacity-0 mx-auto animate-pulse-3"
            width="47"
            height="19"
            viewBox="0 0 47 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23.5001 13.9999L9.49096 0.764745L0.584229 0.822107L19.2766 18.9999H27.7839L46.2958 0.52771L37.7015 0.58306L23.5001 13.9999Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
