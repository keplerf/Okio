import styled from 'styled-components'
import { Box, Text } from 'grommet'
import Image from '@components/Image/v1'

export const HeroComponent = styled(Box)`
  position: relative;
  &.large {
    background-size: cover;
  }
`
export const Wrapper = styled(Box)`
  min-height: calc(100vh - 48px);
  margin: 0 auto;
  position: relative;

  .large &,
  .medium & {
    top: calc(2vh + 30px);
  }
`

export const Title = styled(Text)`
  color: white;
  font-size: 33px;
  line-height: 1.2;
  font-weight: 600;
  .large & {
    font-size: 65px;
    line-height: 1.2;
  }
`
export const Subtitle = styled(Text)`
  color: white;
  font-size: 15px;
  line-height: 1.5;
  font-weight: 600;
  display: block;
  max-width: 90%;
  .large & {
    font-size: 18px;
    line-height: 1.5;
    display: block;
    max-width: 430px;
  }
`

export const Logo = styled(Image)`
  position: absolute;
  bottom: 80px;
  align-self: start;
  width: 110px;
  height: 21px;
`
