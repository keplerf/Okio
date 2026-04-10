import React from 'react'
import { PropTypes } from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '@components/Layout'
import theme from '@themes'
import { Section, Inner } from '@primitives'
import Terms from '@components/Terms/v2/'

const Container = ({ data, location }) => {
  const { contentfulLegalPage: legal } = data

  return (
    <Layout theme={theme} location={location} pageType='terms-of-service'>
      <Section privacy>
        <Inner>
          <Terms data={legal} />
        </Inner>
      </Section>
    </Layout>
  )
}

Container.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object
}

const TermsPage = (props) => (
  <StaticQuery
    query={termsQuery}
    render={(data) => <Container data={data} {...props} />}
  />
)

TermsPage.propTypes = {
  data: PropTypes.object
}

const termsQuery = graphql`
  query {
    contentfulLegalPage {
      links {
        id
        label
        url
      }
      sections {
        title
        jumplinkid
        description {
          raw
        }
        termsBlock {
          index
          title
          subtitle
          description {
            raw
          }
        }
      }
    }
  }
`

export default TermsPage
