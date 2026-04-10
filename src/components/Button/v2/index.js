import * as React from 'react'
import { PropTypes } from 'prop-types'
import { ResponsiveContext } from 'grommet'
import { Btn } from './styles'

const { useContext } = React

const Button = ({ children, href, internal, ...props }) => {
  const size = useContext(ResponsiveContext)

  if (internal) {
    return (
      <Btn className={size} to={href} internal {...props}>
        {children}
      </Btn>
    )
  }

  const as = href ? 'a' : 'button'

  return (
    <Btn as={as} className={size} href={href} {...props}>
      {children}
    </Btn>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  internal: PropTypes.bool
}

export default Button
