import styled from 'styled-components'
import { Header, Box } from 'grommet'
import Image from '@components/Image/v1'
import { base } from '@themes'

export const Account = styled(Box)`
  align-items: flex-start;
  font-size: 18px;
  margin-top: 40px;

  & > a {
    color: #babaee;
    &:first-child {
      margin-bottom: 12px;
    }
  }
`

export const Links = styled(Box)``

export const HamburgerIcon = styled(Image)`
  height: 17px;
  width: 22px;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`

export const Wrapper = styled(Header)`
  background-color: #242238;
  position: sticky;
  top: 0px;
`

export const Logo = styled(Image)`
  object-fit: contain;
  height: 48px;
  width: 117px;
`

export const LogoWrapper = styled(Box)`
  height: 48px;
  max-width: 116px;
`

export const DropdownMenu = styled(Box)`
  .small &,
  .medium & {
    left: -100vw;
    transition: all 0.3s ease;
    width: 100vw;
    background: ${base.darkUIPurple};
    position: absolute;
    top: 48px;
    padding: 40px 30px;
    margin: 0;
    right: 0;
    nav {
      min-height: 350px;
      height: 100%;
    }

    a {
      align-items: flex-start;
      justify-content: flex-start;
      font-size: 18px;
      height: initial;

      & :hover {
        text-decoration: none;
      }
      & :hover,
      & :focus {
        &:not(.secondary) {
          color: ${base.secondaryBtnPurple};
        }
      }
    }

    .loginBtn {
      position: absolute;
      bottom: 20px;
      color: ${base.grayish[1]};
    }
    .active & {
      left: 0;
    }
  }
`

export const CloseIcon = styled(Image)`
  height: 15px;
  width: 15px;
  position: absolute;
  top: 16px;
  right: 18.5px;
  cursor: pointer;
`
