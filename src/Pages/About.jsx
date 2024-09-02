import React from 'react';
import Navbar from '../Components/Navbar';
import FooterBox from '../Components/Footerbox';
import Themetoggle from "../Components/Themetoggle";
import '../styles/About.css'; // Custom CSS
import Image from "../assets/Saloni.jpg";
import Image1 from "../assets/i.png";
import ScrollBtn from '../Components/ScrollToTopButton';

const About = () => {
  return (
    <>
    <ScrollBtn/>
      <Themetoggle />
      <Navbar />
      <div className="container-fluid main-content mt-5 ">
        <div className="row ">
        <div class="col-md-8 p-4">
            <h1 class="font">
              Hii I'm <a  href="https://www.instagram.com/saloniraghuvanshi_/"
              target="_blank" class="highlight-g"> @Saloni</a> 🤟<br />
            </h1>
            <h1>a Software<span class="highlight-p"> Engineer </span></h1>
            <div class="container py-4">
              <img
                src={Image}
                alt="Profile Image"
                class="img-fluid rounded-5 image p-4"
              />
            </div>
            <h4>Short bio</h4>
            <p>
             I’m an MCA student with a specialization in computer science, skilled in Java development, and adept in web technologies like HTML, CSS, and JavaScript ReactJs,API fetch database and many more. Passionate about building innovative solutions, I thrive on turning ideas into impactful projects. Always eager to learn and collaborate, I’m committed to pushing the boundaries of technology and creativity.
            </p>
            <p>
              Passionate about building innovative solutions, I thrive on turning ideas into impactful projects. Always eager to learn and collaborate, I’m committed to pushing the boundaries of technology and creativity.
            </p>
            <h4 class="mt-5">Work Experience</h4>
            <div class="container my-5">
              <div class="row">
                <div class="col-2">
                  <img src={Image1} alt="" class="img-fluid" />
                </div>
                <div class="col-10">
                  <span class="fs-6 text-secondary"
                    >JAN. 2024 - June. 2024</span
                  >
                  <h5>Fontend Developer as a Junior Web Designer</h5>
                  <span class="fs-6 text-secondary">Internship</span><br />
                  <span class="lead text-warning">Ivixia Tech Labs</span>
                  <p>
                    Software Engeenier, Web developer, Web Designer, UI/UX
                    Designer, Artist, and Master's Student. I play, read, write,
                    and travel for fun. Artist, and Master's Student. I play,
                    read, write, and travel for fun.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mx-auto mt-5 pt-3 p-2 m-0">
            <FooterBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
