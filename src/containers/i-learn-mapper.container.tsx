// i-learn-mapper.container.tsx

import React from "react"
import styled from "styled-components"

import LearnItem from "../components/learn-item.component"

interface ILearnMapperProps {
  projects: Array<{
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
  }>
}

const ILearnMapper: React.FC<ILearnMapperProps> = ({ projects }) => {
  // console.log("allMarkdownRemark projects:", projects)

  return (
    <ILearnMapperStyled className="i-learn-mapper">
      {projects.map(({ node: { id, frontmatter, fields } }) => (
        <LearnItem key={id} frontmatter={frontmatter} slug={fields.slug} />
      ))}
    </ILearnMapperStyled>
  )
}

export default ILearnMapper

const ILearnMapperStyled = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem 0;

  @media (min-width: 40rem) {
    /* grid-template-columns: repeat(2, 1fr); */
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 1.5rem;
  }
`
