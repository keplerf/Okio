import styled, { css } from 'styled-components'
import { Box } from 'grommet'
import { Heading } from '@tenon-io/tenon-ui'
import { fonts } from '@themes/'

export const Wrapper = styled(Box)`
  &.double {
    height: inherit;

    ${({ size }) =>
      size === 'small' &&
      css`
        justify-content: center;
        align-items: center;
      `}
  }
`

export const ButtonWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
  bottom: 0px;
  margin-top: auto;
`

export const Title = styled(Heading.H)`
  color: ${({ color }) => color};
  font-size: 18px;
  line-height: 32px;
  text-align: center;

  &.double {
    font-size: ${({ size }) => (size === 'small' ? '16' : '14')}px;
    font-weight: 600;
    line-height: 1;
  }
`

export const Description = styled(Heading.H)`
  color: ${({ color }) => color};
  text-align: center;
  font-size: ${fonts.medium.size};
  line-height: 23px;

  &.double {
    font-weight: normal;
    max-width: 350px;
  }
`
