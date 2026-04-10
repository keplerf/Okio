import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { PropTypes } from 'prop-types'
import Layout from '@components/Layout'
import theme from '@themes'
import DecorativeCircle from '@components/DecorativeCircle'
import Subscriptions from '@components/Subscription/v1'

const Container = ({ data, location }) => {
  const { contentfulSubscribeSection: subscriptions } = data

  return (
    <Layout theme={theme} pageType='product-list' location={location}>
      <DecorativeCircle product>
        <Subscriptions data={subscriptions} />
      </DecorativeCircle>
    </Layout>
  )
}

Container.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object
}

const PreorderPage = (props) => (
  <StaticQuery
    query={subscriptionQuery}
    render={(data) => <Container data={data} {...props} />}
  />
)

PreorderPage.propTypes = {
  data: PropTypes.object
}

const subscriptionQuery = graphql`
  query {
    contentfulSubscribeSection {
      title
      subtitle
      id
      textUnderPanel {
        raw
      }
      pricingCards {
        id
        title
        price
        payPriod
        perriodo2
        pricePeriod2
        featureList {
          raw
        }
        cta {
          url
          label
          contentfulinternal
        }
        priceSignal
      }
    }
  }
`

export default PreorderPage
