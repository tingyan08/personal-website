import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faResearchgate, faGoogleScholar, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
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
      <p>A portfolio is designed & built based on the template provided by <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a></p>
    </footer>
  );
}

export default Footer;