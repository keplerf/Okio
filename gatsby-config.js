require('dotenv').config({
  path: `.env.build.${process.env.SITE_BUILD_TARGET_ENV}`
})

module.exports = {
  siteMetadata: {
    title: 'Okyo.com'
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        host: process.env.CONTENTFUL_HOST || undefined,
        environment: process.env.CONTENTFUL_ENVIRONMENT_ID || undefined
      }
    },
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: [
          'https://www.gstatic.com',
          'https://www.google.com',
          'http://assets.adobedtm.com/'
        ]
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: ['auto', 'webp'],
          placeholder: 'dominantColor',
          quality: 80,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: 'transparent',
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {}
        }
      }
    },

    'gatsby-transformer-inline-svg',
    'gatsby-transformer-sharp', // Needed for dynamic images
    'gatsby-plugin-preload-fonts',
    'gatsby-plugin-loadable-components-ssr',
    {
      resolve: 'gatsby-plugin-styled-components'
    }
  ]
}
