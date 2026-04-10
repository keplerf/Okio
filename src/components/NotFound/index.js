import * as React from 'react'
import { ResponsiveContext } from 'grommet'
import PropTypes from 'prop-types'
import { Wrapper, Icon, Title, Description } from './styles'
import { Section, Inner } from '@primitives'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

const { useContext } = React

const NotFound = ({ data }) => {
  const { image, title, description } = data
  const size = useContext(ResponsiveContext)

  const RT_OPTIONS = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <Description className={size}>{children}</Description>
      }
    }
  }

  const content = documentToReactComponents(
    JSON.parse(description.raw),
    RT_OPTIONS
  )

  return (
    <Section notFound>
      <Inner>
        <Wrapper className={size}>
          <Icon
            svg={image?.svg}
            src={image?.file?.url}
            className={size}
            alt={image?.title}
            a11yTitle={image?.title}
          />
          <Title className={size}>{title}</Title>
          {content}
        </Wrapper>
      </Inner>
    </Section>
  )
}

NotFound.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.shape({
      raw: PropTypes.string
    }),
    image: PropTypes.shape({
      title: PropTypes.string,
      file: PropTypes.shape({
        url: PropTypes.string
      }),
      svg: PropTypes.shape({
        content: PropTypes.string
      })
    })
  }).isRequired
}

export default NotFound
