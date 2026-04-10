import styled from 'styled-components'
import { Box, Text } from 'grommet'
import Image from '@components/Image/v1'

import { fonts } from '@themes'

export const Logo = styled(Image)`
  width: 450px;
  height: auto;
  align-self: center;
  margin: 30px 0;
  .small & {
    max-width: 100%;
  }
`

export const TextContent = styled(Text)`
  line-height: 1.5;
  padding: 10px 0;
  font-size: ${fonts.medium.size};
  .small & {
    font-size: ${fonts.small.size};
  }
`

export const Content = styled(Box)`
  flex-shrink: 0;
  text-align: center;

  &.small {
    margin: 25px 0;
  }

  &.large {
    padding: 98px 0;
  }

  &.medium {
    padding: 60px 0;
  }
`
