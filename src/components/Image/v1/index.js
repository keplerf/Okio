import React from 'react'
import propTypes from 'prop-types'
import { Image as Img } from 'grommet'

const Image = ({ src, alt, svg, ...restProps }) => {
  if (svg?.content) {
    return (
      <div dangerouslySetInnerHTML={{ __html: svg.content }} {...restProps} />
    )
  }

  return <Img src={src} alt={alt} a11yTitle={`${alt}`} {...restProps} />
}

Image.propTypes = {
  src: propTypes.string,
  alt: propTypes.string.isRequired,
  svg: propTypes.object
}

export default Image
