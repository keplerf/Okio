import * as React from 'react'
import { PropTypes } from 'prop-types'
import { Text, ResponsiveContext, Box } from 'grommet'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import Button from '@components/Button/v2'
import { base } from '@themes'
import {
  Body,
  Content,
  Card,
  CrossedPrice,
  Head,
  Footer,
  Paragraph,
  Item
} from './styles'
import useDataTrackValue from '@helpers/useDataTrackValue'

const { useContext } = React

const RT_OPTIONS = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <Paragraph>{children}</Paragraph>
    },
    [BLOCKS.LIST_ITEM]: (node, children) => {
      return <Item>{children}</Item>
    }
  }
}

const PricingCard = ({ data, index }) => {
  const size = useContext(ResponsiveContext)
  const padding = size === 'small' ? 'large' : 'medium'

  const {
    featureList: content,
    price,
    payPriod: period,
    perriodo2: period2,
    pricePeriod2: priceYear,
    title,
    cta,
    priceSignal
  } = data

  const parsed = documentToReactComponents(JSON.parse(content.raw), RT_OPTIONS)

  return (
    <Card background='almostWhite' elevation='none' className={size}>
      <Head
        pad={{ horizontal: padding, vertical: 'xsmall' }}
        base='#918DD3'
        index={index}
        responsiveBreakpoint='none'
      >
        <Text
          size='xxlarge'
          a11yTitle={title}
          weight={600}
          color='darkUIPurple'
        >
          {title}
        </Text>
      </Head>
      <Content className={size}>
        <Body flex='grow' className={size} pad={padding}>
          {parsed}
        </Body>
        <Footer direction='column' gap='small' pad={padding} className={size}>
          <Box>
            <Box height='31px'>
              {priceYear && (
                <CrossedPrice size='xxlarge' weight={600}>
                  {`$${priceYear} / ${period2}`}
                </CrossedPrice>
              )}
            </Box>
            <Text size='xxlarge' color='gray' weight={600}>
              {`$${price} / ${period}`}
            </Text>
          </Box>
          <Text color={base.deepPurple} a11yTitle={priceSignal}>
            {priceSignal}
          </Text>
          <Box height='32px'>
            {cta && (
              <Button
                appearance='primary'
                href={cta?.url}
                a11yTitle={cta?.label}
                data-track='true'
                data-track-value={useDataTrackValue('box-card', cta?.label)}
                internal={data.cta.contentfulinternal}
              >
                {cta?.label}
              </Button>
            )}
          </Box>
        </Footer>
      </Content>
    </Card>
  )
}

PricingCard.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}

export default PricingCard
