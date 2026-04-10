import styled from 'styled-components'
import { Collapsible as C, Box, Anchor } from 'grommet'
import Image from '@components/Image/v1'

export const Collapsible = styled(C)`
  &.large {
    height: 48px;
    z-index: 5;
  }
`

export const Wrapper = styled(Box)`
  background: #d2d1e1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &.small {
    flex-direction: column;
    align-items: center;
  }
`

export const Action = styled(Anchor)`
  text-decoration: underline;
  &:hover,
  &:focus {
    color: #5a63f4 !important;
  }
`

export const CloseIcon = styled(Image)`
  position: absolute;
  height: 15px;
  width: 15px;
  right: 18.5px;
  top: 18.5px;
  cursor: pointer;
`
