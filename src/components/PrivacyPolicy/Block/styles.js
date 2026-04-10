import styled from 'styled-components'
import { Heading } from '@tenon-io/tenon-ui'
import { base } from '@themes'
import { Text as T } from 'grommet'

export const Header = styled(Heading.H)`
  font-size: 29px;
  font-weight: 600;
  letter-spacing: -1px;
  line-height: 1.5;
  color: ${base.deepPurple};
`

export const Text = styled(T)`
  > p {
    margin-bottom: 15px;
  }

  h3 {
    margin: 20px 0 10px 0;
  }
`
