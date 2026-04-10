import styled from 'styled-components'
import { Heading, Paragraph } from 'grommet'
import { base } from '@themes'
import { Section as Sec } from '@primitives'
import Image from '@components/Image/v2'

export const Section = styled(Sec)`
  background: ${base.almostWhite};
`

export const Title = styled(Heading)`
  color: ${base.black};
  font-size: 31px;
  line-height: 1.2;
  font-weight: 600;
  text-align: center;
  display: block;
  margin: 0 auto;

  .large & {
    font-size: 65px;
    line-height: 1.2;
  }
`

export const Subtitle = styled(Paragraph)`
  text-align: center;
  color: ${base.black};
  font-size: 15px;
  line-height: 1.5;
  display: block;
  font-weight: normal;
  margin: auto;
  min-width: 90%;

  .large & {
    font-size: 18px;
  }
`

export const Img = styled(Image)`
  margin: 7% auto;
  width: 70%;
  height: auto;
  max-width: 450px;
  text-align: center;
`
