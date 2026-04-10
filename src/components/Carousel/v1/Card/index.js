import * as React from 'react'
import { PropTypes } from 'prop-types'
import { useSwipeable } from 'react-swipeable'
import { Animate } from 'react-move'
import { easeExpInOut } from 'd3-ease'
import { ResponsiveContext } from 'grommet'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import {
  Back,
  Next,
  Content,
  Header,
  Icon,
  Wrapper,
  ImageWrapper,
  IconImage,
  Img,
  Main,
  ContentWrapper,
  Text,
  Button
} from './styles'

const { useContext } = React

const Card = ({ data, decrement, increment, index }) => {
  const size = useContext(ResponsiveContext)

  const { image, title, subtitle, icon, content } = data

  const RT_OPTIONS = {
    renderNode: {
      [BLOCKS.SPAN]: (node, children) => {
        return <Text subtitle>{children}</Text>
      }
    }
  }

  const parsed = content
    ? documentToReactComponents(JSON.parse(content.raw), RT_OPTIONS)
    : null

  const handler = useSwipeable({
    onSwipedLeft: increment,
    onSwipedRight: decrement
  })

  let section = (
    <Main className={size} index>
      <Text className={size} index>
        {index}
      </Text>
      <Icon className={size}>
        <IconImage
          className={size}
          svg={icon.svg}
          src={icon.file.url}
          alt={icon.title}
          a11yTitle={icon.title}
        />
      </Icon>
    </Main>
  )

  if (size !== 'small') {
    section = (
      <>
        <Text className={size} index>
          {index}
        </Text>
        <Icon className={size}>
          <IconImage
            className={size}
            svg={icon.svg}
            src={icon.file.url}
            alt={icon.title}
            a11yTitle={icon.title}
          />
        </Icon>
      </>
    )
  }

  return (
    <Animate
      show
      start={{
        opacity: 0
      }}
      enter={{
        opacity: [0, 1],
        timing: { duration: 750, ease: easeExpInOut }
      }}
      update={{
        opacity: [0, 1],
        timing: { duration: 750, ease: easeExpInOut }
      }}
      leave={[
        {
          opacity: [1, 0],
          timing: { delay: 750, duration: 750, ease: easeExpInOut }
        }
      ]}
    >
      {({ opacity }) => (
        <Wrapper background='#CFCFE2' className={size} gap='none' {...handler}>
          <ImageWrapper id='image-wrapper' className={size}>
            <Img
              $opacity={opacity}
              className={size}
              src={image.file.url}
              width='300px'
              height='562px'
              alt={image.title || title}
              a11yTitle={image.title || title}
            />
          </ImageWrapper>
          <ContentWrapper className={size}>
            <Content className={size}>
              {size === 'large' && (
                <Button
                  appearance='text'
                  onClick={decrement}
                  className='back'
                  a11yTitle='back'
                >
                  <Back a11yTitle='back' />
                </Button>
              )}
              {section}
              <Main className={size}>
                <Header level={4} className={size}>
                  {subtitle}
                </Header>
                {content && <Text>{parsed}</Text>}
              </Main>
              {size === 'large' && (
                <Button
                  appearance='text'
                  onClick={increment}
                  className='next'
                  a11yTitle='Next'
                >
                  <Next a11yTitle='Next' />
                </Button>
              )}
            </Content>
          </ContentWrapper>
        </Wrapper>
      )}
    </Animate>
  )
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
  decrement: PropTypes.func,
  increment: PropTypes.func,
  index: PropTypes.string.isRequired
}

export default Card
