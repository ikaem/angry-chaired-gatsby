// welcome.component.tsx

import React from "react"
import styled from "styled-components"

const Welcome: React.FC = () => {
  return (
    <WelcomeStyled className="welcome">
      <div className="welcome__crooked-welcome-container">
        <div className="crooked-welcome-container__lead">
          <h2 className="lead__greeting lead-item">
            Welcome to <strong>Angry Chaired</strong>
          </h2>
          <p className="lead__description lead-item">
            A personal portfolio of Web Dev things learned, to be learned, and
            in the process of learning.
          </p>
        </div>
      </div>
    </WelcomeStyled>
  )
}

export default Welcome

const WelcomeStyled = styled.div`
  /* background-color: var(--red); */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 1rem;

  .welcome__crooked-welcome-container {
    height: 11rem;
    width: 15rem;
    background-color: var(--bluegreen);
    /* background-color: pink; */
    transform: rotateZ(1.4deg);
    position: relative;
    top: 0.2rem;
    left: 0.2rem;
  }

  .crooked-welcome-container__lead {
    transform: rotateZ(-1.4deg);
    position: relative;
    width: 65vw;
    left: 15vw;
    margin-top: 2rem;
  }

  .lead-item {
    color: var(--smudgedblue);
    /* text-shadow: 1px 1px grey; */
  }

  .lead__greeting {
    margin-bottom: 0.5rem;
  }

  @media (min-width: 40rem) {
    padding: 0 1.5rem;

    .welcome__crooked-welcome-container {
      height: 16rem;
      width: 28rem;
      /* width: 65vw; */
      top: 0.4rem;
      left: 0.3rem;
      
    }

    .crooked-welcome-container__lead {
      margin-top: 3rem;
      left: 32vw;
      width: 56vw;
    }

    .lead__greeting {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .lead__description {
        font-size: 1.25rem;
    }
  }
`
