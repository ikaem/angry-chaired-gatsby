// currently.component.tsx

import React from "react"
import styled from "styled-components"

const Currently: React.FC = () => {
  return (
    <CurrentlyStyled className="currently">
      <div className="currently__new-blog-post">
        <span className="currently___key">New Blog Post:</span>
        <span className="currently___value">
          Create New Gatsby Project with TypeScript
        </span>
      </div>
      <div className="currently__current-project">
        <span className="currently___key">Current Project:</span>
        <span className="currently___value">Gatsby Portfolio</span>
      </div>
    </CurrentlyStyled>
  )
}

export default Currently

const CurrentlyStyled = styled.div`
  /* background-color: var(--touchedwhite); */
  background-color: var(--red);
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  /* color: var(--smudgedblue); */
  color: var(--touchedwhite);
  font-size: 0.85rem;
  position: relative;
  align-items: center;

  > div {
    text-align: center;
  }

  .currently__current-project {
    margin-top: 0.25rem;
  }

  .currently___key {
    font-weight: 700;
    margin-right: 0.5rem;
  }

  @media (min-width: 40rem) {
    padding: 1rem 1.5rem;
    flex-direction: row;
    justify-content: center;
    font-size: 1rem;

    .currently__new-blog-post {
      margin-right: 1.5rem;
    }

    .currently__current-project {
      margin-top: 0rem;
      margin-left: 1.5rem;
    }
  }
`
