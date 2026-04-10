/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { PropTypes } from 'prop-types'
import { ResponsiveContext, Text } from 'grommet'
import Button from '@components/Button/v2'
import { base } from '@themes'
import { Section, Inner } from '@primitives'
import { Box, Title, Subtitle } from './styles'
import { Heading } from '@tenon-io/tenon-ui'
import useDataTrackValue from '@helpers/useDataTrackValue'

export const types = {
  dark: {
    background: base.text,
    color: 'white',
    button: 'primary'
  },
  light: {
    background: base.almostWhite,
    color: base.text,
    button: 'primary'
  }
}

const Banner = ({ appearance, data }) => {
  const size = useContext(ResponsiveContext)
  const { title, description, author, cta } = data

  return (
    <Section banner background={types[appearance].background}>
      <Inner banner gap='medium'>
        <Box
          gap={size === 'small' ? 'medium' : 'xxsmall'}
          pad={{ vertical: 'large', horizontal: 'medium' }}
          margin={{ top: size === 'small' ? '16px' : '0px' }}
        >
          <Heading.LevelBoundary levelOverride={3}>
            <Title className={size} color={types[appearance].color}>
              {title}
            </Title>
          </Heading.LevelBoundary>
          {!!(author || description) && (
            <Subtitle className={size} color={types[appearance].color}>
              {description?.description || author}
            </Subtitle>
          )}
          {cta && (
            <Button
              cta
              size='large'
              margin={{ top: '16px' }}
              appearance={types[appearance].button}
              href={cta.url}
              internal={cta.contentfulinternal}
              data-track='true'
              data-track-value={useDataTrackValue('banner', cta?.label)}
            >
              <Text a11yTitle={cta.label}>{cta.label}</Text>
            </Button>
          )}
        </Box>
      </Inner>
    </Section>
  )
}

Banner.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.shape({
      description: PropTypes.string
    }),
    author: PropTypes.string,
    cta: PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string,
      contentfulinternal: PropTypes.bool
    })
  }),
  appearance: PropTypes.string.isRequired
}

export default Banner
