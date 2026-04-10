import React from 'react'
import { Text } from 'grommet'
import { Wrapper } from './styles'
import { PropTypes } from 'prop-types'
import Button from '@components/Button/v2'
import useDataTrackValue from '@helpers/useDataTrackValue'

const Links = ({ large, data }) => {
  return (
    <Wrapper large={large} gap='none' a11yTitle='Okyo Footer Links'>
      {data.map(({ id, url, label, contentfulinternal }) => (
        <Button
          footer
          appearance='text'
          key={id}
          internal={contentfulinternal}
          href={url}
          a11yTitle={label}
          color='white'
          data-track='true'
          data-track-value={useDataTrackValue('footer', label)}
        >
          <Text size='medium'>{label}</Text>
        </Button>
      ))}
    </Wrapper>
  )
}

Links.propTypes = {
  large: PropTypes.any,
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Links
