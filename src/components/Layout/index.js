import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import useDataLayer, { getWebData } from '@helpers/useDataLayer'
import loadable from '@loadable/component'
import PropTypes from 'prop-types'
import { Grommet } from 'grommet'
import Toast from '@components/Toast'
import theme from '@themes'
import LoginContextProvider, { LoginContext } from '@context/LoginContext'
import { IntercomProvider, useIntercom } from 'react-use-intercom'
import DataLayerContext from '@context/DataLayerContext'
import './layout.css'
import DataLayer from '@components/DataLayer'
import Header from '@components/Header'
import Metadata from '@components/Metadata'

const Footer = loadable(() => import('@components/Footer/v2'))
const CookiePolicy = loadable(() => import('@components/CookiePolicy'))

const { useState, useEffect, useContext } = React
const APP_ID = 'lj1z0fuz'

const Container = ({ children, data, pageType, location }) => {
  const {
    contentfulHeader: header,
    allContentfulMetadata: { nodes: metas },
    contentfulToast: toast,
    contentfulFooter: footer,
    contentfulCookiePolicy: cookiePolicy
  } = data
  let page = 'home'
  if (location.pathname.includes('privacy')) {
    page = 'privacy'
  } else if (location.pathname.includes('legal')) {
    page = 'legal'
  }
  const metadata = metas.find((meta) => meta.pageType === page)
  const status = useContext(LoginContext)
  const { id, firstName, lastName, email, isLoggedIn } = status
  const { update } = useIntercom()
  // const [showToast, setToast] = useState(false)
  // const [isOpen, setIsOpen] = useState(false)

  const [webData, setWebData] = useState(
    getWebData({
      metadata,
      dataLayerName: process.env.GATSBY_DATA_LAYER_NAME,
      isLoggedIn: false,
      firstName: firstName || '',
      pageType,
      documentLocation: location
    })[0]
  )
  useEffect(() => {
    if (isLoggedIn === '200' && id) {
      update({
        name: firstName,
        email: email,
        user_id: id
      })
    }
  }, [update, isLoggedIn])

  useDataLayer(
    metadata,
    process.env.GATSBY_DATA_LAYER_NAME,
    setWebData,
    pageType,
    status
  )

  // const close = () => setToast(false)

  // useEffect(() => {
  //   setIsOpen(document.location.pathname !== '/order-now' && showToast)
  // }, [showToast])

  useEffect(() => {
    if (isLoggedIn && !!id) {
      setTimeout(() => {
        update({
          name: `${firstName} ${lastName}`,
          email: email,
          user_id: id
        })
      }, 1000)
    }
  }, [update, isLoggedIn])

  return (
    <>
      <Metadata data={metadata} />
      <DataLayerContext.Provider value={webData}>
        <DataLayer />
        <Grommet theme={theme}>
          {false && <Toast data={toast} isOpen={false} onClose={close} />}
          <Header data={header} />
          <main>{children}</main>
          <Footer data={footer} />
          {cookiePolicy && <CookiePolicy data={cookiePolicy} />}
        </Grommet>
      </DataLayerContext.Provider>
    </>
  )
}

const Layout = (props) => {
  const data = useStaticQuery(query)

  return (
    <>
      <LoginContextProvider>
        <Container data={data} {...props} />
      </LoginContextProvider>
      <IntercomProvider appId={APP_ID} initializeDelay='3000' autoBoot />
    </>
  )
}

const query = graphql`
  query {
    allContentfulMetadata {
      nodes {
        title
        pageType
        headDescription
        headTitle
        ogDescription
        ogTitle
        image {
          file {
            url
          }
        }
      }
    }
    contentfulToast {
      message {
        message
      }
      cta {
        label
        url
        contentfulinternal
      }
      closeIcon {
        title
        file {
          url
        }
        svg {
          content
        }
      }
    }
    contentfulHeader {
      cta {
        url
        label
        contentfulinternal
      }
      links {
        id
        url
        label
        contentfulinternal
      }
      login {
        id
        url
        label
        contentfulinternal
      }
      logout {
        id
        url
        label
        contentfulinternal
      }
      myAccount {
        id
        url
        label
        contentfulinternal
      }
      logo {
        title
        file {
          url
        }
        svg {
          content
        }
      }
      hamburgerIcon {
        title
        file {
          url
        }
        svg {
          content
        }
      }
      closeIcon {
        title
        file {
          url
        }
        svg {
          content
        }
      }
    }
    contentfulFooter {
      logo {
        title
        file {
          url
        }
        svg {
          content
        }
      }
      leftColumn {
        id
        url
        label
        contentfulinternal
      }
      formHeader
      socialIcons {
        id
        label
        url
        iconimage {
          title
          file {
            url
          }
          svg {
            content
          }
        }
      }
      legal {
        raw
      }
      contact {
        raw
      }
      copyright {
        raw
      }
    }
    contentfulCookiePolicy {
      title
      description {
        raw
      }
      cookieTypes {
        id
        title
        description {
          raw
        }
        cookieType
      }
      confirmLabel
    }
  }
`

Container.propTypes = {
  children: PropTypes.node,
  data: PropTypes.object.isRequired,
  pageType: PropTypes.string,
  location: PropTypes.object
}

Layout.propTypes = {
  children: PropTypes.node,
  data: PropTypes.object.isRequired,
  pageType: PropTypes.string,
  location: PropTypes.object
}

export default Layout
