/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { ResponsiveContext } from 'grommet'
import propTypes from 'prop-types'
import { BackgroundImg, StyledBox, DottedCircle } from './styles'
import { convertToBgImage } from 'gbimage-bridge'

const StaticImage = ({
  data: { bgImage, overlay: { title, file, svg } = {} }
}) => {
  const size = useContext(ResponsiveContext)
  const newddImage = bgImage.gatsbyImageData
  const responsiveBgImage = convertToBgImage(newddImage)

  return (
    <BackgroundImg Tag='section' {...responsiveBgImage} preserveStackingContext>
      <StyledBox className={size}>
        <DottedCircle
          className={size}
          svg={svg}
          src={file?.url}
          alt={title}
          a11yTitle={title}
        />
      </StyledBox>
    </BackgroundImg>
  )
}

StaticImage.propTypes = {
  bgImage: propTypes.object,
  overlay: propTypes.shape({
    title: propTypes.string,
    file: propTypes.object,
    svg: propTypes.object
  })
}

export default StaticImage
