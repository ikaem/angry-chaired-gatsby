// about.tsx

import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout.component"
import PageTitle from "../elements/page-title.element"

const About: React.FC<{ data: any }> = ({ data }) => {

  console.log("data in about:", data);


  return (
    <Layout>
      <AboutStyled className="about-page">
        <section className="about-page__about-section">
          <PageTitle pageTitle={"About Angry Chaired by kaem"} />
          <h2 className="about-section__paragraph-title">What is it?</h2>
          <p className="about-section__paragraph-content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            corporis ab eos, voluptatum non, saepe eum eveniet cumque, earum
            animi iure nulla placeat molestiae minima excepturi libero soluta
            obcaecati rem.
          </p>
          <h2 className="about-section__paragraph-title">Who am I?</h2>

          {/* <Img
            className="about-section__my-profile-image"
            fixed={data.testFixed.childImageSharp.fixed}
            alt="my profile image"
          /> */}

          <Img
            className="about-section__my-profile-image"
            fluid={data.file.childImageSharp.fluid}
            alt="my profile image"
          />
          <p className="about-section__paragraph-content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            corporis ab eos, voluptatum non, saepe eum eveniet cumque, earum
            animi iure nulla placeat molestiae minima excepturi libero soluta
            obcaecati rem.
          </p>
          <h2 className="about-section__paragraph-title">
            What do I want from Angry Chaired?
          </h2>
          <ol className="about-section__paragraph-content about-section__about-list">
            <li className="about-list__list-item">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </li>
            <li className="about-list__list-item">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </li>
            <li className="about-list__list-item">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </li>
            <li className="about-list__list-item">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </li>
          </ol>
        </section>
        <aside className="about-page__about-me-section">
          <h3 className="about-me-section__paragraph-title">
            My work experience:
          </h3>
          <ul className="about-me-section__paragraph-content about-me-section__me-list">
            <li className="me-list__list-item">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </li>
            <li className="me-list__list-item">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </li>
            <li className="me-list__list-item">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </li>
            <li className="me-list__list-item">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </li>
          </ul>
          <h3 className="about-me-section__paragraph-title">My education:</h3>
          <ul className="about-me-section__paragraph-content about-me-section__me-list">
            <li className="me-list__list-item">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </li>
            <li className="me-list__list-item">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </li>
            <li className="me-list__list-item">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </li>
            <li className="me-list__list-item">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </li>
          </ul>
        </aside>
      </AboutStyled>
    </Layout>
  )
}

export default About

export const query = graphql`
  query {
    file(relativePath: { eq: "data/images/my-image.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    },
    metadata: site {
      siteMetadata {
        title 
        author
      }
    },
    testFixed: file(relativePath: { eq: "data/images/my-image.jpg"}) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const AboutStyled = styled.main`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;

  .about-page__about-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .about-section__paragraph-title {
    color: var(--smudgedblue);
    margin: 1rem 0 0.25rem;
    font-size: 1.25rem;
    font-weight: 400;
    padding-bottom: 0.25rem;
    border-bottom: 4px solid var(--bluegreen);
  }

  .about-section__paragraph-content {
    color: var(--textblue);
    font-size: 1rem;
    line-height: 1.3rem;
  }

  .about-section__my-profile-image {
    margin: 0.25rem 0 0.5rem;
    width: 100%;
    height: 200px;
  }

  .about-page__about-me-section {
    margin: 1.5rem 0 1rem;
    border-top: 4px solid var(--usedyellow);
    padding-top: 0.25rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .about-me-section__paragraph-title {
    margin: 1rem 0 0.25rem;
    font-size: 1.25rem;
    color: var(--smudgedblue);
    font-weight: 400;
    padding-bottom: 0.25rem;
    border-bottom: 4px solid var(--bluegreen);
  }

  .about-me-section__paragraph-content {
    color: var(--textblue);
    font-size: 1rem;
    line-height: 1.3rem;
    list-style: disc;
    padding-left: 1rem;
  }

  @media (min-width: 40rem) {
    padding: 1rem 1.5rem;
    flex-direction: row;
    width: 100%;

    .about-page__about-section {
      width: 60%;
      margin: 0 0.5rem 1rem 0;
    }

    .about-section__paragraph-title {
      margin: 1rem 0 0.5rem;
      font-size: 1.5rem;
    }

    .about-section__paragraph-content {
      font-size: 1.15rem;
      line-height: 1.5rem;
    }

    .about-section__my-profile-image {
      margin: 0.5rem 0 1rem;
      height: 300px;
    }

    .about-page__about-me-section {
      align-self: flex-start;
      width: 40%;
      padding: 0 0 0 1.5rem;
      border-left: 4px solid var(--usedyellow);
      border-top: none;
      margin: 4.75rem 0 1rem 1rem;
      align-items: flex-start;
      opacity: 0.6;
    }

    .about-me-section__paragraph-title {
      margin: 0 0 0.5rem;
      font-size: 1.5rem;
    }

    .about-me-section__paragraph-content {
      font-size: 1.15rem;
      line-height: 1.4rem;
      margin-bottom: 1rem;
    }
  }
`
