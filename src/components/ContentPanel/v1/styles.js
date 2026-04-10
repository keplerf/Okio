import styled from 'styled-components'
import { Grid, Box, Text } from 'grommet'
import Image from '@components/Image/v1'
import BackgroundImage from 'gatsby-background-image'
import { fonts } from '@themes'

export const Logo = styled(Image)`
  width: 310px;
  height: 32px;
  align-self: start;

  .small & {
    max-width: 80%;
  }
`

export const CardImage = styled(BackgroundImage)`
  width: 100%;
  min-height: 450px;
  background-position: center center;
  background-size: cover;

  &.small {
    &::before,
    &::after {
      max-height: 300px;
    }
  }
`

export const TextContent = styled(Text)`
  line-height: 1.5;
  padding-bottom: 20px;
  font-size: ${fonts.medium.size};
  strong {
    font-weight: 600;
    display: block;
    padding: 0;

    .large & {
      max-width: 280px;
    }
  }

  .large & {
    max-width: 95%;
  }
`

export const Content = styled(Box)`
  flex-shrink: 0;

  &.small {
    margin-top: 48px;
  }

  &.large {
    padding: 48px;
  }

  &.medium {
    padding: 30px;
  }
`

export const Wrapper = styled(Grid)`
  align-items: center;
`
