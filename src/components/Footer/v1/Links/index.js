import React from 'react'
import { Nav, Text } from 'grommet'
import { PropTypes } from 'prop-types'
import Button from '@components/Button/v2'
import useDataTrackValue from '@helpers/useDataTrackValue'

const Links = ({ large, data }) => {
  const marginVertical = ((7 - data.length) * 28) / 2 + 16 + 'px'

  return (
    <Nav
      direction='column'
      margin={{ vertical: large ? marginVertical : '0px' }}
      gap='none'
      a11yTitle='Okyo Footer Links'
      align='start'
    >
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
    </Nav>
  )
}

Links.propTypes = {
  large: PropTypes.any,
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Links
