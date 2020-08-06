// project.template.tsx

import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout.component"
import PageTitle from "../elements/page-title.element"

interface ProjectTemplateProps {
  data: {
    markdownRemark: {
      excerpt: string
      html: string
      frontmatter: {
        title: string
        learningPeriod: string
      }
      htmlAst: {
        children: Array<{
          type: string
          value?: string
          tagName?: string
          properties?: {
            id?: string
          }
          children?: Array<{
            type: string
            value: string
          }>
        }>
      }
    }
  }
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({ data }) => {
  const summaryParagraph = data.markdownRemark.htmlAst.children.find(
    element => {
      return element.properties?.id === "summary-paragraph"
    }
  )

  return (
    <Layout>
      <ProjectTemplateStyled
        className="project-template"
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      >
        {/* <section className="project-template__details-section">
          <PageTitle pageTitle={data.markdownRemark.frontmatter.title} />
          <span className="details-section__learning-period">
            {data.markdownRemark.frontmatter.learningPeriod}
          </span>


          <div
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          ></div>

          <h2 className="details-section__paragraph-title">Summary:</h2>
          <p className="details-section__paragraph-content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            corporis ab eos, voluptatum non, saepe eum eveniet cumque, earum
            animi iure nulla placeat molestiae minima excepturi libero soluta
            obcaecati rem.
          </p>

          <h2 className="details-section__paragraph-title">Goals:</h2>
          <ol className="details-section__paragraph-content details-section__details-list">
            <li className="details-list__list-item">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </li>
            <li className="details-list__list-item">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </li>
            <li className="details-list__list-item">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </li>
            <li className="details-list__list-item">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </li>
          </ol>

          <h2 className="details-section__paragraph-title">Steps:</h2>
          <ol className="details-section__paragraph-content details-section__details-list">
            <li className="details-list__list-item">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </li>
            <li className="details-list__list-item">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </li>
            <li className="details-list__list-item">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </li>
            <li className="details-list__list-item">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </li>
          </ol>

          <h2 className="details-section__paragraph-title">Struggled with:</h2>
          <ol className="details-section__paragraph-content details-section__details-list">
            <li className="details-list__list-item">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </li>
            <li className="details-list__list-item">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </li>
            <li className="details-list__list-item">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </li>
            <li className="details-list__list-item">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </li>
          </ol>
          <h2 className="details-section__paragraph-title">Screenshots:</h2>
          <ul className="details-section__paragraph-content details-section__details-list">
            <li className="details-list__list-item">
              <Img />
            </li>
            <li className="details-list__list-item">
              <Img />
            </li>
          </ul>
        </section>

        <aside className="project-template__more-info-section">
          <h3 className="more-info-section__paragraph-title">
            Tech and Tools used:
          </h3>
          <ul className="more-info-section__paragraph-content more-info-section__more-info-list">
            <li className="more-info-list__list-item">React</li>
            <li className="more-info-list__list-item">React</li>
            <li className="more-info-list__list-item">React</li>
            <li className="more-info-list__list-item">React</li>
          </ul>
          <h3 className="more-info-section__paragraph-title">Available at:</h3>
          <ul className="more-info-section__paragraph-content more-info-section__more-info-list">
            <li className="more-info-list__list-item">
              <a href="https://heroku.com">Heroku.com</a>
            </li>
            <li className="more-info-list__list-item">
              <a href="https://heroku.com">Heroku.com</a>
            </li>
            <li className="more-info-list__list-item">
              <a href="https://heroku.com">Heroku.com</a>
            </li>
            <li className="more-info-list__list-item">
              <a href="https://heroku.com">Heroku.com</a>
            </li>
          </ul>
          <h3 className="more-info-section__paragraph-title">Blog series:</h3>
          <ul className="more-info-section__paragraph-content more-info-section__more-info-list">
            <li className="more-info-list__list-item">
              <a href="https://heroku.com">Heroku.com</a>
            </li>
          </ul>
        </aside> */}
      </ProjectTemplateStyled>
    </Layout>
  )
}

export default ProjectTemplate

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      htmlAst
      frontmatter {
        title
        learningPeriod
      }
      excerpt
    }
  }
`

const ProjectTemplateStyled = styled.main`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;

  .project-template__details-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .project-template__project-title {
    color: var(--smudgedblue);
    font-size: 1.5rem;
    font-weight: 400;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    align-self: "flex-start";
    padding-bottom: 0.25rem;
    border-bottom: 8px solid var(--usedyellow);
  }

  .details-section__project-lead {
    margin-top: 0.5rem;
    font-size: 1.15rem;
    color: var(--textblue);
    margin-bottom: 0.75rem;
  }

  .details-section__learning-period {
    font-size: 0.9rem;
    color: grey;
  }

  .details-section__paragraph-title {
    color: var(--smudgedblue);
    margin: 1.5rem 0 0.25rem;
    font-size: 1.25rem;
    font-weight: 400;
    padding-bottom: 0.25rem;
    border-bottom: 4px solid var(--bluegreen);
  }

  .details-section__paragraph-content {
    color: var(--textblue);
    font-size: 1rem;
    line-height: 1.3rem;
  }

  .project-template__more-info-section {
    margin: 1.5rem 0 1rem;
    border-top: 4px solid var(--usedyellow);
    padding-top: 0.25rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .more-info-section__paragraph-title {
    margin: 1rem 0 0.25rem;
    font-size: 1.25rem;
    color: var(--smudgedblue);
    font-weight: 400;
    padding-bottom: 0.25rem;
    border-bottom: 4px solid var(--bluegreen);
  }

  .more-info-section__paragraph-content {
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

    .project-template__details-section {
      width: 60%;
      margin: 0 0.5rem 1rem 0;
    }

    .project-template__project-title {
      font-size: 1.75rem;
      margin-top: 0.5rem;
      margin-bottom: 1.5rem;
    }

    .details-section__project-lead {
      margin-top: 0.75rem;
      font-size: 1.25rem;
    }

    .details-section__learning-period {
      font-size: 1rem;
    }

    .details-section__paragraph-title {
      margin: 1rem 0 0.5rem;
      font-size: 1.5rem;
    }

    .details-section__paragraph-content {
      font-size: 1.15rem;
      line-height: 1.5rem;
    }

    .project-template__more-info-section {
      align-self: flex-start;
      width: 40%;
      padding: 0 0 0 1.5rem;
      border-left: 4px solid var(--usedyellow);
      border-top: none;
      margin: 4.75rem 0 1rem 1rem;
      align-items: flex-start;
      opacity: 0.6;
    }

    .more-info-section__paragraph-title {
      margin: 0 0 0.5rem;
      font-size: 1.5rem;
    }

    .more-info-section__paragraph-content {
      font-size: 1.15rem;
      line-height: 1.4rem;
      margin-bottom: 1rem;
    }
  }
`
