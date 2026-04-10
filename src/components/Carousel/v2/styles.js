import styled from 'styled-components'
import { Box, Heading, Paragraph } from 'grommet'
import { base } from '@themes'

export const Title = styled(Heading)`
  color: ${base.black};
  font-size: 31px;
  line-height: 1.2;
  font-weight: 600;
  text-align: center;
  display: block;
  margin: 0 auto;

  .large & {
    font-size: 65px;
    line-height: 1.2;
  }

  &.small,
  &.medium {
    width: 80%;
  }
`

export const SubTitle = styled(Paragraph)`
  text-align: center;
  color: ${base.black};
  font-size: 15px;
  line-height: 1.5;
  display: block;
  font-weight: normal;
  margin: 15px auto 30px;
  min-width: 90%;

  .large & {
    font-size: 18px;
  }

  &.small,
  &.medium {
    width: 80%;
  }
`

export const Head = styled(Box)`
  &.large {
    flex-direction: row;
    min-height: 15vh;
    padding-bottom: 0;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;

    & h3 {
      max-width: 240px;
      padding-bottom: 0px;
    }
  }
`

export const Wrapper = styled(Box)`
  .large & {
    max-width: 250px;
    flex: 1;
  }

  .medium & {
    padding: 0 48px 24px;
  }

  .small & {
    width: 100%;
    padding: 0 24px 24px;
  }
`

export const Label = styled(Heading)``
