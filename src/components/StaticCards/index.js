import * as React from 'react'
import { PropTypes } from 'prop-types'
import { Section, Inner } from '@primitives'
import { Heading } from '@tenon-io/tenon-ui'
import Card from './Card'

const StaticCards = ({ data }) => (
  <Section cards id={data?.contentfulid}>
    <Inner>
      <Heading.LevelBoundary>
        {data?.cards?.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </Heading.LevelBoundary>
    </Inner>
  </Section>
)

StaticCards.propTypes = {
  data: PropTypes.object.isRequired
}

export default StaticCards
