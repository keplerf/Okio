import * as React from 'react'
import { PropTypes } from 'prop-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import {
  PaneImage,
  Column,
  Label,
  Pane,
  Icon,
  Header,
  Title,
  Wrapper,
  Content
} from './styles'

const Panel = ({
  item,
  size,
  isCurrent,
  setActive,
  expandIcon,
  collapseIcon
}) => {
  const isMobile = size === 'small'
  const direction = isMobile ? 'column-reverse' : 'row'
  const icon = isCurrent ? collapseIcon : expandIcon

  const { title, content, image } = item

  const RT_OPTIONS = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return (
          <Content className={size} a11yTitle={`content of ${title}`}>
            {children}
          </Content>
        )
      }
    }
  }

  const text = documentToReactComponents(JSON.parse(content.raw), RT_OPTIONS)

  return (
    <Pane
      header={
        <Header size={size}>
          <Label>
            <Title $label size={size} level={4}>
              {title}
            </Title>
          </Label>
          <Icon
            size={size}
            svg={icon?.svg}
            src={icon?.file?.url}
            alt={icon?.title || 'expand'}
            a11yTitle={icon?.title || 'expand'}
          />
        </Header>
      }
      height='xsmall'
      color='text'
    >
      <Wrapper
        direction={direction}
        onClick={() => setActive(-1)}
        className={size}
      >
        <Column className={size} pad='small' justify='center' gap='none'>
          {text}
        </Column>
        <Column image isMobile={isMobile}>
          <PaneImage image={image} src={image?.file.url} alt={title} />
        </Column>
      </Wrapper>
    </Pane>
  )
}

Panel.propTypes = {
  item: PropTypes.object.isRequired,
  size: PropTypes.string.isRequired,
  isCurrent: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  expandIcon: PropTypes.object.isRequired,
  collapseIcon: PropTypes.object.isRequired
}

export default Panel
