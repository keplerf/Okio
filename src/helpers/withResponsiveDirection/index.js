import React from 'react'
import { ResponsiveContext } from 'grommet'

function getResponsiveFlexDirection(screenSize) {
  // screen sizes that use full web view
  // ResponsiveContext may return undefined (defaults to medium)
  const webSizes = ['large', 'medium']
  let dir = 'row'
  if (!webSizes.includes(screenSize)) {
    dir = 'column'
  }
  return dir
}

/**
 * Wrapper Component will Apply direction prop to child component based on screen size
 * @returns ReactComponent
 */
const withResponsiveDirection = (Component) => {
  const WithResponsiveDirection = (props) => {
    const screenSize = React.useContext(ResponsiveContext)
    const direction = getResponsiveFlexDirection(screenSize)
    return <Component direction={direction} {...props} />
  }
  return WithResponsiveDirection
}

export default withResponsiveDirection
