import styled from 'styled-components'
import BaseLink from '@components/Link'
import { Text, Box } from 'grommet'
import { base } from '@themes'

export const List = styled(Box)``

export const Item = styled(Text)`
  &.title {
    margin-bottom: 2px;
  }

  &.subtitle {
    font-weight: 600;
  }
`

export const Link = styled(BaseLink)`
  & > span {
    font-size: 13px;
    color: ${base.secondaryBtnPurple};
  }
  padding: 1px 0px;
`

export const BackToTop = styled(Box)`
  position: fixed;
  width: 60px;
  height: 60px;
  top: 64px;
  right: 16px;
  background-color: ${base.darkUIPurple};
  color: ${base.white};
  opacity: ${({ showButton }) => (showButton ? '1' : '0')};
  transition: opacity 1s;
  border-radius: 50px;
  text-align: center;
  cursor: ${({ showButton }) => (showButton ? 'pointer' : 'default')};
  display: flex;
  justify-content: center;
  line-height: 1;
  font-weight: 600;
  font-size: 12px;
  text-wrap: contain;
  transition: transform 0.16s linear 0s, opacity 0.08s linear 0s;
  z-index: 11;
`
