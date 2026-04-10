import React from 'react'
import propTypes from 'prop-types'
import { Box } from 'grommet'

const SplitScreen = ({ children, id, direction, ...restProps }) => {
  return (
    <Box id={id} as='section' fill align='stretch' justify='stretch' direction={direction} {...restProps}>
      {children}
    </Box>
  )
}

SplitScreen.propTypes = {
  id: propTypes.string.isRequired,
  children: propTypes.any,
  direction: propTypes.string // 'large' | 'medium' | 'small'
}
export default SplitScreen
