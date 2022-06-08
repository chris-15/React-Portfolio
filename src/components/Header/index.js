import React, { useState } from "react";
import Home from '../Home';
import About from "../About";
import Contact from "../Contact";
import Footer from "../Footer";
import Nav from "../Nav";
import Projects from "../Projects";

function Header() {
  const [currentPage, setCurrentPage] = useState("Home");

  function renderPage() {
    if (currentPage === "Home") {
        return <Home />
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Work") {
      return <Projects />;
    }
    return <Contact /> 
  };

  const handlePageChange = (page) => setCurrentPage(page)

  return (
      <div>

          <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
          <main>
            {renderPage()}
          </main>
          <Footer></Footer>
      </div>
  )
}

export default Header;
