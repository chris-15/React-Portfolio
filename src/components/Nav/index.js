import React from "react";

function Nav({ currentPage, handlePageChange }) {
  return (
    <header className="flex items-center justify-between">
      <h2>Chris Sarmiento-Salas</h2>
      <nav>
      <ul className="flex pl-0 list-style-none">
      <li className="p-2">
        <a
          className={currentPage === "Home" ? "underline": "underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out"}
          href="#home"
          onClick={() => handlePageChange("Home")}
        >
          Home
        </a>
      </li>
      <li className="p-2">
        <a
          className={currentPage === "About" ? "underline": "underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out"}
          href="#about"
          onClick={() => handlePageChange("About")}
        >
          About
        </a>
      </li>
      <li className="p-2">
        <a
          className={currentPage === "Work" ? "underline": "underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out"}
          href="#work"
          onClick={() => handlePageChange("Work")}
        >
          Work
        </a>
      </li>
      <li className="p-2">
        <a
          className={currentPage === "Conatact" ? "underline" : "underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out"}
          href="#contact"
          onClick={() => handlePageChange("Contact")}
        >
          Contact
        </a>
      </li>
    </ul>
      </nav>
    </header>
  );
}

export default Nav;
