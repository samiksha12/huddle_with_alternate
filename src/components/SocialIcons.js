import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { StyledSocialIcons } from "./styles/SocialIcons.styled";
function SocialIcons() {
  return (
    <StyledSocialIcons>
      <ul>
        <li>
          <a href="https://twitter.com" aria-label="Twitter Page">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://facebook.com" aria-label="Facebok Page">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com" aria-label="Linkedin Page">
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </StyledSocialIcons>
  );
}

export default SocialIcons;
