import styled from 'styled-components'
import classnames from 'classnames'
import { Box } from 'grommet'
import Button from '@components/Button/v2'
import { base, fonts } from '@themes'

export const Outer = styled(Box).attrs(({ size, $allowed }) => ({
  className: classnames({
    [size]: true,
    allowed: $allowed
  })
}))`
  background-color: ${base.purpleContrast};
  position: fixed;
  bottom: 0px;
  min-height: 25vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  transition: bottom 800ms;
  padding: 48px;

  &.small {
    padding: 34px;
  }

  &.large {
    min-height: 20vh;
  }

  &.allowed {
    bottom: -100vh;
  }
`

export const Inner = styled(Box)`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 75px;

  .small & {
    flex-direction: column;
    gap: 28px;
    width: 100%;
  }
`

export const Confirm = styled(Button)`
  align-self: center;
  font-size: ${fonts.medium.size};
  height: auto;
  width: auto;

  .small & {
    align-self: flex-start;
  }

  .medium & {
    align-self: flex-end;
  }

  .large & {
    top: 12px;
  }
`
