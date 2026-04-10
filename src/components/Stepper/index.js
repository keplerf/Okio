import React, { useContext } from 'react'
import propTypes from 'prop-types'
import parse from 'html-react-parser'
import { ResponsiveContext } from 'grommet'
import { base } from '@themes'
import { Section, Inner } from '@primitives'
import { Item, List, Title, Header, Step, Sentence, Subtitle } from './styles'

const StepperSection = ({ data }) => {
  const size = useContext(ResponsiveContext)

  return (
    <Section
      background={base.text}
      id={data.contentfulid}
      name={data.contentfulid}
    >
      <Inner>
        <Header>
          <Title level={3}>{parse(data.title)}</Title>
          <Subtitle level={4}>{parse(data.subtitle)}</Subtitle>
        </Header>
        <List className={size}>
          <ol>
            {data.steps.map((item) => (
              <Item key={item.step} className={size}>
                <Step $step as='strong'>
                  {parse(item.step)}
                </Step>
                <Sentence paragraph className={size}>
                  {parse(item.description)}
                </Sentence>
              </Item>
            ))}
          </ol>
        </List>
      </Inner>
    </Section>
  )
}

StepperSection.propTypes = {
  title: propTypes.any,
  data: propTypes.any,
  subtitle: propTypes.any,
  pad: propTypes.any,
  size: propTypes.any,
  sectionContent: propTypes.any
}

export default StepperSection
