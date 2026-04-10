import * as React from 'react'
import { PropTypes } from 'prop-types'
import { ResponsiveContext } from 'grommet'
import { Circle } from './styles'

const { useContext } = React

const parseBase = (size, root) => {
  switch (size) {
    case 'small':
      return root * 0.5
    case 'medium':
      return root * 0.7
    default:
      return root
  }
}

const PulsingCircle = ({ diameter }) => {
  const size = useContext(ResponsiveContext)
  const base = parseBase(size, diameter)
  return (
    <>
      <Circle size={0 * base} diameter={base} />
      <Circle delay={300} size={0.35 * base} diameter={base} />
      <Circle delay={600} size={0.56 * base} diameter={base} />
      <Circle delay={900} size={0.78 * base} diameter={base} />
    </>
  )
}

PulsingCircle.propTypes = {
  diameter: PropTypes.number.isRequired
}

export default PulsingCircle
