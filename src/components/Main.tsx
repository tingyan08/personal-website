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
          <p style={{ marginBottom: '20px' }}>
            I am currently a Ph.D. student in the <a href="https://engineering.purdue.edu/CCE" target="_blank" rel="noreferrer">Lyles School of Civil and Construction Engineering</a> at <a href="https://www.purdue.edu" target="_blank" rel="noreferrer">Purdue University</a>, 
            where I work in <a href="https://web.ics.purdue.edu/~jahansha/" target="_blank" rel="noreferrer">Smart Informatix Laboratory</a> held by <a href="https://scholar.google.com/citations?user=rDHdOQIAAAAJ&hl=en&oi=ao" target="_blank" rel="noreferrer">Dr. Mohammad R. Jahanshahi</a>. 
            My research interests lie at the intersection of artificial intelligence and civil infrastructure, 
            specifically focusing on computer vision, deep learning, generative AI, and structural health monitoring.
          </p>

          <p >
            Prior to joining Purdue, I served as a Research Assistant in the Marce Lab at <a href="https://www.ntu.edu.tw" target="_blank" rel="noreferrer">National Taiwan University (NTU)</a>. 
            I received my M.S. degree from the Computer-Aided Engineering Division at NTU, under the supervision of <a href="https://scholar.google.com/citations?user=jkEbHUEAAAAJ&hl=en&oi=ao" target="_blank" rel="noreferrer">Dr. Rih-Teng Wu</a>.
          </p>

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