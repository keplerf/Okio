import styled, { css } from 'styled-components'
import classnames from 'classnames'
import { AccordionPanel, Box, Heading, Paragraph } from 'grommet'
import Image from '@components/Image/v2'
import { base, fonts } from '@themes'

export const Label = styled.div.attrs(({ isCurrent }) => ({
  className: classnames({
    current: isCurrent
  })
}))`
  width: 100%;
`

export const PaneImage = styled(Image)`
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
`

export const Title = styled(Heading).attrs(({ $label, size }) => ({
  className: classnames({
    label: $label,
    [size]: true
  })
}))`
  font-weight: 600;
  font-size: 26px;
  color: ${base.deepPurple};
  margin: 0px;
  line-height: 1.2;

  &.label {
    color: ${base.text};
  }
`

export const Pane = styled(AccordionPanel)`
  width: 100%;
  pointer-events: none;
  background-color: ${base.white};
`

export const Wrapper = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: ${base.almostWhite};
  border-top: solid ${base.black} 0.8px;

  &.small {
    border-style: hidden;
  }

  & a {
    color: ${base.purple};
    font-weight: 600;
  }
`

export const Content = styled(Paragraph)`
  color: ${base.text};
  font-size: ${fonts.large.size};
  margin: 30px 0px 8px;
  height: 100%;
  min-width: 90%;
  & a {
    font-size: ${fonts.large.size};
  }

  &.small,
  &.small > a {
    font-size: 14px;
  }
`

export const Header = styled(Box).attrs(({ size }) => {
  return {
    className: classnames({
      [size]: true
    })
  }
})`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px 24px;

  &.medium {
    padding-left: 0px;
  }
`

export const Icon = styled(Image)`
  align-items: center;

  ${({ size }) =>
    size === 'large'
      ? 'height: 28px; width: 28px;'
      : 'height: 22px; width: 22px;'}
`

export const Column = styled(Box)`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  position: relative;
  overflow: hidden;

  ${({ image, isMobile }) =>
    image &&
    !isMobile &&
    css`
      width: 70%;
    `}

  &.small {
    align-items: center;
    margin-bottom: 64px;
  }
`
