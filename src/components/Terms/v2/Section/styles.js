import styled from 'styled-components'
import { Text, Box, Heading as H } from 'grommet'
import { Header as Head } from '@components/PrivacyPolicy/styles'

export const List = styled(Box)`
  display: grid;
  grid-row-gap: 10px;

  ul {
    list-style: lower-alpha;
  }

  p {
    margin: 15px 0;
  }
`

export const Item = styled(Text)`
  &.title {
    margin-bottom: 2px;
  }

  &.content {
    font-weight: 600;
  }
`

export const Header = styled(Head)`
  font-size: 35px;
  line-height: 1.2;
  .large & {
    font-size: 45px;
  }
`

export const Heading = styled(H)`
  font-size: 26px;
  line-height: 1.2;
  .large & {
    font-size: 36px;
  }
`

export const JumplinkBox = styled(Box)`
  height: 48px;
`

export const Primary = styled(Box)`
  margin-bottom: 48px;
`
