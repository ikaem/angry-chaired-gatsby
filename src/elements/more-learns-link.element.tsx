// more-learns-link.element.tsx

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const MoreLearnsLink: React.FC = () => {
  return (
    <MoreLearnsLinkStyled>
      <Link className="more-learns-link__link-actual" to="/allprojects">
        View all projects
      </Link>
    </MoreLearnsLinkStyled>
  )
}

export default MoreLearnsLink

const MoreLearnsLinkStyled = styled.div`
  align-self: center;
  background-color: var(--red);
  transform: rotateZ(1.4deg);
  padding: 0.5rem 0.75rem;
  margin: 1.25rem 0 0.75rem;
  box-shadow: 0 1px rgb(88, 88, 88);
  cursor: pointer;

  :hover {
    background-color: var(--usedyellow);

    .more-learns-link__link-actual {
      color: var(--smudgedblue);
    }
  }

  .more-learns-link__link-actual {
    color: white;
    transform: rotateZ(-1.4deg);
    display: block;
  }

  @media (min-width: 40rem) {
    padding: 0.75rem 1rem;
    margin: 1.75rem 0 1rem;

    .more-learns-link__link-actual {
      font-size: 1.25rem;
    }
  }
`
