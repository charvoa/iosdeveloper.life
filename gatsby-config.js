/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'iOSDeveloperLife',
    author: 'Nicolas Charvoz',
    description: 'Software Engineer Career Path',
    siteUrl: 'https://iosdeveloper.life',
    social: {
      twitter: '@NicolasCharvoz',
    },
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-152100442-1",
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
