import React from 'react'
import { Box } from 'grommet'
import PropTypes from 'prop-types'
import { StyledImage } from './styles'

const Logo = ({ large, data }) => {
  const { file, svg, title } = data

  return (
    <Box
      direction='row'
      justify='start'
      height={{ max: large ? '32px' : '27.5px' }}
      width='large'
      gap='large'
    >
      <StyledImage
        fit='contain'
        src={file.url}
        svg={svg}
        alt={title}
        a11yTitle={title}
      />
    </Box>
  )
}

Logo.propTypes = {
  large: PropTypes.bool,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    file: PropTypes.shape({
      url: PropTypes.string.isRequired
    }),
    svg: PropTypes.shape({
      content: PropTypes.string.isRequired
    })
  }).isRequired
}

export default Logo
