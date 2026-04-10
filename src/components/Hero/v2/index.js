import React, { useContext } from 'react'
import { PropTypes } from 'prop-types'
import { ResponsiveContext, Box } from 'grommet'
import { Inner } from '@primitives'
import { Title, Subtitle, Section, Img } from './styles'

const Hero = ({ data: { header, text, image } }) => {
  const size = useContext(ResponsiveContext)

  return (
    <Section hero id='home' name='home' className={size}>
      <Inner>
        <Box justify='center' gap={size === 'large' ? 'xsmall' : 'small'}>
          <Title> {header}</Title>
          <Subtitle>{text?.text}</Subtitle>
          <Img image={image} alt={header} loading='eager' />
        </Box>
      </Inner>
    </Section>
  )
}

Hero.propTypes = {
  data: PropTypes.object.isRequired
}

export default Hero
