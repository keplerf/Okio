import styled, { css } from 'styled-components'
import { lighten } from 'polished'
import {
  Card as C,
  CardBody,
  CardHeader,
  CardFooter,
  Text,
  Paragraph as P
} from 'grommet'
import { base, fonts } from '@themes'

export const CrossedPrice = styled(Text)`
  color: ${base.grayish[1]};
  text-decoration: line-through;
`

export const Card = styled(C)`
  border-radius: 20px;
  width: 100%;
  margin: 16px 0;

  &.small {
    margin: 16px 0;
  }

  &.large {
    flex: 1;
    height: 480px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;

  .medium & {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 12px;
  }
`

export const Body = styled(CardBody)`
  .large & {
    padding-bottom: 0px;
  }

  & > ul {
    padding-inline-start: 30px;
    margin-top: 5px;
    padding-right: 15px;
  }

  li {
    padding-bottom: 5px;
  }

  & p {
    font-weight: 600;
    font-size: ${fonts.medium.size};
  }
`

export const Footer = styled(CardFooter)`
  .large & {
    padding-top: 0px;
  }

  &.medium {
    justify-content: center;
  }
`

export const Paragraph = styled(P)`
  & > b {
    font-weight: 600;
    color: ${base.grayish[1]};
  }
  font-size: ${fonts.medium.size};
  line-height: 20px;
  margin: 0;
  font-weight: normal;
`

export const Item = styled.li`
  & > * {
    font-weight: normal !important;
  }
`

export const Head = styled(CardHeader)`
  background: ${({ base }) => base};

  ${({ index, base }) =>
    index === 0 &&
    css`
      background: ${lighten(0.15, base)} !important;
    `}

  ${({ index, base }) =>
    index === 1 &&
    css`
      background: ${lighten(0.08, base)} !important;
    `}
`
