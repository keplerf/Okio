import styled from 'styled-components'
import { Box } from 'grommet'

export const Form = styled(Box)`
  & > * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export const IframeWrapper = styled(Box)`
  position: relative;
  width: 100%;
  &.large,
  &.medium {
    width: 100%;
    /* padding-top: 100%; */
  }
  &.medium {
    /* padding-top: 300px; */
  }
`

export const Group = styled(Box)`
  &.small {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Frame = styled.iframe`
  box-sizing: content-box;
  border: none;
  min-height: 300px;

  .large & {
    min-width: 350px;
    border: none;
    transform: translate(35px, 0);
    z-index: 9999;
    /* position: absolute; */
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    /* padding-right: 40px; */
  }
`
