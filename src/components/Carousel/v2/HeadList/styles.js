import styled from 'styled-components'
import classnames from 'classnames'
import { Box, Text as T, Heading, Menu as M } from 'grommet'
import Image from '@components/Image/v1'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'
import ButtonBase from '@components/Button/v2'
import { base, fonts } from '@themes'

export const Menu = styled(M)`
  border-radius: 0px;
  background-color: ${base.almostWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80px;
  width: 100%;
  color: ${base.purple};

  &.medium {
    & > div {
      font-size: 18px;
      padding: 12px 24px;
    }
  }

  padding: 12px 24px;

  & > div {
    padding: 0px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
  }
`

export const DownIcon = styled(Image)`
  width: 20px;
  height: 20px;
`

export const Wrapper = styled(Box)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`

export const Back = styled(IoArrowBack)`
  height: 28px;
  width: 28px;
  color: ${base.grayish[1]};
  font-weight: bold;

  &:hover {
    color: ${base.secondaryBtnPurple};
  }
`

export const Next = styled(IoArrowForward)`
  height: 28px;
  width: 28px;
  color: ${base.grayish[1]};
  font-weight: bold;

  &:hover {
    color: ${base.secondaryBtnPurple};
  }
`

export const Title = styled(Heading).attrs(({ selected }) => ({
  className: classnames({
    selected
  })
}))`
  font-weight: 600;
  font-size: 16px !important;
  color: ${base.text};
  text-align: start;

  .large & {
    max-width: 200px;
  }

  &.selected {
    color: ${base.deepPurple};
  }
`

export const Block = styled(Box)`
  flex-grow: 1;
  max-height: 300px;
  max-width: 250px;
  flex: 1;
  padding: 12px;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
`

export const Text = styled(T).attrs(({ index, selected }) => ({
  className: classnames({
    index,
    selected
  })
}))`
  font-weight: 600;
  color: ${base.text};
  font-size: 16px;

  &.index {
    font-size: 14px;
    color: ${base.grays.contrast};
  }

  &.selected {
    color: ${base.deepPurple} !important;
  }
`

export const ItemWrapper = styled(Box)`
  flex-direction: row;
  align-items: flex-start;
`

export const Item = styled(T)`
  font-size: 14px;
  font-weight: 600;
  color: ${base.darkUINav};

  :not(.label) {
    line-height: ${fonts.xlarge.height};
    margin: 6px 0px;
  }

  &.label {
    color: ${base.purple};
  }
`

export const Selectable = styled(ButtonBase).attrs(({ selected }) => ({
  className: selected && 'selected'
}))`
  height: 100px !important;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 48px;

  & > * {
    text-overflow: ellipsis;
  }

  & > ${Text}, ${Title} {
    &.selected {
      color: ${base.deepPurple};
    }
    color: ${base.grays.contrast};
    line-height: 1.4;
    &:hover,
    &:focus {
      color: ${base.purple};
    }
  }
`
