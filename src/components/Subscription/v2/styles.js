import styled from 'styled-components'
import { base, fonts } from '@themes'
import Image from '@components/Image/v2'

export const Content = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
`

export const Img = styled(Image)`
  width: 80%;
  margin: auto;
  display: block;
  max-width: 500px;

  &.medium {
    max-width: 40vw;
  }

  &.large {
    width: 300px;
    right: 10px;
    bottom: 30px;
    position: absolute;
  }
`

export const HeaderContent = styled.h2`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  line-height: 1.4;
  display: inline-block;

  &.large,
  &.medium {
    font-size: 40px;
  }
`

export const SimpleParagraph = styled.div`
  font-size: ${fonts.medium.size};
  text-align: center;
  line-height: 1.7;
  padding: 0px 5px 25px 5px;
`

export const Paragraph = styled.div`
  font-size: ${fonts.medium.size};
  line-height: 1.7;
  padding: 10px 0px 0px 0px;
  margin: 0 auto;
  color: ${base.grays.dark};
  width: 100%;

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

  h4 {
    font-size: ${fonts.medium.size};
    color: ${base.grayish[6]};
    font-weight: 600;
    text-align: left;
    padding-bottom: 15px;
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
    position: relative;

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
    padding: 40px 15% 40px 0px;
    width: 80%;
    margin: auto;
    max-width: 900px;
  }
`

export const Header = styled.div`
  margin: 0 auto;
  padding: 30px 0;
  text-align: center;

  h2 {
    padding: 20px 0;
  }

  &.large,
  &.medium {
    max-width: 70%;
  }
`
