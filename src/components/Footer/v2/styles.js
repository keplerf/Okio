import { Box, Text } from 'grommet'
import Logo from './Logo'
import styled, { css } from 'styled-components'
import { base, fonts } from '@themes'

export const LeftColumn = styled(Box)`
  width: 100%;
`
export const RightColumn = styled(Box)`
  width: 100%;
  height: 100%;
  align-items: center;
  padding-top: 64px;
`

export const Wrapper = styled(Box)`
  height: 100%;
  width: 100%;
  background-color: ${base.darkUIPurple};
`

export const StyledLogo = styled(Logo)`
  height: 28px;
  width: 768px;
`

export const FormHeader = styled(Text)`
  color: #e5e5e5;
  font-size: ${fonts.medium.size};

  ${({ large }) =>
    large &&
    css`
      margin-left: -95px;
    `}
`
export const Content = styled(Text)`
  color: ${base.white};

  font-weight: 600;
  ${({ large }) =>
    large &&
    css`
      margin: 6px 0;
    `}
`
