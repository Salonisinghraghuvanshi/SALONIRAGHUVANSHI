import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Education from './Pages/Education';
import Messege from './Pages/Messege';
import Article from './Pages/Article';
import ArticleList from './Pages/ArticleList';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'; // Global CSS


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/message" element={<Messege />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </Router>
  );
};

export default App;
