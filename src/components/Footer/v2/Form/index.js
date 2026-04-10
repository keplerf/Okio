import * as React from 'react'
import { PropTypes } from 'prop-types'
import { ResponsiveContext } from 'grommet'
import { Frame, IframeWrapper } from './styles'

const { useContext } = React

const SubscribeForm = () => {
  const size = useContext(ResponsiveContext)

  return (
    <IframeWrapper className={size}>
      <Frame
        loading='lazy'
        className={size}
        onload='javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+"px";}(this));'
        src='https://cdn.forms-content.sg-form.com/29bf53a1-c980-11eb-8e9f-cab0a46cd0fb'
      />
    </IframeWrapper>
  )
}

SubscribeForm.propTypes = {
  address: PropTypes.string,
  onChange: PropTypes.func
}

export default SubscribeForm
