// learn-item.tsx

import React from "react"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";

interface LearnItemProps {
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
  slug: string
}

const LearnItem: React.FC<LearnItemProps> = ({
  frontmatter: { title, date, frontmatterExcerpt: excerpt, featuredImage: { childImageSharp: { fluid }} },
  slug,
}) => {
  // console.log("slug:", slug)
  return (
    <LearnItemStyled className="learn-item">
      {/* <div className="learn-item__image-container">
        <img src="https://source.unsplash.com/350x350/?nature" alt="" />
      </div> */}

      <Img 
        className="learn-item__featured-image"
        fluid={fluid}
        alt={title}
        />

      <div className="learn-item__learn-points">
        <Link to={slug}>
          <h3 className="learn-points__title">{title}</h3>
        </Link>

        {/* <p className="learn-points__and">&amp;</p> */}
        {/* <ul className="learn-points__other">
          <li className="other__point">React</li>
          <li className="other__point">TypeScript</li>
          <li className="other__point">Node</li>
          <li className="other__point">Apollo</li>
        </ul> */}

        <p className="learn-points__other">{excerpt}</p>
      </div>
    </LearnItemStyled>
  )
}

export default LearnItem

const LearnItemStyled = styled.li`
  /* background-color: var(--touchedwhite); */
  background-color: var(--bluegreen);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* height: 13rem; */
  /* padding: 1rem 0; */
  color: var(--smudgedblue);
  max-width: 663px;

  .learn-item__image-container {
    width: 100%;
    height: 10rem;
  }

  .learn-item__image-container > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* object-position: top; */
  }

  .learn-item__featured-image {
    width: 100%;
    height: 10rem;
  }

  .learn-item__learn-points {
    padding: 0 1rem 1rem;
    /* width: 65%; */
    display: flex;
    flex-direction: column;
  }

  .learn-points__title {
    align-self: flex-start;
    font-size: 1.25rem;
    background-color: var(--usedyellow);
    padding: 0.5rem;
    /* color: white; */
    color: var(--smudgedblue);
    /* display: flex; */
    margin-bottom: 1.5rem;
  }

  .learn-points__other {
    /* margin-top: auto; */
    /* margin-top: 0.25rem; */
    /* list-style: disc; */
    padding-left: 0.5rem;
    /* font-weight: 700; */
    /* text-transform: uppercase; */
    border-left: 3px solid var(--red);
    /* height: 100px; */
  }

  @media (min-width: 40rem) {
    /* height: 16rem; */

    :nth-of-type(odd) {
      /* flex-direction: row-reverse; */
    }

    .learn-points__title {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }

    .learn-points__other {
      font-size: 1.15rem;
    }
  }
`
