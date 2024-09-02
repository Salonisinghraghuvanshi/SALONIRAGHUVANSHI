import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/Navbar.css'; // Create a separate CSS file 
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const iconMappings = {
  "home-icon": { outline: "bi-house-heart", fill: "bi-house-heart-fill" },
  "about-icon": { outline: "bi-person", fill: "bi-person-fill" },
  "projects-icon": { outline: "bi-briefcase", fill: "bi-briefcase-fill" },
  "education-icon": { outline: "bi-book", fill: "bi-book-fill" },
  "contact-icon": { outline: "bi-send", fill: "bi-send-fill" },
};

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeIconId, setActiveIconId] = useState(null);

  useEffect(() => {
    const currentPath = location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
      const linkHref = link.getAttribute('href');
      const iconId = link.querySelector('i').id;
      if (currentPath === linkHref) {
        link.classList.add('active');
        updateIcon(iconId, true);
        setActiveIconId(iconId);
      }
    });
  }, [location]);

  const updateIcon = (iconId, isActive) => {
    const iconElement = document.getElementById(iconId);
    if (iconElement) {
      iconElement.classList.remove(isActive ? iconMappings[iconId].outline : iconMappings[iconId].fill);
      iconElement.classList.add(isActive ? iconMappings[iconId].fill : iconMappings[iconId].outline);
    }
  };

  const handleClick = (event, iconId) => {
    event.preventDefault();
    resetIcons();
    updateIcon(iconId, true);
    setActiveIconId(iconId);

    const href = event.currentTarget.getAttribute('href');
    setTimeout(() => {
      navigate(href);
    }, 150);
  };

  const resetIcons = () => {
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    for (const key in iconMappings) {
      updateIcon(key, false);
    }
  };

  return (
    <nav className=" nav-left d-flex align-items-center justify-content-center ">
      <div className="container-fluid justify-content-center navbar">
        <Link to="/" className="nav-link text-center" onClick={(e) => handleClick(e, 'home-icon')}>
          <i id="home-icon" className="bi bi-house-heart"></i>
        </Link>
        <Link to="/about" className="nav-link text-center" onClick={(e) => handleClick(e, 'about-icon')}>
          <i id="about-icon" className="bi bi-person"></i>
        </Link>
        <Link to="/projects" className="nav-link text-center" onClick={(e) => handleClick(e, 'projects-icon')}>
          <i id="projects-icon" className="bi bi-briefcase"></i>
        </Link>
        <Link to="/education" className="nav-link text-center" onClick={(e) => handleClick(e, 'education-icon')}>
          <i id="education-icon" className="bi bi-book"></i>
        </Link>
        <Link to="/message" className="nav-link text-center" onClick={(e) => handleClick(e, 'contact-icon')}>
          <i id="contact-icon" className="bi bi-send"></i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
