import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from 'grommet'
import { Box } from './styles'

const DecorativeCircle = ({ children, ...props }) => {
  const theme = useContext(ThemeContext)

  return (
    <Box justify='center' align='center' theme={theme.global} {...props}>
      {children}
    </Box>
  )
}

DecorativeCircle.propTypes = {
  children: PropTypes.element
}

export default DecorativeCircle
