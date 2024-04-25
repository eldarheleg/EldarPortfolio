import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import devEdPic from "./assets/dev-ed-wave.png";
import memePic from "./assets/meme gen.png";
import podcastPic from "./assets/podcast.png";
import web1 from "./assets/web1.png";
import cv from "./assets/CV-eng-Eldar-Heleg (2).pdf";
import "./App.css";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`${darkMode && "dark"}`}>
      <main className="bg-gradient-to-b from-[#fff1eb] to-[#ace0f9] dark:bg-gradient-to-b dark:from-[#0B2447] dark:to-[#19376D]">
        <section className="min-h-60 mx-5">
          <nav className="p-5 flex flex-col gap-5 md:flex-row justify-between">
            <h1 className="text-2xl font-burtons mr-3 text-center dark:text-white">
              Hi,
            </h1>
            <ul className="flex flex-row items-center justify-center">
              <li>
                {darkMode ? (
                  <MdOutlineDarkMode
                    className="text-white"
                    onClick={toggleDarkMode}
                  />
                ) : (
                  <MdOutlineWbSunny onClick={toggleDarkMode} />
                )}
              </li>
              <li>
                <a
                  className="ring-1 ring-blue-500 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 dark:text-white text-black hover:text-white px-4 py-2 rounded-md ml-6"
                  href={cv}
                  download="Eldar_Heleg_Resume"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="mx-auto text-center p-5 max-w-screen-lg flex flex-col items-center gap-10 lg:max-2xl:flex-row-reverse lg:my-10 lg:items-center">
            <img
              className="size-full flex-none bg-cover bg-center basis-1/2 max-w-md  h-100 min-h-60 min-w-40  hover:bg-gradient-to-b rounded-2xl hover:from-blue-600 hover:to-blue-400"
              src={devEdPic}
              alt="dev-ed"
            />
            <div className="flex flex-col basis-1/2 shrink">
              <h2 className="text-3xl lg:text-left  lg:text-4xl text-blue-500">
                Eldar Heleg
              </h2>
              <div className="flex justify-center items-center py-6 gap-4 lg:justify-start">
                <FaCode className="min-h-8 min-w-8 size-10 text-blue-500" />
                <h3 className="text-xl max-h-lg md:text-xl lg:text-left lg:text-2xl mx-1 text-wrap capitalize dark:text-white">
                  Developer & /* <i>designer</i> */
                </h3>
              </div>
              <p className="text-md  md:text-lg lg:text-xl text-left text-wrap dark:text-white">
                A software engineer who welcomes challenges in web and app
                development. Finishing my bachelor thesis at the University of
                Zenica, Bosnia and Herzegovina. Exploring the world of software
                engines, making my own, and seeking for web and app solutions
                that technology could bring to the Earth.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-10 text-gray-800 m-12">
            <a href="https://www.linkedin.com/in/eldar-heleg/" target="_blank">
              <FiLinkedin
                size={40}
                className="text-blue-500 hover:border-b-2 hover:border-blue-500"
              />
            </a>
            <a href="https://github.com/eldarheleg">
              <FiGithub
                size={40}
                className="text-black dark:text-white hover:border-b-2 hover:border-black dark:hover:border-white"
              />
            </a>
          </div>
        </section>
        <section id="projects">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Projects
              </h2>
              <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                <div className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={web1}
                      alt="storage"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500 dark:text-blue-500">
                    <a href="https://github.com/eldarheleg/Storage-React-Nodejs-MySql" target="_blank">
                      <span className="absolute inset-0 "></span>
                      React and NodeJs
                    </a>
                  </h3>
                  <p className="text-base  dark:text-white font-semibold text-gray-900">
                    Storage management system
                  </p>
                </div>
                <div className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={podcastPic}
                      alt="podcast"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500 dark:text-blue-500">
                    <a href="https://github.com/eldarheleg/podcast_ba" target="_blank">
                      <span className="absolute inset-0"></span>
                      Flutter
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900 dark:text-white">
                    Podcast app
                  </p>
                </div>
                <div className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={memePic}
                      alt="airbnb"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500 dark:text-blue-500">
                    <a href="https://github.com/eldarheleg/Meme-Generator" target="_blank">
                      <span className="absolute inset-0"></span>
                      React
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900 dark:text-white">
                    Meme generator
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
