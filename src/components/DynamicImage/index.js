import * as React from 'react'
import { PropTypes } from 'prop-types'
import Lottie from 'react-lottie'
import { Section, Inner } from '@primitives'

const DynamicImage = ({ data }) => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: JSON.parse(data.animation.internal.content),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Section dynamic background='white'>
      <Inner>
        <Lottie options={options} />
      </Inner>
    </Section>
  )
}

DynamicImage.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    bgImage: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string.isRequired
      })
    }),
    animation: PropTypes.shape({
      id: PropTypes.string.isRequired,
      internal: PropTypes.shape({
        content: PropTypes.string
      })
    })
  }).isRequired
}

export default DynamicImage
