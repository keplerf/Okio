import styled from 'styled-components'
import BaseLink from '@components/Link'
import { Text, Box, Heading as H } from 'grommet'
import { Header as Head } from '@components/PrivacyPolicy/styles'
import { base } from '@themes'

export const List = styled(Box)``

export const Item = styled(Text)`
  &.title {
    margin-bottom: 2px;
  }

  &.subtitle {
    font-weight: 600;
  }
`

export const Link = styled(BaseLink)`
  & > span {
    font-size: 13px;
    color: ${base.secondaryBtnPurple};
  }
  padding: 1px 0px;
`

export const Header = styled(Head)`
  font-size: 45px;
`

export const Heading = styled(H)`
  font-size: 36px;
`
