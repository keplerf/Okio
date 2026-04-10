const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@primitives': path.resolve(__dirname, 'src/primitives'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@containers': path.resolve(__dirname, 'src/containers'),
        '@context': path.resolve(__dirname, 'src/context'),
        '@images': path.resolve(__dirname, 'static/images'),
        '@helpers': path.resolve(__dirname, 'src/helpers'),
        '@themes': path.resolve(__dirname, 'src/themes')
      }
    }
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type contentfulContentCardv2ImageMarginsMediumJsonNode implements Node @dontInfer {
      vertical: String
      horizontal: String
      top: String
      bottom: String
      left: String
      right: String  
    }

    type contentfulContentCardv2ImageMarginsLargeJsonNode implements Node @dontInfer {
      vertical: String
      horizontal: String
      top: String
      bottom: String
      left: String
      right: String  
    }
  `
  createTypes(typeDefs)
}
