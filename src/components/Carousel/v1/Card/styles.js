import styled, { css } from 'styled-components'
import classnames from 'classnames'
import { Box, Heading, Text as T } from 'grommet'
import Image from '@components/Image/v1'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'
import ButtonBase from '@components/Button/v2'
import { base } from '@themes'

export const Wrapper = styled(Box)`
  position: relative;
  opacity: ${({ opacity }) => opacity};
  &:not(.small) {
    flex-direction: row;
  }

  &.large {
    min-height: 70vh;
  }

  &.medium {
    max-height: 65vh;
  }

  &.small {
    background: white !important;
  }
`

export const ImageWrapper = styled(Box)`
  &:not(.small) {
    flex-direction: row;
    align-items: flex-end;
    flex: 1;
  }

  &.small {
    flex-grow: 1;
    flex-shrink: 0;
    overflow: hidden;
    max-height: 50vh;
    padding: 24px 24px 0 0px;

    background-color: #cfcfe2;
  }
`

export const Img = styled(Image)`
  object-fit: contain;
  opacity: ${({ $opacity }) => $opacity};
  margin: 0 auto;
  &.small {
    max-height: 50vh;
    width: auto;
  }
  &.medium {
    width: 100%;
    height: 85%;
    width: auto;
  }

  &.large {
    width: 100%;
    height: 85%;
    width: auto;
  }
`
export const IconImage = styled(Image)``

export const Content = styled(Box)`
  &.large {
    display: grid;
    grid-template-columns: 1fr 6fr 1fr;
    grid-template-rows: 1fr 1fr 4fr;
    min-height: 300px;
    justify-content: center;
    align-items: baseline;
  }

  &.medium {
    padding: 0 40px 0 10px;
  }

  &.small {
    min-height: 20vh;
    padding: 20px 0;
  }
`

export const ContentWrapper = styled(Box)`
  justify-content: center;
  align-items: stretch;

  &:not(.small) {
    flex: 1;
    flex-shrink: 0;
  }

  &.small {
    padding: 24px;
    width: 100%;
  }
`

export const Main = styled(Box)`
  &.large {
    ${({ index }) =>
      !index &&
      css`
        grid-column-start: 2;
        grid-row-start: 3;
        flex-grow: 1;
      `}
    }
  }

  &.small {
    ${({ content }) => content && css``}
    ${({ index }) =>
      index &&
      css`
        flex-direction: row-reverse;
        align-items: flex-end;
        justify-content: space-between;
        min-height: 0px;
        margin-bottom: 16px;
      `}
  }
`

export const Header = styled(Heading)`
  margin: 0;
  opacity: ${({ opacity }) => opacity};
  line-height: 1.3;

  &.large {
    font-size: 26px;
    grid-column-start: 2;
    grid-row-start: 3;
  }

  &.medium {
    font-size: 22px;
    line-height: 34px;
  }
`

export const Icon = styled(Box)`
  &.small {
    width: 36px;
  }

  &.large {
    width: 54px;
    height: 54px;
    grid-column-start: 2;
    grid-row-start: 2;
  }

  &.medium {
    width: 30px;
  }
`

export const Back = styled(IoArrowBack)`
  height: 34px;
  width: 34px;
  color: ${base.grayish[1]};
  font-weight: bold;

  &:hover {
    color: ${base.secondaryBtnPurple};
  }
`

export const Next = styled(IoArrowForward)`
  height: 34px;
  width: 34px;
  color: ${base.grayish[1]};
  font-weight: bold;

  &:hover {
    color: ${base.secondaryBtnPurple};
  }
`

export const Text = styled(T).attrs(({ index }) => ({
  className: classnames({
    index
  })
}))`
  &.index {
    &.large {
      grid-column-start: 2;
      grid-column-end: 2;
      font-size: 14px;
    }

    &.medium {
      margin-bottom: 30px;
    }
    font-weight: 600;
    color: ${base.grays.dark};
  }
`

export const Button = styled(ButtonBase)`
  grid-row-start: 3;

  &.next {
    grid-column-start: 3;
  }
`
