module.exports = {
  siteMetadata: {
    title: 'Fire Dance',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-svg',
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*': [
            "Content-Security-Policy: default-src 'self'; script-src 'self';",
          ],
        },
      },
    },
  ],
};
