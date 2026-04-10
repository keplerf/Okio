import * as React from 'react'
import { PropTypes } from 'prop-types'
import { ResponsiveContext } from 'grommet'

import Button from '@components/Button/v2'

import {
  Content,
  Card,
  CrossedPrice,
  Head,
  Price,
  ButtonWrapper
} from './styles'
import useDataTrackValue from '@helpers/useDataTrackValue'

const { useContext } = React

const PricingCard = ({ data, index }) => {
  const size = useContext(ResponsiveContext)

  const {
    price,
    payPriod: period,
    perriodo2: period2,
    pricePeriod2: priceYear,
    cta
  } = data

  const PREORDER_BASE_URL = process.env.GATSBY_OKYO_ECOMM_URL
  const PREORDER_ID = {
    PREORDER_ESSENTIAL: process.env.GATSBY_OKYO_ESSENTIAL_ID,
    PREORDER_PLUS: process.env.GATSBY_OKYO_PLUS_ID,
    PREORDER_PREMIUM: process.env.GATSBY_OKYO_PREMIUM_ID
  }

  const ctaHref = `${PREORDER_BASE_URL}?price_id=${PREORDER_ID[cta?.url || 'PREORDER_PREMIUM']}`

  return (
    <Card elevation='none' className={size}>
      <Head base='#8d81bc' index={index} responsiveBreakpoint='none' />
      <Content className={size}>
        {priceYear && (
          <CrossedPrice>{`$${priceYear} / ${period2}`}</CrossedPrice>
        )}

        <Price color='gray'>{`$${price} / ${period}`}</Price>

        <ButtonWrapper>
          {cta && (
            <Button
              appearance='primary'
              href={ctaHref}
              a11yTitle={cta?.label}
              data-track='true'
              data-track-value={useDataTrackValue('box-card', cta?.label)}
              internal={data.cta.contentfulinternal}
            >
              {cta?.label}
            </Button>
          )}
        </ButtonWrapper>
      </Content>
    </Card>
  )
}

PricingCard.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}

export default PricingCard
