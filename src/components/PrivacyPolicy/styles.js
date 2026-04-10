import styled from 'styled-components'
import classnames from 'classnames'
import { Box, Paragraph, Grid as G } from 'grommet'
import { base } from '@themes'
import { IoArrowBack } from 'react-icons/io5'

export const Grid = styled(G)`
  width: 100%;
  flex: 1;
`

export const Header = styled.h1`
  line-height: ${({ size }) => (size === 'small' ? '0.5' : '1.5')};
  font-size: ${({ size }) => (size === 'large' ? '45' : '36')}px;
  font-weight: 600;
  letter-spacing: -2px;
  line-height: 1;
  color: ${base.black};
`

export const Icon = styled(IoArrowBack)`
  height: 28px;
  width: 28px;
  color: ${base.purple};
  font-weight: bold;

  &:hover {
    color: ${base.secondaryBtnPurple};
  }
`

export const Primary = styled(Box)`
  &.large {
    margin-bottom: 48px;
  }
`

export const Wrapper = styled(Box)`
  display: block;
  & > #back {
    display: inline;
  }
`

export const Description = styled(Paragraph).attrs(({ block }) => ({
  className: classnames({
    block
  })
}))`
  font-size: 12px;

  margin: 0;
  max-width: 100%;
  word-wrap: break-word;

  &.large {
    &:not(.block) {
      font-size: 14px;
    }
    font-size: 13px;
  }
`
