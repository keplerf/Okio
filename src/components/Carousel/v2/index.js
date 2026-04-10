import * as React from 'react'
import { PropTypes } from 'prop-types'
import { ResponsiveContext } from 'grommet'
import { base } from '@themes'
import { Section, Inner } from '@primitives'
import { useCarousel } from '@helpers/useCarousel'
import HeadList from './HeadList'
import Card from './Card'
import { Head, Title, SubTitle, Label, Wrapper } from './styles'

const { useContext, useState, useEffect } = React

const Carousel = ({ data }) => {
  const size = useContext(ResponsiveContext)
  const { title, subtitle, label, cards, downIcon } = data
  const { current, increment, decrement, select, previous } = useCarousel()
  const selected = cards[current]
  const total = cards.length - 1
  const visibleTotal = total + 1
  const index = `${current + 1}/${visibleTotal}`

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

  const onSelect = ({ index, previous }) => select({ index, previous })

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
      <Section carousel head id='why-okyo' name='why-okyo' background='blue'>
        <Inner>
          <Title level={2} className={size}>
            {title}
          </Title>
          <SubTitle className={size}>{subtitle}</SubTitle>
          <Head className={size}>
            <Wrapper>
              <Label level={3} size='small'>
                {size === 'large' && label}
              </Label>
            </Wrapper>
            <HeadList
              data={cards}
              downIcon={downIcon}
              current={current}
              increment={next}
              decrement={back}
              total={total}
              visibleTotal={visibleTotal}
              onSelect={onSelect}
              previous={previous}
            />
          </Head>
        </Inner>
      </Section>
      <Section carousel body background={base.carousel}>
        <Inner>
          <Card
            data={selected}
            increment={next}
            decrement={back}
            index={index}
          />
          <PreLoadImages ready={readyImG} />
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
