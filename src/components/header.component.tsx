// header.component.tsx

import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const Header: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false)

  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery<{ site: { siteMetadata: { title: string } } }>(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <HeaderStyled isMobileNavOpen={isMobileNavOpen} className="main-header">
      <div className="main-header__logo-container">
        <Link to="/">
          <h1 className="logo-container__logo-header-actual">{title}</h1>
        </Link>
        <div className="logo-container__emblem-header-actual"></div>
      </div>
      <nav className="main-header__navigation-desktop">
        <ul className="navigation-desktop__links">
          <li className="desktop__links-link-wrapper">
            <a target="_blank" href="https://angrychaired.wordpress.com">Blog</a>
          </li>
          <li className="desktop__links-link-wrapper">
            <Link to="/about">About</Link>
          </li>
          <li className="desktop__links-link-wrapper">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div
        className="main-header__mobile-nav-toggle"
        onClick={() => setIsMobileNavOpen(prevState => !prevState)}
      >
        <span className="mobile-nav-toggle__burger-bar"></span>
        <span className="mobile-nav-toggle__burger-bar"></span>
        <span className="mobile-nav-toggle__burger-bar"></span>
      </div>
      <nav className="main-header__navigation-mobile">
        <ul className="navigation-mobile__links">
          <li className="mobile__links-link-wrapper">
            <a target="_blank" href="https://angrychaired.wordpress.com">Blog</a>
          </li>
          <li className="mobile__links-link-wrapper">
            <Link to="/about">About</Link>
          </li>
          <li className="mobile__links-link-wrapper">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <button
          className="navigation-mobile__btn-close"
          onClick={() => setIsMobileNavOpen(prevState => !prevState)}
        >
          <span className="btn-close__label">X</span>
        </button>
      </nav>
    </HeaderStyled>
  )
}

export default Header

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: var(--touchedwhite); */
  padding: 1rem;

  .main-header__logo-container {
    display: flex;
    align-items: center;
  }

  .logo-container__logo-header-actual {
    font-family: "Playfair Display SC", serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--smudgedblue);
  }

  .logo-container__emblem-header-actual {
    height: 1.5rem;
    width: 1.5rem;
    background-color: var(--red);
    margin-left: 0.5rem;
    transform: rotateZ(1.4deg);
  }

  .main-header__navigation-desktop {
    align-items: center;
    display: none;
  }

  .navigation-desktop__links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .desktop__links-link-wrapper {
    margin-right: 1rem;
  }
  .desktop__links-link-wrapper:last-of-type {
    margin-right: 0;
  }

  .desktop__links-link-wrapper > a {
    text-transform: uppercase;
    color: var(--smudgedblue);
    vertical-align: middle;
  }

  .desktop__links-link-wrapper > a:hover {
    padding-bottom: 0.25rem;
    border-bottom: 3px solid var(--usedyellow);
  }

  .main-header__mobile-nav-toggle {
    display: flex;
    flex-direction: column;
    height: 20px;
    justify-content: space-between;
    cursor: pointer;
  }

  .mobile-nav-toggle__burger-bar {
    height: 4px;
    width: 32px;
    background-color: var(--smudgedblue);
    background-color: ${props =>
      props.isMobileNavOpen ? "var(--red)" : "var(--smudgedblue)"};
    transform: ${props =>
      props.isMobileNavOpen ? "rotateZ(1.45deg)" : "none"};
  }

  .main-header__mobile-nav-toggle:hover > .mobile-nav-toggle__burger-bar {
    background-color: var(--usedyellow);
  }

  .main-header__navigation-mobile {
    display: ${(props: { isMobileNavOpen: boolean }) =>
      props.isMobileNavOpen ? "flex" : "none"};

    flex-direction: column;
    position: absolute;
    z-index: 1;
    align-items: center;
    top: 4rem;
    left: 0;
    width: 100vw;
    background-color: var(--touchedwhite);
    padding-bottom: 1rem;
    box-shadow: 0 1px 1px rgb(88, 88, 88);
  }

  .navigation-mobile__links {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .mobile__links-link-wrapper {
    margin-bottom: 0.5rem;
  }

  .mobile__links-link-wrapper > a {
    text-transform: uppercase;
    color: var(--smudgedblue);
  }

  .mobile__links-link-wrapper > a:hover {
    padding-bottom: 0.25rem;
    border-bottom: 3px solid var(--usedyellow);
  }

  .navigation-mobile__btn-close {
    padding: 0 0.5rem;
    border: none;
    background-color: var(--red);
    margin-top: 0.25rem;
    transform: rotateZ(1.4deg);
    cursor: pointer;
    box-shadow: 0 1px rgb(88, 88, 88);
  }

  .btn-close__label {
    color: var(--touchedwhite);
    transform: rotateZ(-1.4deg);
  }

  .navigation-mobile__btn-close:hover {
    background-color: var(--usedyellow);

    .btn-close__label {
      color: var(--smudgedblue);
    }
  }

  @media (min-width: 40rem) {
    padding: 1.5rem;

    .logo-container__logo-header-actual {
      font-size: 2rem;
    }

    .logo-container__emblem-header-actual {
      height: 2rem;
      width: 2rem;
      margin-left: 0.75rem;
    }

    .main-header__navigation-desktop {
      display: flex;
    }

    .main-header__mobile-nav-toggle {
      display: none;
    }

    .main-header__navigation-mobile {
      display: none;
    }
  }
`
