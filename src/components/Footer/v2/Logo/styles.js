import styled from 'styled-components'
import { Box } from 'grommet'
import Image from '@components/Image/v1'

export const Wrapper = styled(Box)`
  justify-content: start;
  flex-direction: row;
  max-height: ${({ large }) => (large ? '32' : '27.5')}px;
`

export const StyledImage = styled(Image)`
  object-position: left;
  object-fit: contain;
  width: 312px;
  height: 28px;
`
