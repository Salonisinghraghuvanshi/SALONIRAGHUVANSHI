import React from "react";
import Navbar from "../Components/Navbar";
import FooterBox from "../Components/Footerbox";
import Themetoggle from "../Components/Themetoggle";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Projects.css"; // Custom CSS
import Image1 from "../assets/FoodLogo.png";
import Image2 from "../assets/bg3.png";
import Image3 from "../assets/logo (2).png";
import Image4 from "../assets/snakeLogo.png";
import Image5 from "../assets/bank.png";
import Image6 from "../assets/logo.png";
import ScrollBtn from "../Components/ScrollToTopButton";

const Home = () => {
  return (
    <>
      <ScrollBtn />
      <Themetoggle />
      <Navbar />
      <div className="container-fluid main-content mt-5 pt-5">
        <div className="row ">

          <div class="col-md-8 p-3">
            <h1 class="text-center mb-5 "> Some of cool stuff I've built</h1>
            {/* <!-- //Some box content --> */}

            <div class="container">

              {/* <!-- //New Project --> */}
              <div class="container  box-1 p-3 mb-5 rounded-3">
                <span class="d-flex justify-content-between">
                  <img src={Image6} alt="" class="img-fluid Image" />
                  <span
                  ><small class=" button-1 p-1 px-2 rounded-5">Open Source</small></span
                  ></span
                >
                <h4><a href="https://github.com/Salonisinghraghuvanshi/MyGemini" target="_blank" class="text"> MineGemini</a></h4>
                <p class=" mb-2 "> <small class="highlight-y "><span class="text-warning fw-bold">Usage : </span> API Integration, ReactJs, HTML, CSS, JavaScript</small></p>
                <small class=""><p>The Gemini webpage project uses React to integrate the Gemini API, providing real-time cryptocurrency data such as market prices and trading volumes. With a dynamic, responsive interface, users can easily monitor trends and manage crypto assets. React's component structure ensures scalability and efficient updates. This project effectively combines Gemini’s financial data with a modern web design, delivering a seamless and user-friendly experience for cryptocurrency tracking and trading.
                </p></small>
                <button

                  class="btn text-primary  position-fixed bottom-0 end-0 py-0 m-1"
                >
                  <h5><a href="https://github.com/Salonisinghraghuvanshi/MyGemini" target="_blank">➡️</a></h5>
                </button>
              </div>
              {/* <!-- //First Project --> */}
              <div class="container  box-1 p-3 mb-5 rounded-3">
                <span class="d-flex justify-content-between">
                  <img src={Image1} alt="" class="img-fluid Image" />
                  <span
                  ><small class=" button-1 p-1 px-2 rounded-5">Open Source</small></span
                  ></span
                >
                <h4><a href="https://github.com/Salonisinghraghuvanshi/Food-Inspector/tree/master" target="_blank" class="text"> Food Inspector API</a></h4>
                <p class=" mb-2 "> <small class="highlight-y "><span class="text-warning fw-bold">Usage : </span> API fetch, HTML, TailwindCSS, JavaScript</small></p>
                <small class=""><p>The Food Inspector API provides detailed information about food
                  ingredients, ideal for cooks, nutritionists, and individuals. By entering
                  an ingredient name, users can determine if it is healthy or unhealthy
                  through descriptions, categories, and usage insights.
                </p></small>
                <button

                  class="btn text-primary  position-fixed bottom-0 end-0 py-0 m-1"
                >
                  <h5><a href="https://salonisinghraghuvanshi.github.io/Food-Inspector/" target="_blank">➡️</a></h5>
                </button>
              </div>
              {/* <!-- //Second Project --> */}
              <div class="container box-2 p-3 mb-5 rounded-3">
                <span class="d-flex justify-content-between">
                  <img src={Image2} alt="" class="mb-3" width="20%" />
                  <span
                  ><small class=" button-1 p-1 px-2 rounded-5">Open Source</small></span
                  ></span
                >
                <h4><a href="https://github.com/rahuldurgapal/College-Project" target="_blank" class="text">College Website</a></h4>
                <p class=" mb-2"> <small class="highlight-y "><span class="text-warning fw-bold">Usage : </span> HTML, CSS, Js, PHP, JQuery, MySQL, APIs</small></p>
                <small class=""><p>This is a group project where I did frontend work like designing &
                  Coding Explore. Explore is an unofficial website for our college only for
                  students where they get all information about subjects, syllabus,
                  previous year papers and notes and a bit of guidance for the future.
                </p></small>
                <button

                  class="btn text-primary  position-fixed bottom-0 end-0 py-0 m-1"
                >
                  <h5> <a href="https://explorise.000webhostapp.com/index.php" target="_blank">➡️</a></h5>
                </button>
              </div>
              {/* <!-- //Third Project --> */}
              <div class="container box-1 p-3 mb-5 rounded-3">
                <span class="d-flex justify-content-between">
                  <img src={Image3} alt="" class="img-fluid Image" />
                  <span
                  ><small class=" button-1 p-1 px-2 rounded-5">Open Source</small></span
                  ></span
                >
                <h4><a href="https://github.com/Salonisinghraghuvanshi/DFB.com" target="_blank" class="text">FormBuilder.com</a></h4>
                <p class=" mb-2 "> <small class="highlight-y "><span class="text-warning fw-bold">Usage : </span>ReactJs, HTML, CSS, JS, Bootstrap</small></p>
                <small class=""><p>This form builder project empowers users to easily create customized forms by dragging and dropping elements, making it simple for non-developers to design forms tailored to their needs. It enhances user productivity by offering an intuitive interface for form customization, without requiring coding skills.</p></small>
                <button

                  class="btn text-primary  position-fixed bottom-0 end-0 py-0 m-1"
                >
                  <h5> <a href="https://dfb-com.vercel.app/" target="_blank">➡️</a></h5>
                </button>
              </div>
              {/* <!-- //Forth Project --> */}
              <div class="container box-2 p-3 mb-5 rounded-3">
                <span class="d-flex justify-content-between">
                  <img src={Image4} alt="" class="img-fluid rounded-3 Image" />
                  <span
                  ><small class=" button-1 p-1 px-2 rounded-5">Open Source</small></span
                  ></span
                >
                <h4><a href="https://github.com/Salonisinghraghuvanshi/snakeGame" target="_blank" class="text">Snake Game</a></h4>
                <p class=" mb-2"><small class="highlight-y"><span class="text-warning fw-bold">Usage : </span> Based on java</small></p>
                <small class=""><p>Created a fun desktop game where players control a growing snake,
                  showcasing Java coding skills & offering a nostalgic gaming experience.
                </p></small>
                <button

                  class="btn text-primary  position-fixed bottom-0 end-0 py-0 m-1"
                >
                  <h5> <a href="https://github.com/Salonisinghraghuvanshi/snakeGamehttps://explorise.000webhostapp.com/index.php" target="_blank">➡️</a></h5>
                </button>
              </div>
              {/* <!-- //Fifth Project --> */}
              <div class="container box-1 p-3 mb-5 rounded-3">
                <span class="d-flex justify-content-between">
                  <img src={Image5} alt="" class="img-fluid Image" />
                  <span
                  ><small class=" button-1 p-1 px-2 rounded-5">Open Source</small></span
                  ></span
                >
                <h4><a href="https://github.com/Salonisinghraghuvanshi/Bank-Management-System" target="_blank" class="text">Banking Management System</a></h4>
                <p class=" mb-2"><small class="highlight-y"><span class="text-warning fw-bold">Usage : </span>java , Java string , JDBC, </small></p>
                <small class=""><p>This Bank Management System project streamlines the management of customer accounts, transactions, and banking operations, offering a user-friendly interface for efficient banking services. It simplifies tasks like account creation, deposits, withdrawals, and balance inquiries, enhancing the overall banking experience for users.</p></small>
                <button

                  class="btn text-primary  position-fixed bottom-0 end-0 py-0 m-1"
                >
                  <h5> <a href="https://github.com/Salonisinghraghuvanshi/Bank-Management-System" target="_blank">➡️</a></h5>
                </button>
              </div>

            </div>

          </div>

          <div className="col-md-4 p-2 pt-5 mt-2 m-0">
            <FooterBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
