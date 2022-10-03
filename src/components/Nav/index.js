import React from "react";
// using tw elements library for navbar
import "tw-elements";

function Nav({ currentPage, handlePageChange }) {
  return (
    <header>
      <nav className="relative w-full flex flex-wrap items-center justify-between py-3 navbar navbar-expand-lg navbar-light">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between">
          {/* <!-- left elements --> */}
          <div className= "flex items-center md:hidden">
            {/* <!-- Name --> */}
            <h1 className="my-name mr-4 text-5xl hover:underline transition duration-300 ease-in-out"><a href="#home" onClick={() => handlePageChange("Home")}>CSS</a></h1>
          </div>
          
          <div className="hidden md:flex items-center">
            {/* <!-- Name --> */}
            <h1 className="my-name mr-4 text-5xl hover:underline transition duration-300 ease-in-out"><a href="#home" onClick={() => handlePageChange("Home")}>Chris Sarmiento-Salas</a></h1>
          </div>

         
          {/* <!-- left elements --> */}

          {/* <!--right elements--> */}
          <div className="text-5xl">
            <button
              className="navbar-toggler border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent1"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="bars"
                className="w-6"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                ></path>
              </svg>
            </button>
            <div
              className="collapse navbar-collapse flex-grow items-center"
              id="navbarSupportedContent1"
            >
              <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto text-center">
                <li className="nav-item p-2">
                  <a
                    className={
                      currentPage === "Home"
                        ? "nav-link underline"
                        : "underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out"
                    }
                    href="#home"
                    onClick={() => handlePageChange("Home")}
                  >
                    Home{" "}
                  </a>
                </li>
                <li className="nav-item p-2">
                  <a
                    className={
                      currentPage === "About"
                        ? "nav-link underline"
                        : "underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out"
                    }
                    href="#about"
                    onClick={() => handlePageChange("About")}
                  >
                    About
                  </a>
                </li>
                <li className="nav-item p-2">
                  <a
                    className={
                      currentPage === "Work"
                        ? "nav-link underline"
                        : "underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out"
                    }
                    href="#work"
                    onClick={() => handlePageChange("Work")}
                  >
                    Work
                  </a>
                </li>
                <li className="nav-item p-2">
                  <a
                    className={
                      currentPage === "Contact"
                        ? "nav-link underline"
                        : "underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out"
                    }
                    href="#contact"
                    onClick={() => handlePageChange("Contact")}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
