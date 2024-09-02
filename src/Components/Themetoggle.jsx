import React, { useState } from "react";
import "../styles/ThemeToggle.css";

const ThemeToggle = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    document.body.classList.toggle("light-mode");
  };

  return (
    <div className="container-fluid header">
      <div className="d-flex justify-content-between justify-content-md-end">
        <button
          id="theme-toggle"
          className="btn btn-light m-1"
          onClick={toggleTheme}
        >
          {isLightMode ? "🌞" : "🌙"}
        </button>
        <div className="dropdown">
          <button id="sign-in" className="btn btn-col py-0 m-3 ms-lg-2">
            Let's Connect
          </button>
          <div className="dropdown-content">
            <a
              href="https://x.com/salonising24"
              target="_blank"
              className="social-icon p-1 m-0"
              rel="noopener noreferrer"
            >
              <i className="bi bi-twitter p-1 m-0"></i>
            </a>
            <a
              href="https://github.com/Salonisinghraghuvanshi"
              target="_blank"
              className="social-icon p-1 m-0"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github p-1 m-0"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/salonisinghraghuvanshi"
              target="_blank"
              className="social-icon p-1 m-0"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin p-1 m-0"></i>
            </a>
            <a
              href="https://www.instagram.com/saloniraghuvanshi_/"
              target="_blank"
              className="social-icon p-1 m-0"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram p-1 m-0"></i>
            </a>
            <a
              href="https://discord.com/channels/@me"
              target="_blank"
              className="social-icon p-1 m-0"
              rel="noopener noreferrer"
            >
              <i className="bi bi-discord p-1 m-0 "></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
