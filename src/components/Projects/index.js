import React from "react";
import AllStarProfiles from "../../assets/images/AllstarProfiles.png";
import NutritionHelper from "../../assets/images/NutritionHelper.png";
import RentAFit from "../../assets/images/rent-a-fit.png"
import WeatherDashboard from "../../assets/images/WeatherDashboard.png";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
// using tw elements library for carousel
import "tw-elements";

function Projects() {
  return (
    <section className="py-16">
      <h1 className="text-5xl flex justify-center">
        View Some of My Latest Work
      </h1>
      <div
        id="carouselDarkVariant"
        className="carousel slide carousel-fade carousel-dark relative py-4"
        data-bs-ride="carousel"
      >
        {/* <!-- Indicators --> */}
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="1"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="2"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="3"
            aria-label="Slide 1"
          ></button>
        </div>

        {/* <!-- Inner --> */}
        <div className="carousel-inner relative w-full overflow-hidden">

          {/* <!-- Single item --> */}
          <div className="carousel-item relative float-left w-full">
            <img
              src={RentAFit}
              className="block w-full"
              alt="Rent-a-fit Screenshot"
            />
            <div className="carousel-caption md:block absolute text-center text-6xl">
              <div className="flex justify-center text-white">
                <a href="https://afternoon-forest-49656.herokuapp.com/" target="_blank" rel="noreferrer noopener"><FaExternalLinkAlt className="bg-black hover:bg-blue-500 p-2 mr-4" /></a>
                <a href="https://github.com/chris-15/Rent-A-Fit-Project3" target="_blank" rel="noreferrer noopener"><FaGithub className="bg-black hover:bg-blue-500 p-2" /></a>
              </div>
            </div>
          </div>

          {/*  <!-- Single item --> */}
          <div className="carousel-item active relative float-left w-full">
            <img
              src={AllStarProfiles}
              className="block w-full"
              alt="AllStar Profiles Screenshot"
            />
            <div className="carousel-caption md:block absolute text-center text-6xl">
              <div className="flex justify-center text-white">
                <a href="https://infinite-taiga-75694.herokuapp.com/" target="_blank" rel="noreferrer noopener"><FaExternalLinkAlt className="bg-black hover:bg-blue-500 p-2 mr-4" /></a>
                <a href="https://github.com/chris-15/All-Star-Profiles-Project2" target="_blank" rel="noreferrer noopener"><FaGithub className="bg-black hover:bg-blue-500 p-2" /></a>
              </div>
            </div>
          </div>

          {/* <!-- Single item --> */}
          <div className="carousel-item relative float-left w-full">
            <img
              src={NutritionHelper}
              className="block w-full"
              alt="Nutrition Helper Screenshot"
            />
            <div className="carousel-caption md:block absolute text-center text-6xl">
              <div className="flex justify-center text-white">
                <a href="https://chris-15.github.io/Nutrition-Helper-Project1/" target="_blank" rel="noreferrer noopener"><FaExternalLinkAlt className="bg-black hover:bg-blue-500 p-2 mr-4" /></a>
                <a href="https://github.com/chris-15/Nutrition-Helper-Project1" target="_blank" rel="noreferrer noopener"><FaGithub className="bg-black hover:bg-blue-500 p-2" /></a>
              </div>
            </div>
          </div>

          {/* <!-- Single item --> */}
          <div className="carousel-item relative float-left w-full">
            <img
              src={WeatherDashboard}
              className="block w-full"
              alt="Weather Dashboard Screenshot"
            />
             <div className="carousel-caption md:block absolute text-center text-6xl">
              <div className="flex justify-center text-white">
                <a href="https://chris-15.github.io/Weather-Dashboard-Weekly-Challenge6/" target="_blank" rel="noreferrer noopener"><FaExternalLinkAlt className="bg-black hover:bg-blue-500 p-2 mr-4" /></a>
                <a href="https://github.com/chris-15/Weather-Dashboard-Weekly-Challenge6" target="_blank" rel="noreferrer noopener"><FaGithub className="bg-black hover:bg-blue-500 p-2" /></a>
              </div>
            </div>
          </div>
          
        </div>
        {/* <!-- Inner --> */}

        {/*  <!-- Controls --> */}
        <button
          className="font-black carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Projects;
