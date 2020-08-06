// gatsby-node.js

const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === "MarkdownRemark") {
    const { createNodeField } = actions

    // const fileNode = getNode(node.parent);
    // const relativePath = fileNode.relativePath;
    // console.log("relativePath:", relativePath);

    const slug = createFilePath({ node, getNode, basePath: "pages" })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/project.template.tsx"),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
