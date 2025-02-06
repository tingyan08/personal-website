import React from "react";
import '../assets/styles/Main.scss';
import avatar from "../assets/images/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogleScholar, faResearchgate, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


function Main() {
  

  return (
    <div className="container" id="home">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="mailto:tingyan@caece.net" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faEnvelope} className="fa"/>
            </a>

            <a href="https://github.com/tingyan08" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} className="fa"/>
            </a>

            <a href="https://scholar.google.com.tw/citations?user=t8dhlSQAAAAJ&hl=zh-TW" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGoogleScholar} className="fa"/>
            </a>

            <a href="https://www.researchgate.net/profile/Ting-Yan-Wu" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faResearchgate} className="fa"/>
            </a>
            
            <a href="https://www.linkedin.com/in/ting-yan-wu" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="fa"/>
            </a>
          </div>
          <h1>吳亭諺 | Ting-Yan Wu</h1>
          <p>I'm a research assistant in Marce Lab at National Taiwan University in the Department of Civil Engineering. Earlier, I received my MS degree in Computer-Aided Engineering Division, Civil Engineering from NTU advised by Prof. Rih-Teng Wu. My research focuses on computer vision, deep learning, generative AI, structural health monitoring, and structural engineering.</p>

          <div className="mobile_social_icons">
            <a href="mailto:tingyan@caece.net" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faEnvelope} className="fa"/>
            </a>

            <a href="https://github.com/tingyan08" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} className="fa"/>
            </a>

            <a href="https://scholar.google.com.tw/citations?user=t8dhlSQAAAAJ&hl=zh-TW" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGoogleScholar} className="fa"/>
            </a>

            <a href="https://www.researchgate.net/profile/Ting-Yan-Wu" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faResearchgate} className="fa"/>
            </a>
            
            <a href="https://www.linkedin.com/in/ting-yan-wu" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="fa"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;