import styled from 'styled-components'
import { Accordion as A, Box, Heading } from 'grommet'
import Image from '@components/Image/v1'
import classNames from 'classnames'
import { base } from '@themes'

export const HeadingWrapper = styled(Box)`
  ${({ size }) => (size === 'small' ? 'padding-left: 24px;' : '')}
`

export const Header = styled(Heading)`
  font-size: ${({ size }) => (size === 'large' ? '22' : '16')}px;
  line-height: 1.5;
  font-weight: 600;
  color: ${base.black};
  max-width: ${({ size }) => (size === 'small' ? '50%' : 'none')};
`

export const Subtitle = styled(Heading)`
  font-size: ${({ size }) => (size === 'large' ? '19' : '16')}px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 17px;
`

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`

export const Accordion = styled(A)`
  width: 100%;
  border-bottom: solid ${base.black} 0.8px;
  padding-bottom: 1px;
`

export const DottedCircle = styled(Image).attrs(({ size, active }) => ({
  className: classNames({
    [size]: true,
    active
  })
}))`
  position: absolute;
  top: -50%;
  right: 50%;
  width: 80%;
  height: 80%;
  z-index: 9;
  pointer-events: none;

  &.active {
    top: 50%;
    right: 60%;
  }

  &.small {
    top: 50%;
    left: 50%;
  }
`
