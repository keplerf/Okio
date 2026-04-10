import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Icon } from './styles'
import Link from '@components/Link'
import useDataTrackValue from '@helpers/useDataTrackValue'

const Social = ({ items, justify, size }) => {
  return (
    <Wrapper
      direction='row'
      justify={justify}
      gap='xsmall'
      a11yTitle='Social Links'
      className={size}
    >
      {items?.map(({ id, label, url, iconimage }) => (
        <Link
          key={id}
          href={url}
          a11yTitle={label}
          data-track='true'
          data-track-value={useDataTrackValue('footer', label)}
        >
          <Icon
            src={iconimage?.file?.url}
            isSmall={size === 'small'}
            alt={label}
          />
        </Link>
      ))}
    </Wrapper>
  )
}

Social.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  justify: PropTypes.string,
  size: PropTypes.string
}

export default Social
