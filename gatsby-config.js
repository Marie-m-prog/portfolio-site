module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `A portfolio website showcasing my work and information about me`,
    author: `Marie W Madsen`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-sass`,
  ],
}
