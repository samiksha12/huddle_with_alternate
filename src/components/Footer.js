import React from "react";
import SocialIcons from "./SocialIcons";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";
import { StyledOverlayDiv } from "./styles/OverlayDiv.styled";
import { Button } from "./styles/Button.styled";

function Footer() {
  return (
    <StyledFooter>
      <StyledOverlayDiv color="#003333">
        <h2>Ready to Build Your Community?</h2>
        <Button bg="#ff0099" color="#fff">
          Get Started For Free
        </Button>
      </StyledOverlayDiv>
      <Container>
        <img src="./images/logo_white.svg" alt="" />
        <Flex>
          <ul className="firstUl">
            <li className="location">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li className="phone">+1-543-123-4567</li>
            <li className="email">example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          {/* SocialIcons */}
          
        </Flex>
        <SocialIcons />
        <p>&copy; 2022 Huddle. All rights reserved</p>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
