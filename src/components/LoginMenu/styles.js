import styled, { css } from 'styled-components'
import { radius, base } from '@themes'
import Btn from '@components/Button/v2'

export const Button = styled(Btn)`
  &.large {
    height: none;
  }
`

export const LoggedInButton = styled.button`
  background-color: ${base.palePurple};
  color: ${base.purpleContrast};
  border-radius: ${radius.circle};
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
`

export const Drawer = styled.ul`
  background-color: ${base.palePurple};
  position: absolute;
  display: none;
  list-style-type: none;
  padding: 0;
  width: 150px;
  border-radius: ${radius.small};

  li {
    a {
      justify-content: left;
      color: ${base.text};
    }
  }

  ${(props) =>
    props.open &&
    css`
      display: block;
    `}
`
