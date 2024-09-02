import React from 'react';
import '../styles/FooterBox.css'; // Create a separate CSS file for FooterBox styles
import file from '../assets/Resume.pdf';

const FooterBox = () => {
  return (
    <div className="footer-boxes p-3">
      <div className="container box-1 p-4 mb-5 rounded-3">
        <span className="d-flex">
          <h1>👋</h1>
          <span className="fs-6 text-secondary">Thanks for visiting my site!</span>
        </span>
        <h4>Glad to have you here.</h4>
        <small><a href="/message" className="text-primary">Leave a Message on my inbox →</a></small><br />
        <small><a href="mailto:salonisinghraghuvanshi@gmail.com" className="text-primary">send an email →</a></small>
      </div>
      <div className="container text-center box-2 p-4 mb-5 rounded-3">
        <h4>📁 My Resume</h4>
        <span className="text-primary">Click from here →</span><br />
        <a className="btn btn-col px-4 m-2" href={file} download="">
          Download
        </a>
      </div>
    </div>
  );
};

export default FooterBox;
