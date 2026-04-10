import styled, { css } from 'styled-components'
import { Box } from 'grommet'

export const Wrapper = styled(Box)`
  background-image: url('${({ imageUrl }) => imageUrl}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

export const Circle = styled(Box)`
  position: absolute;
  border: ${({ diameter }) => diameter / 15}px solid #e5e7ff;
  border-radius: 50%;
  opacity: 0;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  animation: pulse 3s infinite;

  ${({ delay }) =>
    delay &&
    css`
      animation: pulse 3s ${delay}ms infinite;
    `}

  @keyframes pulse {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0.5;
    }
    100% {
      opactiy: 0;
    }
  }
`
