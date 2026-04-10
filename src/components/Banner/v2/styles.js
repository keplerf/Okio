import styled from 'styled-components'
import { Box as B, Heading, Text } from 'grommet'
import { fonts } from '@themes/'

export const Box = styled(B)`
  min-height: 148px;
  align-items: center;
  justify-content: center;

  &.small {
    flex-direction: column;
  }

  & a {
    &:hover {
      text-decoration: none;
    }
  }
`

export const Title = styled(Heading)`
  font-size: 26px;
  line-height: 32px;
  text-align: center;
  color: ${({ color }) => color};
  font-weight: 600;
`

export const Subtitle = styled(Text)`
  text-align: center;
  font-size: ${fonts.medium.size};
  line-height: 23px;
  margin-top: 12px;
`
