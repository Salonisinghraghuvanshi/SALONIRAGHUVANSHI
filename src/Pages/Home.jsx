import React from "react";
import Navbar from "../Components/Navbar";
import FooterBox from "../Components/Footerbox";
import Themetoggle from "../Components/Themetoggle";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css"; // Custom CSS
import Image from "../assets/bg1.png";
import ArticleList from "./ArticleList";
import ScrollBtn from "../Components/ScrollToTopButton";


const Home = () => {
  return (
    <>
    <ScrollBtn/>
      <Themetoggle />
      <Navbar />
      <div className="container-fluid main-content mt-5">
        <div className="row mx-auto d-flex justify-content-center align-item-center">
          <div className="headView">
            <div class="home-img p-3 ">
              <img
                src={Image}
                alt="Profile Image"
                class="img-fluid rounded-5 mb-3"
              />
              <div class="">
                <h5>
                  Hi, I'm <span class="highlight-b">Saloni Singh</span>
                </h5>
                <h1 class="font">
                  I make <span class="highlight-g">full-stack</span> products
                  that people <span class="highlight-p">love</span>.
                </h1>
                <p>
                  Software Engineer working as full-stack developer, Web
                  Designer, UI/UX Designer. I like music, movies, read, write,
                  and travel for fun.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-8  mx-auto">
            {/* <!-- Social Media Icons Section --> */}
            <div class="d-flex justify-content-around mb-4">
              <a
                href="https://x.com/salonising24"
                target="_blank"
                class="social-icon"
              >
                <i class="bi bi-twitter"></i>
              </a>
              <a
                href="https://github.com/Salonisinghraghuvanshi"
                target="_blank"
                class="social-icon"
              >
                <i class="bi bi-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/salonisinghraghuvanshi?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BiC%2F0YLB%2BS6ectJFFr8CWYg%3D%3D"
                target="_blank"
                class="social-icon"
              >
                <i class="bi bi-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/saloniraghuvanshi_/"
                target="_blank"
                class="social-icon"
              >
                <i class="bi bi-instagram"></i>
              </a>
              <a
                href="https://discord.com/channels/@me"
                target="_blank"
                class="social-icon"
              >
                <i class="bi bi-discord"></i>
              </a>
            </div>
            <div class="">
              <p>
                Welcome to my Page ,I'm greatfull to connect with you and,
                Exiting to develop new technology, cool site, and many more
                together so , click on the above icons to build and follow us on
                our social Media
              </p>
            </div>
            <ArticleList/>
          </div>

          <div className="col-md-4 mx-auto p-0 m-0">
            <FooterBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
