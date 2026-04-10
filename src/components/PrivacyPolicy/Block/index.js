import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grommet'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { Description } from '../styles'
import { Header, Text } from './styles'

const Section = ({ data, size }) => {
  const { index, title, description } = data

  const RT_OPTIONS = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return (
          <Description block className={size}>
            {children}
          </Description>
        )
      }
    }
  }
  const content = documentToReactComponents(
    JSON.parse(description.raw),
    RT_OPTIONS
  )

  const pad = {
    small: 'large',
    medium: 'small',
    large: 'medium'
  }

  const indexLabel = index.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  })

  return (
    <Box width={{ max: 'large' }} gap='xxsmall' pad={{ vertical: pad[size] }}>
      <Text color='gray1' size='large' weight='600' a11yTitle={index}>
        {`${indexLabel}`}
      </Text>
      <Header>{title}</Header>
      <Text color='text' size='medium'>
        {content}
      </Text>
    </Box>
  )
}

Section.propTypes = {
  size: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
}

export default Section
