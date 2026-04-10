import * as React from 'react'
import { PropTypes } from 'prop-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import {
  PaneImage,
  Column,
  Label,
  Pane,
  CollapseIcon,
  ExpandIcon,
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

  const { title, content, image } = item

  const RT_OPTIONS = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <Content a11yTitle={`content of ${title}`}>{children}</Content>
      }
    }
  }

  const text = documentToReactComponents(JSON.parse(content.raw), RT_OPTIONS)

  return (
    <Pane
      header={
        <Header isCurrent={isCurrent} size={size}>
          <Label isCurrent={isCurrent}>
            <Title $label size={size} level={2}>
              {title}
            </Title>
          </Label>

          <ExpandIcon
            size={size}
            svg={expandIcon?.svg}
            src={expandIcon?.file?.url}
            alt={expandIcon?.title || 'expand'}
            a11yTitle={expandIcon?.title || 'expand'}
          />
        </Header>
      }
      isCurrent={isCurrent}
      height='xsmall'
      color='text'
      background='white'
    >
      <Wrapper
        background='almostWhite'
        direction={direction}
        onClick={() => setActive(-1)}
      >
        <Column pad='large' justify='center' gap='none'>
          <Title size={size} level={2}>
            {title}
          </Title>
          {text}
        </Column>
        <Column>
          <PaneImage src={image.file.url} alt={title} />
        </Column>
        <CollapseIcon
          size={size}
          svg={collapseIcon?.svg}
          src={collapseIcon?.file?.url}
          alt={collapseIcon?.title || 'collapse'}
          a11yTitle={collapseIcon?.title || 'collapse'}
        />
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
