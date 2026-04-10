import styled from 'styled-components'
import { Accordion as A, Box, Heading, Paragraph } from 'grommet'
import { base } from '@themes'

export const HeadingWrapper = styled(Box)`
  ${({ size }) => (size === 'small' ? 'padding-left: 24px;' : '')}
`

export const Title = styled(Heading)`
  color: ${base.black};
  font-size: 31px;
  line-height: 1.2;
  font-weight: 600;
  text-align: center;
  display: block;
  margin: 0 auto;
  max-width: initial;

  .large & {
    font-size: 65px;
    line-height: 1.2;
  }

  &.small,
  &.medium {
    width: 100%;
  }

  &.small {
    margin-top: 48px;
    width: 90%;
  }
`

export const SubTitle = styled(Paragraph)`
  text-align: center;
  color: ${base.black};
  font-size: 15px;
  line-height: 1.5;
  display: block;
  font-weight: normal;
  margin: 15px auto 30px;
  min-width: 90%;

  .large & {
    font-size: 18px;
  }

  &.small,
  &.medium {
    width: 80%;
  }
`

export const PanelTitle = styled(Heading)`
  font-size: ${({ size }) => (size === 'large' ? '26' : '18')}px;
  line-height: 1.5;
  font-weight: 600;
  color: ${base.grays.contrast};
  max-width: ${({ size }) => (size === 'small' ? '50%' : 'none')};
  margin: 10px 0px;
`

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`

export const Accordion = styled(A)`
  width: 100%;
  padding-bottom: 1px;
  border-top: solid ${base.black} 0.8px;
`
