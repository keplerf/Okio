import * as React from 'react'
import { PropTypes } from 'prop-types'
import { Wrapper, Title, Description } from './styles'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

const Block = ({ title, description, size }) => {
  const RT_OPTIONS = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <Description>{children}</Description>
      }
    }
  }

  const content = documentToReactComponents(
    JSON.parse(description.raw),
    RT_OPTIONS
  )

  return (
    <Wrapper className={size}>
      <Title>{title}</Title>
      <Description>{content}</Description>
    </Wrapper>
  )
}

Block.propTypes = {
  title: PropTypes.string,
  description: PropTypes.object,
  size: PropTypes.string.isRequired
}

export default Block
