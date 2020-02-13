const config = require("./config")

module.exports = {
  siteMetadata: {
    title: `My Gatsby Blog with wpgraphql`,
    description: `My awesome blog`,
    Author: `Alexandra Spalato`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `p1bl86of135z`,
        accessToken: `lSbum5ONtiPOqpM9dKmChvPoccOEmM6bXXen4rPdWg8`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // This type will contain remote schema Query type
        typeName: `WPGraphQL`,
        // This is field under which it's accessible
        fieldName: `wpgraphql`,
        // Url to query from
        url: `${config.wordPressUrl}/graphql`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    `gatsby-theme-style-guide`,
    `gatsby-plugin-sass`,
  ],
}
