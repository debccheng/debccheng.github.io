import React, { useState } from 'react';
import './App.css';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

function App() {
  const [currentPage, setcurrentPage] = useState("");
  const handleClick = (e) => {
    const elementId = e.target.id;
    setcurrentPage(elementId);
  }

  return (
    <div className="App">
      <header>
        <div className="title">
          <h1 className="title-text focus-in-contract">Debbie Cheng</h1>
        </div>
        <nav className="navbar">
          <li className="list-items">
            <ul>
              <button
                className={
                  `nav-button hvr-shutter-out-vertical
                  ${currentPage === "about" ? "currentPage" : null}`
                }
                id="about"
                onClick={(e) => handleClick(e)}
              >
                About
              </button>
            </ul>
            <ul>
              <button
                className={
                  `nav-button hvr-shutter-out-vertical
                  ${currentPage === "portfolio" ? "currentPage" : null}`
                }
                id="portfolio"
                onClick={(e) => handleClick(e)}
              >
                Portfolio
              </button>
            </ul>
            <ul>
              <button
                className={
                  `nav-button hvr-shutter-out-vertical
                  ${currentPage === "contact" ? "currentPage" : null}`
                }
                id="contact"
                onClick={(e) => handleClick(e)}
              >
                Contact
              </button>
            </ul>
          </li>
        </nav>
      </header>
      <main>
        {currentPage === "about" && <About />}
        {currentPage === "portfolio" && <Portfolio />}
      </main>
    </div>
  );
}

export default App;
