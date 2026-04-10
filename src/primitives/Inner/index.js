import * as React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import { PropTypes } from 'prop-types'
import { Box, ResponsiveContext } from 'grommet'

const Wrapper = styled(Box).attrs(
  ({ header, footer, banner, accordion, fullWith }) => ({
    as: 'article',
    className: classnames({
      header,
      footer,
      banner,
      accordion,
      fullWith
    })
  })
)`
  max-width: 1280px;
  width: 100%;
  position: relative;

  &.fullWith {
    max-width: inherit;
  }
  .large & {
    padding: 0 15px;
  }

  &.banner {
    max-width: 800px;
  }

  &.header {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &.footer {
    display: flex;
    flex-direction: row;
    padding: 0 35px 0 15px;
  }
`

const { useContext } = React

const Inner = ({ children, ...props }) => {
  const size = useContext(ResponsiveContext)

  return (
    <Wrapper {...props} className={size}>
      {children}
    </Wrapper>
  )
}

Inner.propTypes = {
  children: PropTypes.node
}

export default Inner
