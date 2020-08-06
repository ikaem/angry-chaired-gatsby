// footer.component.tsx

import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
  return (
    <FooterStyled className="main-footer">
      <div className="main-footer__logo-container">
        <h1 className="logo-container__logo-footer-actual">Angry Chaired</h1>
        <div className="logo-container__emblem-footer-actual"></div>
      </div>
      <ul className="main-footer__social-links">
        <li className="social-links__link">
          <a href="#">
            <FontAwesomeIcon icon={["fab", "facebook-square"]} />
          </a>
        </li>
        <li className="social-links__link">
          <a href="#">
            <FontAwesomeIcon icon={["fab", "twitter-square"]} />
          </a>
        </li>
        <li className="social-links__link">
          <a href="#">
            <FontAwesomeIcon icon="envelope-square" />
          </a>
        </li>
      </ul>
    </FooterStyled>
  )
}

export default Footer

const FooterStyled = styled.footer`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--smudgedblue);
  padding: 0.5rem 1rem;

  .main-footer__logo-container {
    display: flex;
    align-items: center;
  }

  .logo-container__logo-footer-actual {
    font-family: "Playfair Display SC", serif;
    font-size: 1rem;
    color: white;
  }

  .logo-container__emblem-footer-actual {
    height: 1rem;
    width: 1rem;
    background-color: var(--usedyellow);
    margin-left: 0.5rem;
    transform: rotateZ(1.4deg);
  }

  .main-footer__social-links {
    display: flex;
    align-items: center;
  }

  .social-links__link {
    margin-right: 0.5rem;
  }

  .social-links__link:last-of-type {
    margin-right: 0;
  }

  .social-links__link > a {
    color: var(--usedyellow);

    :hover {
      color: var(--red);
    }
  }

  @media (min-width: 40rem) {
    padding: 0.75rem 1.5rem;

    .logo-container__logo-footer-actual {
      font-size: 1.25rem;
    }

    .logo-container__emblem-footer-actual {
      height: 1.25rem;
      width: 1.25rem;
    }

    .social-links__link > a {
    font-size: 1.25rem;
  }
  }
`
