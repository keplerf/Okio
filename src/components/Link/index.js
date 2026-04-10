import { navigate } from 'gatsby'
import React from 'react'
import { Anchor } from 'grommet'
import PropTypes from 'prop-types'

const Link = ({ to, href, ...props }) => (
  <Anchor
    href={to || href}
    onClick={(event) => {
      event.preventDefault()
      navigate(to || href)
    }}
    {...props}
  />
)

Link.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string
}

export default Link
