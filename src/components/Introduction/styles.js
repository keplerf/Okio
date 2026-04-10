import styled from 'styled-components'
import { Image as Img, Heading, Box, Video as Vid } from 'grommet'
import { base } from '@themes'

export const Image = styled(Img)`
  width: 100%;
`

export const Title = styled(Heading)`
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;

  .large & {
    font-size: 26px;
  }
`

export const Subtitle = styled(Heading)`
  color: ${base.grayish[5]};
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;

  .small & {
    font-size: 16px;
  }
`

export const Video = styled(Vid)`
  margin-left: -25%;
  width: 150%;
  max-width: inherit;
`

export const Wrapper = styled(Box)`
  text-align: center;
  background-size: auto 70%;
  justify-content: center;
  min-height: calc(100vh - 48px);

  &.large,
  &.medium {
    & > .text-container {
      position: absolute;
      justify-content: center;
      align-items: center;
      width: 100vw;
    }
  }

  &.small {
    background: none;
    min-height: initial;
  }
`
