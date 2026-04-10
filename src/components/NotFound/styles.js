import styled from 'styled-components'
import { Box, Paragraph } from 'grommet'
import Image from '@components/Image/v1'
import { Heading } from '@tenon-io/tenon-ui'
import { fonts } from '@themes'

export const Wrapper = styled(Box)`
  width: 100%;
  align-items: center;
  gap: 12px;

  &.small {
    gap: 12px;
  }
`

export const Icon = styled(Image)`
  width: 48px;
  height: 48px;
`

export const Title = styled(Heading.H)`
  letter-spacing: -3px;
  line-height: 1.2;
  text-align: center;
  font-weight: 600;
  font-size: 45px;

  &.large {
    max-width: 45%;
  }

  &.small {
    font-size: 36px;
  }
`
export const Description = styled(Paragraph)`
  width: 100%;
  font-size: ${fonts.medium.size};
  font-weight: 600;
  text-align: center;
`
