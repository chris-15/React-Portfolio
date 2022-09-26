import React from "react";
import AllStarProfiles from "../../assets/images/AllstarProfiles.png";
import NutritionHelper from "../../assets/images/NutritionHelper.png";
import RentAFit from "../../assets/images/rent-a-fit.png";
import WeatherDashboard from "../../assets/images/WeatherDashboard.png";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
// using tw elements library for carousel
import "tw-elements";

function Projects() {
  return (
    <section className="py-16">
      <h1 className="text-5xl flex justify-center">
        View Some of My Latest Work

        <a
        href="https://github.com/chris-15"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaGithub className=" text-6xl hover:bg-blue-500 p-2" />
      </a>
      </h1>

      {/* first project */}
      <div className="project-container" id="project-container">
        <div className="project-card">
          <div className="project-image-container">
            <img src={RentAFit} className="" alt="Rent-A-Fit Screenshot" />
          </div>
          <div className="project-info">
            <p>
              A MERN stack single page application where users can post clothing
              items that they would like other people to rent or search for
              items that they would like to rent themselves.
            </p>
            <div className="flex justify-center">
              <a
                href="https://afternoon-forest-49656.herokuapp.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaExternalLinkAlt className= "text-6xl bg-black hover:bg-blue-500 p-2 mr-4" />
              </a>
              <a
                href="https://github.com/chris-15/Rent-A-Fit"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithub className="text-6xl bg-black hover:bg-blue-500 p-2" />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* second project */}
      <div className="project-container" id="project-container">
        <div className="project-card">
          <div className="project-image-container">
            <img src={AllStarProfiles} className="" alt="AllStarProfiles Screenshot" />
          </div>
          <div className="project-info">
            <p>
              An MVC style web application where users can post their sports highlights to share with the world to gain exposure.
            </p>
            <div className="flex justify-center">
              <a
                href="https://infinite-taiga-75694.herokuapp.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaExternalLinkAlt className= "text-6xl bg-black hover:bg-blue-500 p-2 mr-4" />
              </a>
              <a
                href="https://github.com/chris-15/All-Star-Profiles"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithub className="text-6xl bg-black hover:bg-blue-500 p-2" />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* third project */}
      <div className="project-container" id="project-container">
        <div className="project-card">
          <div className="project-image-container">
            <img src={NutritionHelper} className="" alt="AllStarProfiles Screenshot" />
          </div>
          <div className="project-info">
            <p>
              A web application where users can search for nutritional food information and search by zipcode for locations to purchase food.
            </p>
            <div className="flex justify-center">
              <a
                href="https://chris-15.github.io/Nutrition-Helper/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaExternalLinkAlt className= "text-6xl bg-black hover:bg-blue-500 p-2 mr-4" />
              </a>
              <a
                href="https://github.com/chris-15/Nutrition-Helper"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithub className="text-6xl bg-black hover:bg-blue-500 p-2" />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* fourth project */}
      <div className="project-container" id="project-container">
        <div className="project-card">
          <div className="project-image-container">
            <img src={WeatherDashboard} className="" alt="WeatherDashboard Screenshot" />
          </div>
          <div className="project-info">
            <p>
              A weather dashboard web application where users can search fo the weather information of their favorite city.
            </p>
            <div className="flex justify-center">
              <a
                href="https://chris-15.github.io/Weather-Dashboard/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaExternalLinkAlt className= "text-6xl bg-black hover:bg-blue-500 p-2 mr-4" />
              </a>
              <a
                href="https://github.com/chris-15/Weather-Dashboard"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithub className="text-6xl bg-black hover:bg-blue-500 p-2" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
