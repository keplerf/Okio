import styled from 'styled-components'
import { Box } from 'grommet'
import { base } from '@themes'

export const Large = styled(Box)`
  border-left: 1px solid ${base.grays.mlight};
  width: 1px;
  height: 140px;
`

export const Mobile = styled(Box)`
  border-bottom: 1px solid ${base.grays.mlight};
  height: 1px;
  width: 100%;
`
