import styled from 'styled-components'
import { Box } from 'grommet'
import Image from '@components/Image/v1'
import BackgroundImage from 'gatsby-background-image'

export const BackgroundImg = styled(BackgroundImage)`
  background-position: 65% 50%;
`

export const StyledBox = styled(Box)`
  padding: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  align-items: center;

  &.small {
    height: 50vh;
  }
`

export const DottedCircle = styled(Image)`
  position: absolute;
  bottom: -10%;
  object-position: center;
  width: min(80vw, 100vh);
  height: min(80vw, 100vh);

  &.small {
    width: min(80vw, 50vh);
    height: min(80vw, 50vh);
  }
`
