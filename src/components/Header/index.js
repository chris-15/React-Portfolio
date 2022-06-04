import { render } from "@testing-library/react";
import React, { useState } from "react";
import Home from '../Home';
import About from "../About";
import Contact from "../Contact";
import Footer from "../Footer";
import Nav from "../Nav";
import Projects from "../Projects";

function Portfolio() {
  const [currentPage, setCurrentPage] = useState("About");

  function renderPage() {
    if (currentPage === "Home") {
        return <Home />
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    return <Contact /> 
  };

  const handlePageChange = (page) => setCurrentPage(page)

  return (
      <div>

          <Nav currentPage={currentPage} handlePageChange={handlePageChange} />

          {renderPage()}
      </div>
  )
}

export default Portfolio;
