import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Project from "../components/Project";
import projects from "../data/projects";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <div className="text-white font-orbitron">
      <Head>
        <title>Hamworks</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <main>
        <section
          className="w-full bg-[url('/images/bg-hamworks.png')]
          bg-fixed bg-center bg-no-repeat bg-cover 
          relative shadow-hero"
        >
          <h1 className="hamworks w-full text-center text-4xl absolute top-20 left-0 ">
            Hamworks
          </h1>
          <span
            className="text-decoration text-vertical font-medium absolute 
            top-10 pr-1 tracking-widest opacity-60"
          >
            - 2018-2022 Projects -
          </span>
          <div
            aria-hidden="true"
            className="h-hero mb-[-2rem]"
          ></div>
          <div
            className="text-center bg-[url('/images/bg-welcome.png')] bg-center
            bg-no-repeat bg-cover pt-4"
          >
            <span className="text-2xl">Welcome!</span>
            <p className="mx-auto max-w-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              iure voluptate ab quis labore, maxime optio distinctio. Nesciunt
              explicabo nulla possimus nam veniam ipsum quam repudiandae, magni
              obcaecati ipsa sapiente.
            </p>
          </div>
        </section>
        <div
          className="my-9"
          aria-hidden="true"
        >
          <svg
            className="opacity-10 mx-auto"
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
            className="opacity-30 mx-auto"
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
            className="mx-auto"
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
        <section className="flex flex-col max-w-sm mx-auto gap-8">
          <h2 className="sr-only">Recent Projects</h2>
          {projects?.items?.map((item, i) => (
            <Project
              image={item.image}
              skills={item.skills}
              title={item.title}
              date={item.date}
              key={i}
            />
          ))}
        </section>
        <section className="flex flex-col items-center space-y-6 mt-20">
          <Image
            className="shadow-avatar rounded-full"
            src="/images/james-currie.png"
            alt="James Currie"
            width={163}
            height={163}
          />
          <h2 className="sr-only">About: James Currie and Hamworks</h2>
          <span className="text-lg">James Currie | Hamworks</span>
          <p className="text-center mx-auto max-w-xs">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            beatae dolore rem officiis maxime vel perspiciatis. Maiores ipsa
            nobis in voluptatum dolorum cumque debitis odio? Laboriosam, ducimus
            fugiat doloribus ipsa quo totam impedit. Enim, in?
          </p>
          <div className="flex space-x-4">
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
        </section>
      </main>
      <footer
        className="w-full bg-gray-600 bg-blend-multiply bg-[url('/images/footer-bg.jpg')]
        bg-center bg-no-repeat bg-cover"
      >
        <div
          aria-hidden="true"
          className="h-12"
        ></div>
        <div
          aria-hidden="true"
          className="mb-8"
        >
          <div className="rotate-180 space-y-2">
            <svg
              className="mx-auto"
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
              className="opacity-30 mx-auto"
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
              className="opacity-10 mx-auto"
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
        <address className="text-xs font-medium text-gray-400">
          <div className="pl-1 pb-1">
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
      </footer>

      <div
        className="flex justify-center gap-x-2 py-5
      text-xs text-gray-400 opacity-80 tracking-wide"
      >
        <p className="scale-[0.8] translate-y-[0.05rem]">&copy;</p>
        <p>2022 - Hamworks</p>
      </div>
    </div>
  );
}
