import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import FooterBox from "../Components/Footerbox";
import "../styles/Article.css"; // Custom CSS
import Image1 from "../assets/html-5-svgrepo-com.svg";
import Image2 from "../assets/css-3-svgrepo-com (1).svg";
import Image3 from "../assets/js-svgrepo-com.svg";
import Image4 from "../assets/reactjs-svgrepo-com.svg";
import Image5 from "../assets/cloud-apis-svgrepo-com.svg";
import Article1 from "../Components/Article1";
import Article2 from "../Components/Article2";
import Article3 from "../Components/Article3";
import Article4 from "../Components/Article4";
import Article5 from "../Components/Article5";
import ThemeToggle from "../Components/Themetoggle";
import ScrollBtn from "../Components/ScrollToTopButton";
import ArticleList from "../Pages/ArticleList"

const Article = () => {
  const { id: articleId } = useParams(); // Get the route parameter

  const articles = {
    article1: {
      title: "How to Learn HTML: A Comprehensive Guide for Beginners",
      image: Image1,
      content: (
        <Article1/>
      ),
    },
    article2: {
      title: "How to Learn CSS: A Comprehensive Guide for Beginners",
      image: Image2,
      content: (
        <Article2/>
      ),
    },
    article3: {
      title: "Start to Make It Work with JavaScript Learning",
      image: Image3,
      content: (
      <Article3/>
      ),
    },
    article4: {
      title: "Let's Start Creating Dynamic Sites with React",
      image: Image4,
      content: (
        <Article4/>
      ),
    },
    article5: {
      title: "How AI Controls Our Mind",
      image: Image5,
      content: (
       <Article5/>
      ),
    },
  };

  const article = articles[articleId]; // Get the selected article

  if (!article) {
    return <div>Article not found</div>; // Handle case where articleId doesn't match any article
  }

  return (
    <div>
      <ScrollBtn/>
      <ThemeToggle/>
      <Navbar />
      <div className="container-fluid main-content">
        <div className="row">
          <div className="col-md-7 p-4">
            <div className="container article-detail">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-6 d-flex justify-content-start align-items-center">
                    <Link to="/">
                      <i className="bi bi-arrow-left back-arrow"></i>
                    </Link>
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="img-fluid w-50"
                    />
                  </div>
                </div>
              </div>
              <h1>{article.title}</h1>
              {article.content}
            <h4 className="button mt-5  lead highlight-g p-2">Checkout all the Latest Article from here <i className="bi bi-arrow-down back-arrow"></i></h4>
            </div>
            <ArticleList />
          </div>
          <div className="col-md-5 mt-5 pt-2 mb-5">
            <FooterBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;

