import styled from 'styled-components'
import { Box, Text } from 'grommet'
import { Heading } from '@tenon-io/tenon-ui'
import { base, fonts } from '@themes'

export const Wrapper = styled(Box)`
  max-width: 500px;

  &.medium {
    max-width: 350px;
  }
`

export const Title = styled(Heading.H)`
  font-size: ${fonts.small.size};
  color: ${base.white};
  margin: 0;
`
export const Description = styled(Text)`
  font-size: ${fonts.small.size};
  color: ${base.white};
  line-height: 1.5;
`
