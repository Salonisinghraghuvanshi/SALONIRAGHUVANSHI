import React, { useState, useEffect } from "react";
import "../styles/ArticleList.css"; // Custom CSS
import Image1 from "../assets/html-5-svgrepo-com.svg";
import Image2 from "../assets/css-3-svgrepo-com (1).svg";
import Image3 from "../assets/js-svgrepo-com.svg";
import Image4 from "../assets/reactjs-svgrepo-com.svg";
import Image5 from "../assets/cloud-apis-svgrepo-com.svg";

const ArticleList = () => {
  const [activeCategory, setActiveCategory] = useState('latest');
  const [articleId, setArticleId] = useState(null);

  useEffect(() => {
    // Get the article ID from the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('article');
    setArticleId(id);

    // Update the active article based on the ID
    if (id) {
      document.getElementById(id)?.classList.add('active');
    }
  }, []);

  useEffect(() => {
    filterArticles(activeCategory);
  }, [activeCategory]);

  const filterArticles = (category) => {
    const articles = document.querySelectorAll('.article');
    articles.forEach((article) => {
      if (category === 'latest' || article.getAttribute('data-category') === category) {
        article.style.display = 'block';
      } else {
        article.style.display = 'none';
      }
    });
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="container-fluid my-5">
      <h4>Latest Articles</h4>
      <div className="btn-group mb-4" role="group" aria-label="Article Categories">
        <button
          type="button"
          className={`btn btn-article ${activeCategory === 'latest' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('latest')}
          data-category="latest"
        >
          Latest
        </button>
        <button
          type="button"
          className={`btn btn-article ${activeCategory === 'coding' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('coding')}
          data-category="coding"
        >
          Coding
        </button>
        <button
          type="button"
          className={`btn btn-article ${activeCategory === 'stories' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('stories')}
          data-category="stories"
        >
          Stories
        </button>
        <button
          type="button"
          className={`btn btn-article ${activeCategory === 'beginners' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('beginners')}
          data-category="beginners"
        >
          Beginners
        </button>
      </div>

      <div className="row">
        {/* Beginner Articles (HTML, CSS) */}
        <div
          className="container box-1 p-3 mb-5 rounded-3 article"
          data-category="beginners"
          id="article1"
        >
          <div className="row">
            <div className="col-3">
              <img src={Image1} className="w-100" alt="HTML Icon" />
            </div>
            <div className="col-8">
              <small className="card-text text-secondary">
                ➖ July 2, 2024 • 5 MIN READ
              </small>
              <h4>
                <a href="/article/article1" target="_blank" className="button">
                  How to learn HTML
                </a>
              </h4>
              <small>
                <p>
                  Here, You can learn how you can learn HTML in just a few steps very easily and fast.
                </p>
              </small>
              <button
                
                className="btn text-primary position-fixed bottom-0 end-0 py-0 m-1"
              >
                <h5>
                  <a href="/article/article1" target="_blank">➡️</a>
                </h5>
              </button>
            </div>
          </div>
        </div>

        <div
          className="container box-1 p-3 mb-5 rounded-3 article"
          data-category="beginners"
          id="article2"
        >
          <div className="row">
            <div className="col-3">
              <img src={Image2} alt="CSS Icon" className="w-100" />
            </div>
            <div className="col-8">
              <small className="card-text text-secondary">
                ➖ May 20, 2024 • 5 MIN READ
              </small>
              <h4>
                <a href="/article/article2" target="_blank" className="button">
                  Keep adding Styling
                </a>
              </h4>
              <small>
                <p>
                  CSS has a vast syllabus to complete but I don't think you should learn each and every property of CSS. You can learn by practice only.
                </p>
              </small>
              <button
                
                className="btn text-primary position-fixed bottom-0 end-0 py-0 m-1"
              >
                <h5>
                  <a href="/article/article2" target="_blank">➡️</a>
                </h5>
              </button>
            </div>
          </div>
        </div>

        {/* Coding Articles (JavaScript, React) */}
        <div
          className="container box-1 p-3 mb-5 rounded-3 article"
          data-category="coding"
          id="article3"
        >
          <div className="row">
            <div className="col-3">
              <img src={Image3} alt="JavaScript Icon" className="w-100" />
            </div>
            <div className="col-8">
              <small className="card-text text-secondary">
                ➖ March 2, 2024 • 5 MIN READ
              </small>
              <h4>
                <a href="/article/article3" target="_blank" className="button">
                  Start to make it work with JS
                </a>
              </h4>
              <small>
                <p>
                  JavaScript is my favorite language. Though my first language is Java, JS really helps to create an easier life as a full-stack developer.
                </p>
              </small>
              <button
                
                className="btn text-primary position-fixed bottom-0 end-0 py-0 m-1"
              >
                <h5>
                  <a href="/article/article3" target="_blank">➡️</a>
                </h5>
              </button>
            </div>
          </div>
        </div>

        <div
          className="container box-1 p-3 mb-5 rounded-3 article"
          data-category="coding"
          id="article4"
        >
          <div className="row">
            <div className="col-3">
              <img src={Image4} alt="React Icon" className="w-100" />
            </div>
            <div className="col-8">
              <small className="card-text text-secondary">
                ➖ Jan 12, 2024 • 5 MIN READ
              </small>
              <h4>
                <a href="/article/article4" target="_blank" className="button">
                  Let's Start Creating dynamic Sites with React
                </a>
              </h4>
              <small>
                <p>
                  Come with me if you just started your journey as a frontend developer with ReactJS. In the beginning, learning React might seem hard, but believe me, it's not that difficult.
                </p>
              </small>
              <button
                
                className="btn text-primary position-fixed bottom-0 end-0 py-0 m-1"
              >
                <h5>
                  <a href="/article/article4" target="_blank">➡️</a>
                </h5>
              </button>
            </div>
          </div>
        </div>

        {/* Stories Articles (AI) */}
        <div
          className="container box-1 p-3 mb-5 rounded-3 article"
          data-category="stories"
          id="article5"
        >
          <div className="row">
            <div className="col-3">
              <img src={Image5} alt="AI Icon" className="w-100" />
            </div>
            <div className="col-8">
              <small className="card-text text-secondary">
                ➖ August 1, 2024 • 5 MIN READ
              </small>
              <h4>
                <a href="/article/article5" target="_blank" className="button">
                  How AI controls our minds
                </a>
              </h4>
              <small>
                <p>
                  CSS has a vast syllabus to complete but I don't think you should learn each and every property of CSS. You can learn by practice only.
                </p>
              </small>
              <button
                
                className="btn text-primary position-fixed bottom-0 end-0 py-0 m-1"
              >
                <h5>
                  <a href="/article/article5" target="_blank">➡️</a>
                </h5>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
