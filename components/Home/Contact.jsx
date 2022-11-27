import React from "react";

export default function Contact() {
  return (
    <section className="container mx-auto bg-[#D6D6D6] text-black mt-16 rounded shadow-contact lg:max-w-3xl">
      <div className="py-4 px-2 max-w-xs mx-auto md:max-w-2xl">
        <h2 className="text-3xl font-medium tracking-wider pb-4 text-center md:text-start">
          Contact Form
        </h2>
        <form
          action=""
          method=""
        >
          <ul className="space-y-4">
            <li>
              <ul className="space-y-4 md:space-y-0 md:space-x-8 md:flex md:justify-center">
                <li className="w-full md:space-y-2">
                  <label
                    htmlFor="name"
                    className="font-black tracking-widest sr-only md:not-sr-only"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="block w-full px-2 py-1 bg-[#EEEEEE] border-[#A9A9A9] border-2  
                rounded-md placeholder:font-normal font-bold focus:outline-none focus:ring-1
                 md:placeholder:sr-only focus:border-[#00b7ff] focus:ring-[#00b7ff]"
                  />
                </li>
                <li className="w-full md:space-y-2">
                  <label
                    htmlFor="mail"
                    className="font-black tracking-widest sr-only md:not-sr-only"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="mail"
                    name="email"
                    placeholder="Email Address"
                    className="block w-full px-2 py-1 bg-[#EEEEEE] border-[#A9A9A9] border-2  
                rounded-md placeholder:font-normal font-bold focus:outline-none focus:ring-1
                 md:placeholder:sr-only focus:border-[#00b7ff] focus:ring-[#00b7ff]"
                  />
                </li>
              </ul>
            </li>

            <li className="md:space-y-2">
              <label
                htmlFor="msg"
                className="font-black tracking-widest sr-only md:not-sr-only"
              >
                Message:
              </label>
              <textarea
                name="message"
                id="msg"
                placeholder="How can I help?"
                className="block w-full px-2 py-1 bg-[#EEEEEE] border-[#A9A9A9] border-2  
            rounded-md placeholder:font-normal font-bold focus:outline-none focus:ring-1
             md:placeholder:sr-only focus:border-[#00b7ff] focus:ring-[#00b7ff] h-40"
              ></textarea>
            </li>
            <li className="mx-auto w-fit row-start-3 col-start-2">
              <button
                type="submit"
                className="relative py-2 px-4 text-white tracking-widest"
              >
                <svg
                  className="btn-bg clip-path-btn"
                  width="207"
                  height="61"
                  viewBox="0 0 207 61"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    className="isolate mix-blend-hard-light"
                    clipPath="url(#clip0_226_92)"
                  >
                    <rect
                      width="207"
                      height="61"
                      fill="white"
                    />
                    <path
                      d="M0.192647 59.263V21.8845C0.191397 21.6334 0.24882 21.3855 0.360322 21.1606C0.471824 20.9358 0.634308 20.7402 0.834769 20.5896L27.4507 0.482782C27.7313 0.273733 28.0723 0.162186 28.4219 0.165095H205.254C205.465 0.165095 205.674 0.206701 205.869 0.287538C206.063 0.368375 206.24 0.486859 206.389 0.636226C206.538 0.785593 206.657 0.962918 206.737 1.15808C206.818 1.35323 206.86 1.5624 206.86 1.77364V39.5503C206.861 39.8072 206.801 40.0606 206.684 40.2894C206.567 40.5182 206.398 40.7156 206.189 40.8653L179.589 60.1678C179.314 60.369 178.983 60.4775 178.642 60.4774L1.79394 60.8796C1.58279 60.879 1.37381 60.8368 1.17899 60.7552C0.984163 60.6736 0.807313 60.5543 0.658566 60.4042C0.50982 60.254 0.392101 60.0759 0.31215 59.8801C0.2322 59.6843 0.191591 59.4746 0.192647 59.263V59.263Z"
                      fill="url(#paint0_linear_226_92)"
                    />
                    <path
                      className="mix-blend-screen"
                      opacity="0.51"
                      d="M0.192647 59.263V21.8845C0.191397 21.6334 0.24882 21.3855 0.360322 21.1606C0.471824 20.9358 0.634308 20.7402 0.834769 20.5896L27.4507 0.482782C27.7313 0.273733 28.0723 0.162186 28.4219 0.165095H205.254C205.465 0.165095 205.674 0.206701 205.869 0.287538C206.063 0.368375 206.24 0.486859 206.389 0.636226C206.538 0.785593 206.657 0.962918 206.737 1.15808C206.818 1.35323 206.86 1.5624 206.86 1.77364V39.5503C206.861 39.8072 206.801 40.0606 206.684 40.2894C206.567 40.5182 206.398 40.7156 206.189 40.8653L179.589 60.1678C179.314 60.369 178.983 60.4775 178.642 60.4774L1.79394 60.8796C1.58279 60.879 1.37381 60.8368 1.17899 60.7552C0.984163 60.6736 0.807313 60.5543 0.658566 60.4042C0.50982 60.254 0.392101 60.0759 0.31215 59.8801C0.2322 59.6843 0.191591 59.4746 0.192647 59.263V59.263Z"
                      fill="url(#paint1_linear_226_92)"
                    />
                    <path
                      className="mix-blend-screen"
                      opacity="0.7"
                      d="M0.192647 59.263V21.8845C0.191397 21.6334 0.24882 21.3855 0.360322 21.1606C0.471824 20.9358 0.634308 20.7402 0.834769 20.5896L27.4507 0.482782C27.7313 0.273733 28.0723 0.162186 28.4219 0.165095H205.254C205.465 0.165095 205.674 0.206701 205.869 0.287538C206.063 0.368375 206.24 0.486859 206.389 0.636226C206.538 0.785593 206.657 0.962918 206.737 1.15808C206.818 1.35323 206.86 1.5624 206.86 1.77364V39.5503C206.861 39.8072 206.801 40.0606 206.684 40.2894C206.567 40.5182 206.398 40.7156 206.189 40.8653L179.589 60.1678C179.314 60.369 178.983 60.4775 178.642 60.4774L1.79394 60.8796C1.58279 60.879 1.37381 60.8368 1.17899 60.7552C0.984163 60.6736 0.807313 60.5543 0.658566 60.4042C0.50982 60.254 0.392101 60.0759 0.31215 59.8801C0.2322 59.6843 0.191591 59.4746 0.192647 59.263V59.263Z"
                      fill="url(#paint2_linear_226_92)"
                    />
                    <g
                      className="mix-blend-screen"
                      opacity="0.49"
                    >
                      <path
                        d="M1.80999 60.5947C0.0240935 60.3212 0.333114 58.7127 0.333114 57.3857V26.2965C0.333114 24.9574 0.164557 23.4816 0.333114 22.1545C0.461539 21.121 1.07958 20.7269 1.84611 20.1438L6.5336 16.605L20.2549 6.25005L25.709 2.12815C26.5116 1.51289 27.3865 0.612101 28.4259 0.451246C29.2582 0.389694 30.0939 0.389694 30.9262 0.451246H165.122C178.285 0.451246 191.521 0.0491103 204.68 0.451246C206.807 0.515588 206.731 2.12011 206.731 3.84929V35.1516C206.731 36.4907 206.9 37.9665 206.731 39.2815C206.603 40.2949 206.049 40.6568 205.294 41.2037L181.066 58.7972C179.991 59.5813 179.244 60.1725 177.92 60.2006C176.274 60.2368 174.625 60.2006 172.976 60.2006L120.767 60.3212L49.6962 60.4821L3.94505 60.5867H1.80999V60.8802C13.0271 60.8802 24.2401 60.8279 35.4572 60.8038L106.014 60.647L166.478 60.5103C170.391 60.5103 174.533 60.8842 178.43 60.4821C180.256 60.2931 182.078 58.3468 183.502 57.3133L197.749 46.9703L203.685 42.6594C204.488 42.0884 205.439 41.5696 206.129 40.886C206.819 40.2024 206.739 39.4222 206.739 38.4973V33.1127C206.739 22.8945 206.916 12.6561 206.739 2.4378C206.739 1.34801 206.667 0.37484 205.258 0.157687C205.031 0.143389 204.803 0.143389 204.576 0.157687C202.971 0.121495 201.341 0.157687 199.728 0.157687H29.8988C28.8112 0.161708 28.0928 0.0973666 27.1417 0.75687C23.5298 3.27826 20.1145 6.06506 16.6109 8.7071L3.48754 18.6197C2.68489 19.239 1.64946 19.8262 0.927077 20.554C0.20469 21.2819 0.329101 22.0138 0.329101 22.9226V53.7101C0.329101 55.379 -0.618029 60.4861 1.80598 60.8802C1.79394 60.8842 1.82605 60.5987 1.80999 60.5947Z"
                        fill="white"
                      />
                    </g>
                    <path
                      d="M0.192647 59.263V21.8845C0.191397 21.6334 0.24882 21.3855 0.360322 21.1606C0.471824 20.9358 0.634308 20.7402 0.834769 20.5896L27.4507 0.482782C27.7313 0.273733 28.0723 0.162186 28.4219 0.165095H205.254C205.465 0.165095 205.674 0.206701 205.869 0.287538C206.063 0.368375 206.24 0.486859 206.389 0.636226C206.538 0.785593 206.657 0.962918 206.737 1.15808C206.818 1.35323 206.86 1.5624 206.86 1.77364V39.5503C206.861 39.8072 206.801 40.0606 206.684 40.2894C206.567 40.5182 206.398 40.7156 206.189 40.8653L179.589 60.1678C179.314 60.369 178.983 60.4775 178.642 60.4774L1.79394 60.8796C1.58279 60.879 1.37381 60.8368 1.17899 60.7552C0.984163 60.6736 0.807313 60.5543 0.658566 60.4042C0.50982 60.254 0.392101 60.0759 0.31215 59.8801C0.2322 59.6843 0.191591 59.4746 0.192647 59.263V59.263Z"
                      stroke="#717171"
                      strokeWidth="0.59"
                      strokeMiterlimit="1"
                    />
                    <g opacity="0.58">
                      <path
                        d="M0.192547 59.2632V25.2707C0.192547 24.197 0.0440561 22.9986 0.192547 21.9329C0.361104 20.6984 1.41659 20.1716 2.33162 19.4799L7.54886 15.543L21.2943 5.16387L26.2547 1.41999C26.961 0.885146 27.551 0.30607 28.4539 0.189451C31.7047 -0.236813 35.2725 0.189451 38.5272 0.189451H192.416C196.553 0.189451 200.735 0.0125109 204.857 0.189451C207.341 0.294006 206.863 2.86768 206.863 4.69739V36.1726C206.863 37.2463 207.012 38.4326 206.863 39.5023C206.695 40.7087 205.72 41.1872 204.813 41.8467L180.553 59.4603C179.741 60.1351 178.713 60.4923 177.659 60.4656H172.337L119.238 60.5862L48.2473 60.7471L3.57573 60.8476C2.15102 60.8476 0.489528 61.1452 0.180507 59.2391C0.180507 59.2391 0.180507 59.2713 0.180507 59.2873C0.497555 61.2578 2.33563 60.8959 3.79244 60.8959H10.3581L33.9882 60.8436L103.61 60.6868L165.126 60.5501C169.46 60.5501 173.83 60.6908 178.161 60.5219C179.766 60.4576 180.97 59.2109 182.226 58.2941L195.622 48.5664C199.042 46.0812 202.642 43.7408 205.932 41.0786C207.482 39.828 206.851 36.9246 206.851 35.1592V3.65988C206.851 2.05134 207.1 0.249771 204.929 0.141194C203.557 0.0728313 202.164 0.141194 200.791 0.141194H30.7696C29.9148 0.141194 28.763 -0.0558522 27.9081 0.225643C26.961 0.54333 26.0339 1.53258 25.2634 2.11568L19.5846 6.40647L5.67065 16.9143C4.25397 17.984 2.80919 19.0255 1.41659 20.1072C0.758417 20.6421 0.308931 20.9879 0.188534 21.9329C-0.240885 25.3069 0.188534 29.0186 0.188534 32.4126V59.2592C0.188534 59.2873 0.192547 59.2914 0.192547 59.2632Z"
                        fill="black"
                      />
                    </g>
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_226_92"
                      x1="103.534"
                      y1="60.8836"
                      x2="103.534"
                      y2="0.165097"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#656565" />
                      <stop
                        offset="0.56"
                        stopColor="#1B1B1B"
                      />
                      <stop
                        offset="0.6"
                        stopColor="#1E1E1E"
                      />
                      <stop
                        offset="0.64"
                        stopColor="#292929"
                      />
                      <stop
                        offset="0.67"
                        stopColor="#3A3A3A"
                      />
                      <stop
                        offset="0.7"
                        stopColor="#545454"
                      />
                      <stop
                        offset="0.98"
                        stopColor="#3E3E3E"
                      />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_226_92"
                      x1="103.534"
                      y1="60.8836"
                      x2="103.534"
                      y2="0.165097"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0E0E0E" />
                      <stop offset="0.5" />
                      <stop
                        offset="0.52"
                        stopColor="#010101"
                      />
                      <stop
                        offset="0.73"
                        stopColor="#0B0B0B"
                      />
                      <stop
                        offset="1"
                        stopColor="#0E0E0E"
                      />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_226_92"
                      x1="103.534"
                      y1="0.165095"
                      x2="103.534"
                      y2="60.8836"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        stopColor="white"
                        stopOpacity="0.77"
                      />
                      <stop
                        offset="0.2"
                        stopColor="white"
                        stopOpacity="0.65"
                      />
                      <stop
                        offset="0.34"
                        stopColor="white"
                        stopOpacity="0.65"
                      />
                      <stop
                        offset="0.35"
                        stopColor="white"
                        stopOpacity="0.65"
                      />
                      <stop
                        offset="0.37"
                        stopColor="white"
                        stopOpacity="0.62"
                      />
                      <stop
                        offset="0.4"
                        stopColor="white"
                        stopOpacity="0.53"
                      />
                      <stop
                        offset="0.43"
                        stopColor="white"
                        stopOpacity="0.39"
                      />
                      <stop
                        offset="0.47"
                        stopColor="white"
                        stopOpacity="0.2"
                      />
                      <stop
                        offset="0.51"
                        stopColor="white"
                        stopOpacity="0"
                      />
                      <stop
                        offset="0.59"
                        stopColor="#7E7E7E"
                        stopOpacity="0.09"
                      />
                      <stop
                        offset="1"
                        stopColor="#1B1B1B"
                        stopOpacity="0.16"
                      />
                    </linearGradient>
                    <clipPath id="clip0_226_92">
                      <rect
                        width="207"
                        height="61"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p className="absolute top-[33%] left-[29%] text-base contact">
                  CONTACT
                </p>
              </button>
            </li>
          </ul>
        </form>
      </div>
    </section>
  );
}
