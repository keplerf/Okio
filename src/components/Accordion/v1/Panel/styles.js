import styled from 'styled-components'
import classnames from 'classnames'
import { AccordionPanel, Box, Heading, Paragraph } from 'grommet'
import Image from '@components/Image/v1'
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

export const Title = styled(Heading).attrs(({ $label }) => ({
  className: classnames({
    label: $label
  })
}))`
  font-weight: 600;
  font-size: 26px;
  color: ${base.deepPurple};
  margin: 0px;

  &.small {
    font-size: 24px;
  }
  &.label {
    color: ${base.text};
  }
`

export const Pane = styled(AccordionPanel)`
  width: 100%;
  pointer-events: none;
`

export const Wrapper = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;

  & a {
    color: ${base.purple};
    font-weight: 600;
  }
`

export const Content = styled(Paragraph)`
  color: ${base.text};
  font-size: ${fonts.medium.size};
  margin: 8px 0px;
`

export const Header = styled(Box).attrs(({ isCurrent, size }) => {
  return {
    className: classnames({
      current: isCurrent,
      [size]: true
    })
  }
})`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding: 24px 24px;

  &.medium {
    padding-left: 0px;
  }

  &.current {
    opacity: 0;
    height: 0px;
    padding: 0px 24px;
    font-size: 0;
  }
  transition: ease 0.25s;
`

export const ExpandIcon = styled(Image)`
  ${({ size }) =>
    size === 'large'
      ? 'height: 25px; width: 25px;'
      : 'height: 17px; width: 17px;'}
`

export const CollapseIcon = styled(Image)`
  position: absolute;
  top: 33px;
  right: 25px;
  cursor: pointer;
  transform: scale(1);
  display: flex;
  justify-content: center;

  & svg {
    height: ${({ size }) => (size === 'large' ? '25' : '17')}px;
  }

  ${({ size }) =>
    size === 'large'
      ? 'height: 25px; width: 25px;'
      : 'height: 17px; width: 17px;'}
`

export const Column = styled(Box)`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  position: relative;
  overflow: hidden;
`
