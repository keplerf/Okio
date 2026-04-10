import styled from 'styled-components'
import { Box } from 'grommet'
import { Heading } from '@tenon-io/tenon-ui'

export const Head = styled(Heading.H)`
  font-size: 24px;
  font-weight: 600;
  align-self: center;
  text-align: center;
  line-height: 1.5;
  margin-top: 0px;
  margin-bottom: 24px;

  &.large {
    font-size: 26px;
  }
`

export const Boxes = styled(Box)`
  &.large,
  &.medium {
    flex-direction: row;
  }
`
