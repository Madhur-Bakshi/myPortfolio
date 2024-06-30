import React from "react";
import weatherApp from "../assets/portfolio/weatherApp.jpg";
import spaceScout from "../assets/portfolio/spaceScout.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: spaceScout,
      demo: "https://mellifluous-banoffee-47877b.netlify.app/",
      code: "https://github.com/Madhur-Bakshi/mySpaceApp",
    },
    {
      id: 2,
      src: weatherApp,
      demo: "https://admirable-marigold-fefbe7.netlify.app/",
      code: "https://github.com/Madhur-Bakshi/Weather-app-using-HTML-CSS-and-JAVASCRIPT",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-12 px-12 sm:px-0 ">
          {portfolios.map(({ id, src, demo, code}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-80 w-full"
              />
              <div className="flex items-center justify-center bg-white rounded-b-lg">
                <a href = {demo} target = "_blank">

                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-xl">
                  Demo
                </button>
                </a>
                <a href = {code} target="_blank">

                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-xl">
                  Code
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
