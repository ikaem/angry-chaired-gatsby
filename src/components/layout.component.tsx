// layout.component.tsx

import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import "../index.css"

import Header from "./header.component"
import Footer from "./footer.component"
import Welcome from "./welcome.component"
import Currently from "./currently.component"

import "../utils/fontawesome"

interface LayoutProps {
  children: React.ReactNode
  path?: string
}

const Layout: React.FC<LayoutProps> = ({ children, path }) => {


  return (
    <LayoutStyled className="layout">
      <GlobalStyle />
      <Header />
      {path === "/" && <Welcome />}
      <Currently />
      {children}
      <Footer />
    </LayoutStyled>
  )
}

export default Layout

const LayoutStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--touchedwhite);

  @media (min-width: 60rem) {
    /* margin: 0 10rem; */
  }
`

const GlobalStyle = createGlobalStyle`

    /* variables */
    :root {
        --red: #FF715B;
        --bluegreen: #F1F4F4;
        --smudgedblue: #5D6A6A; 
        --textblue: #373f3f;
        --touchedwhite: #FBFCFF;
        --usedyellow: #FFEF5B;
    }

    /* fonts */
    html {
        font-family: 'Lato', sans-serif;
        font-size: 100%;
    }

    /* reset */
    * {
        box-sizing: border-box;
    }

    body, #___gatsby, #gatsby-focus-wrapper {
        height: 100%;
    }

    body {
        overflow-x: hidden;
    }

    body, h1, h2, h3, h4, ul, a, p {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
    }

    ol {
        margin: 0;
        padding-left: 1rem;
    }

    img {
        display: block;
    }

    button, input, textarea {
        font: inherit;
        padding: 0;
        margin: 0;
    }

    button:focus, 
    input:focus, 
    textarea:focus {
        outline: none;
    }
`
