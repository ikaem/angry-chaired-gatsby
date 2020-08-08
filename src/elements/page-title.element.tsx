// page-title.element.tsx

import React from "react"
import styled from "styled-components"

interface PageTitleProps {
  pageTitle: string; 
  path?: string; 
}

const PageTitle: React.FC<PageTitleProps> = ({
  pageTitle,
  path,
}) => {
  return <PageTitleStyled path={path}>{pageTitle}</PageTitleStyled>
}

export default PageTitle

const PageTitleStyled = styled.h1`
  color: var(--smudgedblue);
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  align-self: ${(props: { path: string }) => (props.path ? "center" : "flex-start")};
  padding-bottom: 0.25rem;
  border-bottom: ${(props) => (props.path ? "16px solid var(--red)" : "8px solid var(--usedyellow)")};;

  @media (min-width: 40rem) {
    font-size: 1.75rem;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
  }
`
