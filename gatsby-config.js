// gatsby-config.js

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Angry Chaired",
    description: "Portfolio of my Web Development learning",
    author: "kaem",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    // {
    //   resolve: "gatsby-transformer-remark",
    //   options: {
    //     excerpt_separator: "<!-- excerpt end -->",
    //   },
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [`Playfair Display SC\:400,700,900`, `Lato\:400,700`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Angry Chaired",
        short_name: "AngryCh",
        start_url: "/",
        background_color: "#FBFCFF",
        theme_color: "#FF715B",
        display: "standalone",
        icon: "src/data/images/favicon.png",
      },
    },
    "gatsby-plugin-offline",
  ],
}
