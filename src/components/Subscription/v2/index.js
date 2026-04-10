import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ResponsiveContext } from 'grommet'
import PricingCards from '@components/PricingCard/v2'
import { Section, Inner } from '@primitives'

import {
  Paragraph,
  SimpleParagraph,
  Content,
  Header,
  HeaderContent,
  Img
} from './styles'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

const SubscriptionsV2 = ({ data }) => {
  const size = useContext(ResponsiveContext)

  const {
    contentfulid,
    title,
    subtitle,
    pricingCards: options,
    textUnderPanel,
    textUnderPanel2,
    image
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
  const parsed2 = documentToReactComponents(
    JSON.parse(textUnderPanel2.raw),
    RT_OPTIONS
  )

  return (
    <Section id={contentfulid} light>
      <Inner>
        <Header className={size}>
          <HeaderContent className={size} pad='medium'>
            {title}
          </HeaderContent>
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
            return <PricingCards key={option.id} data={option} index={index} />
          })}
        </Content>
        <Paragraph className={size}>{parsed}</Paragraph>
        <Img image={image} src={image.file.url} className={size} />
        <Paragraph className={size}>{parsed2}</Paragraph>
      </Inner>
    </Section>
  )
}

SubscriptionsV2.propTypes = {
  data: PropTypes.object.isRequired
}

export default SubscriptionsV2
