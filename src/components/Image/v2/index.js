import React from 'react'
import propTypes from 'prop-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Image as Img } from 'grommet'

const Image = ({ image, svg, ...restProps }) => {
  if (svg?.content) {
    return (
      <div dangerouslySetInnerHTML={{ __html: svg.content }} {...restProps} />
    )
  }

  if (typeof image === 'object') {
    return <GatsbyImage image={getImage(image)} {...restProps} />
  }

  return <Img {...restProps} />
}

Image.propTypes = {
  image: propTypes.object,
  svg: propTypes.object
}

export default Image
