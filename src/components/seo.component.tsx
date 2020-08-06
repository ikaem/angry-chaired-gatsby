import React from "react"
// import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface MetadataQueryInterface {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
    }
  }
}

interface SEOProps {
  lang?: string
  meta?: { name?: string; property?: string; content: string }[]
  //   meta: any
  description?: string
  title?: string
}

const SEO: React.FC<SEOProps> = ({ lang, meta, description, title }) => {
  console.log("lang here:", lang)
  const { site } = useStaticQuery<MetadataQueryInterface>(graphql`
    query {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `)

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${site.siteMetadata.title} | %s `}
      meta={([
        {
          name: "description",
          content: description || site.siteMetadata.description,
        },
      ] as {}[]).concat(meta)}
    />
  )
}

export default SEO

SEO.defaultProps = {
  lang: "en",
  meta: [],
  description: "",
}
