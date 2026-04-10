import styled from 'styled-components'
import { Box, Heading } from 'grommet'

export const Head = styled(Box)`
  &:not(.small) {
    padding: 48px 0 0;
  }

  &.large {
    flex-direction: row;
    min-height: 15vh;
    padding-bottom: 0;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;

    & h3 {
      max-width: 240px;
      padding-bottom: 15px;
    }
  }
`

export const Wrapper = styled(Box)`
  &.large {
    max-width: 250px;
    flex: 1;
  }

  &.medium {
    padding: 0 48px 24px;
  }

  &.small {
    width: 100%;
    padding: 0 24px 24px;
  }
`

export const Header = styled(Heading)``
