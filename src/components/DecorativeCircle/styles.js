import styled from 'styled-components'
import classnames from 'classnames'
import { Box as B } from 'grommet'

export const Box = styled(B).attrs(({ product }) => ({
  className: classnames({
    product
  })
}))`
  &:not(.product) {
    overflow: hidden;
    position: relative;
    &:after {
      @media (min-width: ${(props) =>
          props.theme ? props.theme.breakpoints.small.value + 'px' : '600px'}) {
        z-index: -2;
        position: absolute;
        left: 55%;
        top: -55%;
        display: block;
        content: '';
        width: 50%;
        height: 80%;
        background: ${(props) =>
          props.data
            ? 'url(' +
              props.data.circleDotted.file.url +
              ') bottom left 60% no-repeat'
            : 'none'};
        overflow: hidden;
        background-size: cover;
      }
    }
  }

  z-index: 1;
  background-color: #ffff;
  overflow-x: hidden;
`
