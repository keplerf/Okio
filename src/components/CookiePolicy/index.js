import * as React from 'react'
import { PropTypes } from 'prop-types'
import { ResponsiveContext } from 'grommet'
import { Heading } from '@tenon-io/tenon-ui'
import { Outer, Inner, Confirm } from './styles'
import Block from './Block'
import useDataTrackValue from '@helpers/useDataTrackValue'
import Cookies from 'universal-cookie/es6'

const { useContext, useState, useEffect } = React

const CookiePolicy = ({ data: { title, description, confirmLabel } = {} }) => {
  const cookies = new Cookies()
  const accepted = cookies.get('okyo_allow_cookies')
  const [allowed, setAllowed] = useState(true)
  const size = useContext(ResponsiveContext)

  const onAccept = () => {
    cookies.set('okyo_allow_cookies', 1)
    return setAllowed(true)
  }

  useEffect(() => {
    if (!accepted) {
      return setAllowed(false)
    }
  }, [accepted])

  return (
    <Outer $allowed={allowed} size={size}>
      <Inner className='inner'>
        <Heading.LevelBoundary>
          <Block title={title} description={description} size={size} />
          <Confirm
            appearance='tertiary'
            size='large'
            a11yTitle={confirmLabel}
            data-track='true'
            data-track-value={useDataTrackValue('banner', confirmLabel)}
            onClick={onAccept}
            disabled={allowed}
          >
            {confirmLabel}
          </Confirm>
        </Heading.LevelBoundary>
      </Inner>
    </Outer>
  )
}

CookiePolicy.propTypes = {
  data: PropTypes.object.isRequired
}

export default CookiePolicy
