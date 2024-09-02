import React from "react";
import Navbar from "../Components/Navbar";
import FooterBox from "../Components/Footerbox";
import Themetoggle from "../Components/Themetoggle";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Education.css"; // Custom CSS
import Image1 from "../assets/a.png";
import Image2 from "../assets/m.png";
import Image3 from "../assets/u.png";
import Image4 from "../assets/i.png";
import ScrollBtn from "../Components/ScrollToTopButton";

const Home = () => {
  return (
    <>
      <ScrollBtn />
      <Themetoggle />
      <Navbar />
      <div className="container-fluid main-content mt-5 ">
        <div className="row ">
          <div class="col-md-8 p-4">
            <h1>My Resume</h1>

            <h4 class="mt-4">Education</h4>
            <div class="container my-4 p-2">
              <div class="row  timeline">
                <div class="col-2 ">
                  <img src={Image1} alt="" class="img-fluid " />
                </div>
                <div class="col-10">
                  <span class="fs-6 text-secondary">
                    August. 2022 - July. 2024
                  </span>
                  <h5>Master in Computer Application (MCA)</h5>
                  <span class="lead fs-6 text-warning">
                    Dr. APJ Abdul Kalam Technichal University, Lucknow UP
                  </span>
                  <p>
                    {" "}
                    <span class="fs-6 text-secondary">-75%</span>
                    <br />
                    Software Engeenier, Web developer, Web Designer, UI/UX
                    Designer, Artist, and Master's Student. I play, read, write,
                    and travel for fun. Artist, and Master's Student. I play,
                    read, write, and travel for fun.
                  </p>
                </div>
              </div>
              <div class="row  timeline">
                <div class="col-2">
                  <img src={Image2} alt="" class="img-fluid p-1" />
                </div>
                <div class="col-10">
                  <span class="fs-6 text-secondary">
                    August. 2019 - April. 2022
                  </span>
                  <h5>Bachelor in Computer Science (B.Sc. IT)</h5>
                  <span class="lead fs-6 text-warning">
                    Mahatma Ghandhi Kashi Vidyapeeth, Varanasi UP
                  </span>
                  <p>
                    {" "}
                    <span class="fs-6 text-secondary">-75%</span>
                    <br />
                    Software Engeenier, Web developer, Web Designer, UI/UX
                    Designer, Artist, and Master's Student. I play, read, write,
                    and travel for fun. Artist, and Master's Student. I play,
                    read, write, and travel for fun.
                  </p>
                </div>
              </div>
              <div class="row  timeline">
                <div class="col-2">
                  <img src={Image3} alt="" class="img-fluid p-1" />
                </div>
                <div class="col-10">
                  <span class="fs-6 text-secondary">
                    April. 2017 - May 2019. 2024
                  </span>
                  <h5>Intermediate</h5>
                  <span class="lead fs-6 text-warning">
                    BSSIC Hathiar UP Board Varanasi
                  </span>
                  <p>
                    <span class="fs-6 text-secondary">-71%</span>
                    <br />
                    Software Engeenier, Web developer, Web Designer, UI/UX
                    Designer, Artist, and Master's Student. I play, read, write,
                    and travel for fun. Artist, and Master's Student. I play,
                    read, write, and travel for fun.
                  </p>
                </div>
              </div>
              <div class="row  timeline">
                <div class="col-2">
                  <img src={Image3} alt="" class="img-fluid p-1" />
                </div>
                <div class="col-10">
                  <span class="fs-6 text-secondary">
                    April. 2015 - June. 2017
                  </span>
                  <h5>Highschool</h5>
                  <span class="lead fs-6 text-warning">
                    BSSIC Hathiar UP Board Varanasi
                  </span>
                  <p>
                    <span class="fs-6 text-secondary">-86%</span> <br />
                    Software Engeenier, Web developer, Web Designer, UI/UX
                    Designer, Artist, and Master's Student. I play, read, write,
                    and travel for fun. Artist, and Master's Student. I play,
                    read, write, and travel for fun.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- //Experiences --> */}

            <div class="container my-5">
              <h4 class="mb-5">Experience</h4>
              <div class="row">
                <div class="col-2">
                  <img src={Image4} alt="" class="img-fluid" />
                </div>
                <div class="col-10">
                  <span class="fs-6 text-secondary">
                    JAN. 2024 - June. 2024
                  </span>
                  <h5>Fontend Developer as a Junior Web Designer</h5>
                  <span class="fs-6 text-secondary">Internship</span>
                  <br />
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

          <div className="col-md-4 p-2 pt-3 mt-5 ">
            <div className="container p-4">
            {/* <!-- Technical skills --> */}
            <div class="container box-1 p-4 mx-auto mb-5 rounded-3">
              <h4>Technichal Skills</h4>
              <ul>
                <li class="list-unstyled py-1">
                  {" "}
                  <span class="">➖</span> C Langauge
                </li>
                <li class="list-unstyled py-1">
                  {" "}
                  <span class="">➖</span> C++
                </li>
                <li class="list-unstyled py-1">
                  {" "}
                  <span class="">➖</span> Python
                </li>
                <li class="list-unstyled py-1">
                  {" "}
                  <span class="">➖</span> Java
                </li>
                <li class="list-unstyled py-1">
                  {" "}
                  <span class="">➖</span> HTML
                </li>
                <li class="list-unstyled py-1">
                  {" "}
                  <span class="">➖</span> CSS
                </li>
                <li class="list-unstyled py-1">
                  {" "}
                  <span class="">➖</span> Tailwind CSS
                </li>
                <li class="list-unstyled py-1">
                  {" "}
                  <span class="">➖</span> Bootstrap
                </li>
                <li class="list-unstyled py-1">
                  {" "}
                  <span class="">➖</span> JavaScript
                </li>
                <li class="list-unstyled py-1">
                  {" "}
                  <span class="">➖</span> ReactJs
                </li>
                <li class="list-unstyled py-1">
                  {" "}
                  <span class="">➖</span> UI/UX
                </li>
                <li class="list-unstyled py-1">
                  {" "}
                  <span class="">➖</span> MySQL
                </li>
                <li class="list-unstyled py-1">
                  {" "}
                  <span class="">➖</span> Oracle
                </li>
                <li class="list-unstyled py-1">
                  {" "}
                  <span class="">➖</span> OOPS
                </li>
                <li class="list-unstyled py-1">
                  {" "}
                  <span class="">➖</span> Data Structure & algorithms
                </li>
                <li class="list-unstyled py-1">
                  {" "}
                  <span class="">➖</span> Linux
                </li>
                <li class="list-unstyled py-1">
                  {" "}
                  <span class="">➖</span> Spring
                </li>
              </ul>
            </div>
            {/* <!-- Tools know --> */}
            <div class="container box-2 p-4 mb-5 rounded-3">
              <h4>Tools I know</h4>
              <ul>
                <li class="list-unstyled py-1">
                  {" "}
                  <span class="">➖</span> Git
                </li>
                <li class="list-unstyled py-1">
                  {" "}
                  <span class="">➖</span> GitHub
                </li>
                <li class="list-unstyled py-1">
                  {" "}
                  <span class="">➖</span> Figma
                </li>
                <li class="list-unstyled py-1">
                  {" "}
                  <span class="">➖</span> VS Code
                </li>
                <li class="list-unstyled py-1">
                  {" "}
                  <span class="">➖</span> Intelije
                </li>
              </ul>
            </div>
            {/* <!-- Lagauges I know --> */}
            <div class="container box-1 p-4 mb-5 rounded-3">
              <h4>Langauges</h4>
              <ul>
                <li class="list-unstyled d-flex justify-content-between py-1">
                  {" "}
                  <span class="">➖ English</span> <span>🔴</span>
                </li>
                <li class="list-unstyled d-flex justify-content-between py-1">
                  {" "}
                  <span class="">➖ Hindi</span>
                  <span>🔴</span>
                </li>
              </ul>
            </div>
            </div>
            <FooterBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
