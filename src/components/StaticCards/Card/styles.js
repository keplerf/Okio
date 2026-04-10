import styled from 'styled-components'
import { Box, Text } from 'grommet'
import { Heading } from '@tenon-io/tenon-ui'
import { base } from '@themes'
import Image from '@components/Image/v1'

export const Title = styled(Heading.H)`
  font-size: ${({ $isMobile }) => ($isMobile ? '24' : '26')}px;
  line-height: 1.25;
  font-weight: 600;
  text-align: left;
  color: ${base.deepPurple};
`

export const SubTitle = styled(Text)`
  font-size: 14px;
  line-height: 1.25;
  font-weight: 600;
  text-align: left;
`

export const Content = styled(Box)`
  width: ${({ $isMobile }) => ($isMobile ? '100' : '70')}%;
  padding: ${({ $isMobile }) => ($isMobile ? '24' : '0')}px;
  gap: 15px;
`

export const Icon = styled(Image)`
  align-self: start;
  width: 47px;
  height: 47px;
`

export const CardImage = styled(Box)`
  min-height: 300px;
  .medium & {
    min-height: 430px;
  }
  .large & {
    min-height: 768px;
  }
`
