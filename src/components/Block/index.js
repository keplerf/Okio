import * as React from 'react'
import { PropTypes } from 'prop-types'
import { ResponsiveContext, Text } from 'grommet'
import Button from '@components/Button/v2'
import { types } from '@components/Banner/v1'
import { Wrapper, ButtonWrapper, Title, Description } from './styles'
import useDataTrackValue from '@helpers/useDataTrackValue'

const { useContext } = React

const Block = ({ data, appearance, className }) => {
  const size = useContext(ResponsiveContext)

  const { title, description, cta } = data
  return (
    <Wrapper fill='vertical' className={className} size={size}>
      <Title className={className} size={size} color={types[appearance].color}>
        {title}
      </Title>
      {!!description && (
        <Description
          className={className}
          size={size}
          color={types[appearance].color}
        >
          {description?.description}
        </Description>
      )}
      <ButtonWrapper>
        {cta && (
          <Button
            appearance={types[appearance].button}
            href={cta.url}
            internal={cta.contentfulinternal}
            data-track='true'
            data-track-value={useDataTrackValue(`${title}-box`, cta?.label)}
          >
            <Text a11yTitle={cta.label}>{cta.label}</Text>
          </Button>
        )}
      </ButtonWrapper>
    </Wrapper>
  )
}

Block.propTypes = {
  data: PropTypes.object.isRequired,
  appearance: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default Block
