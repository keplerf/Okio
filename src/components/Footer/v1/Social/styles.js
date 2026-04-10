import { Nav } from 'grommet'
import Image from '@components/Image/v1'
import styled from 'styled-components'

export const Wrapper = styled(Nav)`
  .large &,
  .medium & {
    position: absolute;
    top: 380px;
    right: 80px;
  }
  z-index: 1;
  &:first-child {
    padding-left: 0px;
  }
  &:last-child {
    padding-right: 0px;
  }
`

export const Icon = styled(Image)`
  color: white;
  height: 20px;
  width: 20px;
  ${({ isSmall }) =>
    isSmall
      ? `
  height: 20px;
  width: 20px;
  margin: 0px 4px;

  `
      : ''}px;
`
