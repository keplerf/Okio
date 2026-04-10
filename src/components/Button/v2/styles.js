import styled from 'styled-components'
import classnames from 'classnames'
import Link from '@components/Link'
import { radius, base, fonts } from '@themes'

export const Btn = styled(Link).attrs(
  ({ appearance, internal, toast, footer, cta, size }) => ({
    className: classnames('okyo-button', {
      primary: appearance === 'primary',
      secondary: appearance === 'secondary',
      tertiary: appearance === 'tertiary',
      header: appearance === 'header',
      text: appearance === 'text',
      large: size === 'large',
      internal,
      toast,
      footer,
      cta
    })
  })
)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 6px 20px;
  border: 1px solid transparent;
  border-radius: ${radius.small};
  font-weight: 600;
  cursor: pointer;
  font-size: ${fonts.medium.size};
  text-decoration: none;

  & > * {
    font-weight: 600;
  }

  &.cta {
    min-width: 290px;
  }

  &.large {
    padding: 15px 20px;
  }

  &.header {
    color: ${base.black};
    background-color: ${base.purple};
    &:hover,
    &:focus {
      background-color: ${base.secondaryBtnPurple};
    }
  }

  &.primary {
    color: ${({ color }) => color ?? base.white};
    background-color: ${base.purpleContrast};
    transition: all 0.5s;
    align-items: center;
    &:hover,
    &:focus {
      background-color: ${base.purple};
    }

    .header & {
      color: ${base.black};
      background-color: ${base.purple};
      padding: 6px 15px;
      &:hover,
      &:focus {
        background-color: ${base.grayish[1]};
      }
      &:active {
        background-color: ${base.palePurple};
      }
    }

    padding: 15px 20px;

    /* MOBILE */
    @media only screen and (max-width: 600px) {
      min-width: inherit;
      width: 75%;
      margin-right: auto;
      margin-left: auto;
    }

    /* Tablet */
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
      width: 290px;
      margin: 0 auto;
    }

    .large & {
      padding: 5px 20px;
    }
  }

  &.secondary {
    color: ${base.white};
    background-color: ${base.secondaryBtnPurple};
    &:hover,
    &:focus {
      background-color: ${base.purple};
    }
  }

  &.tertiary {
    color: ${base.white};
    background-color: #3d3d6f;
    &:hover,
    &:focus {
      background-color: ${base.secondaryBtnPurple};
    }
  }

  &.text {
    color: ${({ color }) => color ?? base.white};
    background-color: transparent;
    border: none;
    padding: 0;
    font-size: 12px;

    &:hover,
    &:focus {
      text-decoration: underline;
    }

    &.toast {
      font-weight: 600;
      text-decoration: underline;
      &:hover,
      &:focus {
        color: ${base.secondaryBtnPurple};
      }
    }

    &.footer {
      font-weight: 600;
      height: 28px;
      &:hover {
        text-decoration: none;
        color: ${base.secondaryBtnPurple};
      }
    }
  }
`
