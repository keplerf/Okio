import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, StyledImage } from './styles'

const Logo = ({ large, data }) => {
  const { file, svg, title } = data

  return (
    <Wrapper large={large} width='large' gap='large'>
      <StyledImage src={file.url} svg={svg} alt={title} a11yTitle={title} />
    </Wrapper>
  )
}

Logo.propTypes = {
  large: PropTypes.bool,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    file: PropTypes.shape({
      url: PropTypes.string.isRequired
    }).isRequired,
    svg: PropTypes.shape({
      content: PropTypes.string.isRequired
    })
  }).isRequired
}

export default Logo
