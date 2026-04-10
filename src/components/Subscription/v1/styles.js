import styled from 'styled-components'
import { Box, Text } from 'grommet'
import { base, fonts } from '@themes'

export const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: start;

  &.large {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 12px;
  }
`

export const HeaderContent = styled(Text)`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  line-height: 1.4;
  display: inline-block;

  &.large,
  &.medium {
    font-size: 40px;
    max-width: 400px;
  }
`

export const SimpleParagraph = styled(Box)`
  font-size: ${fonts.medium.size};
  text-align: center;
  line-height: 1.7;
  padding: 0px 5px 25px 5px;
`

export const Paragraph = styled(Box)`
  font-size: ${fonts.medium.size};
  text-align: center;
  line-height: 1.7;
  padding: 10px 0px 0px 0px;
  margin: 0 auto;
  color: ${base.grays.dark};
  max-width: 800px;
  display: grid;

  h2 {
    font-size: ${fonts.medium.size};
    font-weight: 600;
    background: ${base.almostWhite};
    padding: 18px 20%;
    border-radius: 20px;
    margin: 0;
    display: block;
    margin: 0 0 25px 0;
    max-width: 920px;
  }

  h3 {
    font-weight: 600;
    color: ${base.grayish[5]};
    font-size: 25px;
    padding-bottom: 10px;
    text-align: center;
    margin-bottom: 0;
    i {
      font-size: 10px;
      font-weight: 600;
    }
    b {
      color: ${base.darkUIPurple};
      font-weight: 600;
    }
  }

  b {
    font-weight: 600;
    color: ${base.grays.dark};
  }
  h4 {
    font-size: ${fonts.medium.size};
    color: ${base.grayish[1]};
    font-weight: 600;
    text-align: left;
    padding-bottom: 5px;
  }
  ul {
    text-align: left;
    list-style: none;
    margin: 0 0 25px 0;
    padding: 0;
  }
  li {
    vertical-align: middle;
    padding-left: 15px;

    &:before {
      content: '';
      display: inline-block;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: black;
      margin-bottom: 3px;
      margin-right: 10px;
      font-size: 0;
      position: absolute;
      top: 5px;
      left: 0;
    }
    & > div {
      margin: 0;
      padding: 0;
      display: inline-block;
      text-align: left;
      color: ${base.grays.dark};
    }
  }

  &.large,
  &.medium {
    font-size: ${fonts.medium.size};
    padding: 40px 0;
    max-width: 980px;
    margin: auto;
  }
`

export const Header = styled(Box)`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-self: center;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled(Box)``
