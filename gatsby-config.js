module.exports = {
  siteMetadata: {
    title: `G-Science`,
    description: `Bringing the absolute best of sports science into esports.`,
    author: `@gscience`,
    twitterHandle: "@Ryan_Gscience",
    url: "https://g-science.io",
    author: `@gscience`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "api.gscience.io",
        protocol: "http",
        // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
        // This feature is untested for sites hosted on wordpress.com.
        // Defaults to true.
        useACF: true,
        // Blacklisted routes using glob patterns
        excludedRoutes: [
          "**/settings",
          "**/wpcom",
          "**/acf",
          "**/wp",
          "**/wpcomsh",
          "**/options",
          "**/stats",
          "**/alert",
          "**/jetpack",
          "**/configurator",
          "**/reindex_posts",
          "**/ryte",
          "**/statistics",
          "***/users",
          "***/options",
          "**/key",
        ],
        // use a custom normalizer which is applied after the built-in ones.
        normalizer: function({ entities }) {
          return entities
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/img/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
