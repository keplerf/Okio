import * as React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import theme from '@themes'
import NotFound from '@components/NotFound'
import Layout from '@components/Layout'

const NotFoundPage = ({ data, location }) => (
  <Layout theme={theme} location={location} pageType='not-found'>
    <NotFound data={data.contentfulNotFound} />
  </Layout>
)

NotFoundPage.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object
}

export const notFoundQuery = graphql`
  query OkyoNotFoundQuery {
    contentfulNotFound {
      title
      description {
        raw
      }
      image {
        title
        file {
          url
        }
        svg {
          content
        }
      }
    }
  }
`

export default NotFoundPage
