import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ResponsiveContext } from 'grommet'
import PricingCards from '@components/PricingCard/v1'
import { Section, Inner } from '@primitives'
import { Heading as NewHeading } from '@tenon-io/tenon-ui'
import {
  Paragraph,
  SimpleParagraph,
  Content,
  Header,
  Wrapper,
  HeaderContent
} from './styles'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

const Subscriptions = ({ data }) => {
  const size = useContext(ResponsiveContext)

  const {
    contentfulid,
    title,
    subtitle,
    pricingCards: options,
    textUnderPanel
  } = data
  const RT_OPTIONS = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <Paragraph>{children}</Paragraph>
      }
    }
  }

  const parsed = documentToReactComponents(
    JSON.parse(textUnderPanel.raw),
    RT_OPTIONS
  )

  return (
    <Section id={contentfulid}>
      <Inner>
        <Wrapper>
          <Header justify='center' align='center' gap='xsmall'>
            <NewHeading.LevelBoundary levelOverride={2}>
              <NewHeading.H>
                <HeaderContent className={size} pad='medium'>
                  {title}
                </HeaderContent>
              </NewHeading.H>
            </NewHeading.LevelBoundary>
            <SimpleParagraph textAlign='center' className={size}>
              {subtitle}
            </SimpleParagraph>
          </Header>
          <Content
            id='subscription'
            justify='center'
            gap={size === 'large' ? 'large' : 'xsmall'}
            className={size}
          >
            {options?.map((option, index) => {
              return (
                <PricingCards key={option.id} data={option} index={index} />
              )
            })}
          </Content>
          <Paragraph className={size}>{parsed}</Paragraph>
        </Wrapper>
      </Inner>
    </Section>
  )
}

Subscriptions.propTypes = {
  data: PropTypes.object.isRequired
}

export default Subscriptions
