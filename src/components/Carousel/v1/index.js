import * as React from 'react'
import { PropTypes } from 'prop-types'
import { ResponsiveContext } from 'grommet'
import { Heading } from '@tenon-io/tenon-ui'
import { base } from '@themes'
import { Section, Inner } from '@primitives'
import { useCarousel } from '@helpers/useCarousel'
import HeadList from './HeadList'
import Card from './Card'
import { Head, Header, Wrapper } from './styles'

const { useContext, useState, useEffect } = React

const Carousel = ({ data }) => {
  const size = useContext(ResponsiveContext)
  const { cards, downIcon } = data
  const { current, increment, decrement, select } = useCarousel()
  const selected = cards[current]
  const total = cards.length - 1
  const visibleTotal = total >= 9 ? `${total + 1}` : `0${total + 1}`
  const index =
    current + 1 > 9
      ? `${current + 1} / ${visibleTotal}`
      : `0${current + 1} / ${visibleTotal}`

  const next = () => {
    if (current >= total) {
      return increment(0)
    }
    return increment()
  }

  const back = () => {
    if (current === 0) {
      return decrement(total)
    }
    return decrement()
  }

  const onSelect = (index) => select(index)

  const [readyImG, setReadyImG] = useState(false)

  function PreLoadImages(props) {
    useEffect(() => {
      setTimeout(() => {
        setReadyImG(true)
      }, 3000)
    }, [])
    if (props.readyImG) {
      data.cards.map((card, index) => (
        <div key={index} style={{ display: 'none' }}>
          <Card data={card} index={`${index}`} />
        </div>
      ))
    } else {
      return null
    }
  }

  return (
    <>
      <Section carousel head id='why-okyo' name='why-okyo'>
        <Inner>
          <Head className={size}>
            <Wrapper className={size}>
              <Heading.LevelBoundary>
                <Header level={3} size='small'>
                  {data.title}
                </Header>
              </Heading.LevelBoundary>
            </Wrapper>
            <HeadList
              data={cards}
              downIcon={downIcon}
              current={current}
              increment={next}
              decrement={back}
              total={total}
              onSelect={onSelect}
            />
          </Head>
        </Inner>
      </Section>
      <Section carousel body background={base.carousel}>
        <Inner>
          <Heading.LevelBoundary>
            <Card
              data={selected}
              increment={next}
              decrement={back}
              index={index}
            />
            <PreLoadImages ready={readyImG} />
          </Heading.LevelBoundary>
        </Inner>
      </Section>
    </>
  )
}

Carousel.propTypes = {
  data: PropTypes.object.isRequired,
  readyImG: PropTypes.any
}

export default Carousel
