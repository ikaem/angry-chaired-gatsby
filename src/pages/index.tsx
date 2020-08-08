// index.tsx

import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout.component"
import ILearnMapper from "../containers/i-learn-mapper.container"
import PageTitle from "../elements/page-title.element"
import MoreLearnsLink from "../elements/more-learns-link.element"

import SEO from "../components/seo.component";

interface HomePageProps {
  location: {
    pathname: string
  }
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          frontmatter: {
            title: string
            date: string
            frontmatterExcerpt: string
            featuredImage: {
              childImageSharp: {
                fluid: any
              }
            }
          }
          id: string
          fields: {
            slug: string
          }
        }
      }[]
    }
  }
}

const HomePage: React.FC<HomePageProps> = ({
  location,
  data,
}) => {
  console.log(data.allMarkdownRemark.edges[0].node.frontmatter)

  const { pathname } = location;

  return (
    <Layout path={pathname}>
      <SEO title="Home page"/>
      <HomePageStyled className="home-page">
        <section className="home-page__i-learn">
          <PageTitle path={pathname} pageTitle={"I learn:"} />
          <ILearnMapper projects={data.allMarkdownRemark.edges} />
          {/* <MoreLearnsLink /> */}
        </section>
      </HomePageStyled>
    </Layout>
  )
}

export default HomePage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            frontmatterExcerpt
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

const HomePageStyled = styled.main`
  padding: 0.5rem 1rem;

  .home-page__i-learn {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 40rem) {
    padding: 1rem 1.5rem;
  }
`
