import React from "react";

export default function Footer() {
  return (
    <footer
      className="mt-16 h-96 bg-[url('/images/footer-bg.jpg')]
    bg-gray-700 md:bg-gray-400 bg-blend-multiply bg-top bg-no-repeat bg-cover 
    flex"
    >
      <div className="container mx-auto flex flex-col justify-center">
        <div
          aria-hidden="true"
          className="mt-auto mx-auto"
        >
          <div className="rotate-180 space-y-2">
            <svg
              className="mx-auto animate-pulse-1"
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
              className="opacity-30 mx-auto animate-pulse-2"
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
              className="opacity-10 mx-auto animate-pulse-3"
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
          <p className="text-xs text-center pt-2">Return to top of page</p>
        </div>
        <address className="text-xs mt-auto md:mt-[-5.5rem] font-medium text-gray-400">
          <div className="pl-1 pb-1 space-y-6">
            <div className="flex flex-col">
              <span>Web Design:</span>
              <span>Leander Abaya - leo@kinzume.com</span>
            </div>
            <div className="flex flex-col">
              <span>Graphics & Layout:</span>
              <span>James Currie - james@hamworks.com</span>
            </div>
          </div>
        </address>
      </div>
    </footer>
  );
}
