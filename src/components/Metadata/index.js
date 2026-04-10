import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

const Metadata = ({ data }) => {
  return (
    <Helmet>
      <title>{data.headTitle}</title>
      <meta name='description' content={data.headDescription} />
      {data.image && <meta name='image' content={data.image.file.url} />}
      {/* OpenGraph tags */}
      <meta property='og:url' content='' />
      <meta property='og:title' content={data.headTitle} />
      <meta property='og:description' content={data.headDescription} />
      {data.image && <meta property='og:image' content={data.image.file.url} />}
    </Helmet>
  )
}

Metadata.propTypes = {
  data: PropTypes.object.isRequired
}

export default Metadata
