import React, { useContext } from 'react'
import { PropTypes } from 'prop-types'
import { ResponsiveContext } from 'grommet'
import { Heading as NewHeading } from '@tenon-io/tenon-ui'
import { Section, Inner } from '@primitives'
import { Wrapper, Title, Subtitle, Logo } from './styles'
import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'

const Hero = ({ data }) => {
  const size = useContext(ResponsiveContext)
  const isMobile = size === 'small' ? 'small' : 'large'
  const image =
    size === 'small'
      ? data.backgroundMobile.gatsbyImageData
      : data.background.gatsbyImageData

  const bgImage = convertToBgImage(image)

  return (
    <BackgroundImage Tag='section' {...bgImage} preserveStackingContext>
      <Section hero id='home' name='home'>
        <Inner>
          <Wrapper justify='center' gap='xsmall' className={isMobile}>
            <NewHeading.H>
              <Title> {data.title}</Title>
            </NewHeading.H>
            <NewHeading.LevelBoundary>
              <NewHeading.H>
                <Subtitle>{data.subtitle.subtitle}</Subtitle>
              </NewHeading.H>
            </NewHeading.LevelBoundary>
          </Wrapper>
          <Logo
            svg={data.logo.svg}
            src={data.logo.file.url}
            alt={data.logo.description}
            a11yTitle={data.logo.description}
            fit='contain'
          />
        </Inner>
      </Section>
    </BackgroundImage>
  )
}

Hero.propTypes = {
  data: PropTypes.object.isRequired
}

export default Hero
