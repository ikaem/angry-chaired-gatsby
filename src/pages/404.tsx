// 404.tsx

import React from "react"
import styled from "styled-components"

import Layout from "../components/layout.component"
import PageTitle from "../elements/page-title.element"

const NoSuchPage: React.FC = () => {
  return (
    <Layout>
      <NoSuchPageStyled className="no-such-page">
        <section className="no-such-page__section">
          <PageTitle pageTitle={"No such page, unfortunately..."} />
          <h1>Something went wrong and you arrived here. Weird, huh?</h1>
          <p>You can go back, visit one of the links in the navigation menu, or send me a message about the error.</p>
          <p>Take care.</p>
        </section>
      </NoSuchPageStyled>
    </Layout>
  )
}

export default NoSuchPage;

const NoSuchPageStyled = styled.main`
  padding: 0.5rem 1rem;

  .no-such-page__section {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 40rem) {
    padding: 1rem 1.5rem;

  }
`

