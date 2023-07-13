import React from "react";
import weather from "../assets/portfolio/weather.PNG";
import vitanimationclub from "../assets/portfolio/vitanimationclub.PNG";
import github from "../assets/portfolio/githubAgain.PNG";
import loancalculator from "../assets/portfolio/loancalculatorAgaub.PNG";
import tasklist from "../assets/portfolio/tasklist.PNG";
import lucky from "../assets/portfolio/lucky.PNG";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: github,
      title : "Github Finder",
      link: "https://gitshit.netlify.app/",
      code: "https://github.com/sunnyjain15699/GitShit"
    },
    {
      id: 2,
      src: loancalculator,
      title : "Loan Calculator",
      link: "https://loaaner.netlify.app/"
    },
    {
      id: 3,
      src: tasklist,
      title : "Task List",
      link: "https://taskie.netlify.app/",
      code:"https://github.com/sunnyjain15699/Taskie"
    },
    {
      id: 4,
      src: weather,
      title : "Check Weather",
      link : "https://the-weather-app-open-api.netlify.app/",
      code: "https://github.com/sunnyjain15699/LoanCalculator"
    },
    {
      id: 5,
      src: vitanimationclub,
      title : "VIT Animation Club",
      link: "https://vitanimationclub.netlify.com/",
      code: "https://github.com/sunnyjain15699"
    },
    {
      id: 6,
      src: lucky,
      title : "Are you Lucky ?",
      link : "https://chance.netlify.app/",
      code: "https://github.com/sunnyjain15699"
    },
  ];

  return (

    <div
      name="portfolio"
      className="py-10 bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen my-100"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full my-100">
        <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">These some of the mini-javascript / UI projects :</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 my-100">
          {portfolios.map(({ id, src, title, link, code }) => (
            <div key={id} className="pb-4 shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className="py-3 flex justify-center items-center">{title}</p>
              <div className="flex items-center justify-center">
                <a href={link}  rel="noreferrer" target="_blank">
                  <button className="w-1/2 px-3 py-1 m-2 duration-200 hover:scale-105 ">
                    Demo
                  </button>
                </a>
                <a href={code}  rel="noreferrer" target="_blank">
                <button className="w-1/2 px-3 py-1 m-2 duration-200 hover:scale-105">
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
