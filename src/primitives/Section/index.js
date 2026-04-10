import * as React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import { PropTypes } from 'prop-types'
import { Box, ResponsiveContext } from 'grommet'
import { base } from '@themes'

const getFunction = (header, footer) => {
  if (header) return 'header'
  if (footer) return 'footer'
  return 'section'
}

const Wrapper = styled(Box).attrs(
  ({
    banner,
    footer,
    header,
    toast,
    dynamic,
    hero,
    stepper,
    accordion,
    cards,
    privacy,
    notFound,
    carousel,
    overlay,
    head,
    body,
    overLay,
    panel,
    light
  }) => ({
    as: getFunction(header, footer),
    className: classnames({
      toast,
      header,
      dynamic,
      content:
        !header &&
        !footer &&
        !overLay &&
        !toast &&
        !banner &&
        !carousel &&
        !accordion,
      footer,
      banner,
      hero,
      stepper,
      accordion,
      cards,
      privacy,
      notFound,
      carousel,
      overlay,
      head,
      body,
      panel,
      light
    })
  })
)`
  width: 100%;
  background: ${({ background }) => background};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;

  &.carousel.head {
    background-color: ${base.almostWhite};
    padding-top: 96px;

    &:not(.small) {
      border-top: solid 0.8px ${base.grayish[3]};
    }
  }

  &.carousel {
    &.medium {
      padding-left: 0;
      padding-right: 0;
    }
  }

  &.privacy {
    padding: 20px 0;
    justify-content: flex-start;
  }

  &.medium {
    padding: 0 48px;
  }

  &.content {
    min-height: 100vh;
    height: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    &.small {
      padding: 48px 34px 24px 34px;
      height: 90%;
      min-height: calc(100vh - 98px);
    }

    &.panel {
      min-height: initial;
      height: initial;
    }
  }

  &.overlay {
    &.small {
      min-height: 100vh;
    }
  }

  &.light {
    background: ${base.almostWhite};
    padding: 50px 0;
  }

  &.accordion {
    justify-content: start;
    padding-top: 96px;
    margin-bottom: 150px;
    width: 100%;

    &.small {
      min-height: 50vh;
      justify-content: start;
      padding: 0 24px;
    }
  }

  &.banner {
    &.small {
      padding: 24px;
    }
  }

  &.hero {
    &.large {
      padding-top: 48px;
    }
  }

  &.header {
    position: sticky;
    top: 0;
    z-index: 20;
    height: 48px;
  }

  &.toast {
    padding: 0;
    &.large {
      height: 48px;
    }
  }

  &.stepper {
    &.small {
      padding: 48px;
      min-height: max-content;

      & li:last-of-type {
        border-bottom: none;
      }
    }

    &.medium {
      padding: 68px;
      min-height: max-content;
    }
  }

  &.dynamic {
    min-height: max-content;
  }

  &.footer {
    background-color: ${base.darkUIPurple};
    flex-direction: row;
  }

  &.cards {
    &.small {
      padding: 0;
    }
  }

  &.notFound {
    min-height: 75vh;
  }
`

const { useContext } = React

const Section = ({ children, ...props }) => {
  const size = useContext(ResponsiveContext)
  return (
    <Wrapper className={size} {...props}>
      {children}
    </Wrapper>
  )
}

Section.propTypes = {
  children: PropTypes.node
}

export default Section
