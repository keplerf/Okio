import styled from 'styled-components'
import { Text } from 'grommet'
import { Section, Inner as I } from '@primitives'

export const Wrapper = styled(Section)`
  position: relative;
  overflow: hidden;
  align-items: flex-end;

  &:not(.small) {
    justify-content: flex-end;
  }

  &.medium,
  &.small {
    min-height: 100vh;
    overflow: hidden;
  }
`

export const Inner = styled(I)`
  .large &,
  .medium & {
    padding-left: inherit;
    position: absolute;
    bottom: calc(10% + 5vh);
    left: 0;
  }
`

export const Title = styled(Text)`
  font-size: 24px;
  line-height: 31px;
  font-weight: 600;
  color: white;
  display: block;

  .large & {
    font-size: 40px;
    line-height: 47px;
  }

  .large &,
  .medium & {
    padding: 0 35px;
  }
`
