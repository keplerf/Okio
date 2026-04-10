import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import theme from '@themes'
import loadable from '@loadable/component'
import Banner from '@components/Banner/v2'
import Layout from '@components/Layout'
import Hero from '@components/Hero/v2'
import ContentPanel from '@components/ContentPanel/v2'

const { useMemo } = React

const IndexPage = ({ data, location }) => {
  const {
    contentfulAccordion: accordion,
    contentfulHero: hero,
    allContentfulTextBlock: { nodes: blocks },
    contentfulWhyOkyoPage: carousel,
    contentfulSubscribeSection: subscriptions,
    contentfulPanel: panel
  } = data

  const banner = useMemo(
    () =>
      blocks.find(
        (block) => block.id === '5f5f0888-6406-5d7a-b5ec-a3afbaedc7b0'
      ),
    [blocks]
  )

  return (
    <Layout theme={theme} location={location}>
      <Hero data={hero} />
      <Banner data={banner} appearance='dark' />
      <Accordion data={accordion} />
      <Carousel data={carousel} />
      <ContentPanel data={panel} />
      <Subscriptions data={subscriptions} />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object
}

export const pageQuery = graphql`
  query OkyoPageQuery {
    contentfulPage {
      title
      metadata {
        headDescription
        headTitle
      }
    }

    contentfulWhyOkyoPage {
      title
      subtitle
      label
      cards {
        id
        title
        subtitle
        icon {
          title
          description
          file {
            url
          }
          svg {
            content
          }
        }
        image {
          title
          gatsbyImageData(placeholder: BLURRED)
          file {
            url
          }
        }
      }
      downIcon {
        title
        file {
          url
        }
        svg {
          content
        }
      }
    }

    contentfulPanel {
      header
      subHeader {
        subHeader
      }
      logo {
        svg {
          content
        }
        gatsbyImageData(layout: FULL_WIDTH)
        file {
          url
        }
      }
      cta {
        url
        label
      }
    }

    contentfulAccordion {
      id
      contentfulid
      title
      subtitle
      panelTitle
      expandIcon {
        title
        file {
          url
        }
        svg {
          content
        }
      }
      collapseIcon {
        title
        file {
          url
        }
        svg {
          content
        }
      }
      panels {
        id
        title
        image {
          gatsbyImageData(placeholder: BLURRED)
          file {
            url
          }
        }
        content {
          raw
        }
      }
    }

    contentfulHero {
      header
      text {
        text
      }
      image {
        gatsbyImageData(placeholder: NONE)
        file {
          url
        }
      }
    }

    allContentfulTextBlock {
      nodes {
        title
        description {
          description
        }
        cta {
          url
          label
          contentfulinternal
        }
        id
      }
    }
    contentfulSubscribeSection {
      contentfulid
      title
      subtitle
      id
      textUnderPanel {
        raw
      }
      textUnderPanel2 {
        raw
      }
      image {
        gatsbyImageData(placeholder: BLURRED)
        file {
          url
        }
      }
      pricingCards {
        id
        title
        price
        payPriod
        perriodo2
        pricePeriod2

        cta {
          url
          label
          contentfulinternal
        }
      }
    }
  }
`
const Subscriptions = loadable(() => import('@components/Subscription/v2'))
const Accordion = loadable(() => import('@components/Accordion/v2'))
const Carousel = loadable(() => import('@components/Carousel/v2'))

export default IndexPage
