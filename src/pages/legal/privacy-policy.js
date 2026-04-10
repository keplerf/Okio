import React from 'react'
import { PropTypes } from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '@components/Layout'
import theme from '@themes'
import PrivacyPolicy from '@components/PrivacyPolicy'

const Container = ({ data, location }) => {
  const { contentfulPrivacy: privacy } = data

  return (
    <Layout theme={theme} location={location} pageType='privacy-policy'>
      <PrivacyPolicy data={privacy} />
    </Layout>
  )
}

Container.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object
}

const PrivacyPage = (props) => (
  <StaticQuery
    query={privacyQuery}
    render={(data) => <Container data={data} {...props} />}
  />
)

PrivacyPage.propTypes = {
  data: PropTypes.object
}

const privacyQuery = graphql`
  query {
    contentfulPrivacy {
      title
      subtitle {
        raw
      }
      blocks {
        title
        index
        id
        description {
          raw
        }
      }
    }
  }
`

export default PrivacyPage
