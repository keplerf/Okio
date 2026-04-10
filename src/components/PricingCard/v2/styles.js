import styled from 'styled-components'
import { CardHeader } from 'grommet'
import { base } from '@themes'

export const CrossedPrice = styled.p`
  color: ${base.grayish[6]};
  text-decoration: line-through;
  font-weight: bold;
  font-size: 40px;
  display: block;
  text-align: center;
  margin: 15px 0 30px 0;
  .large &,
  .medium & {
    font-size: 78px;
    line-height: 1.2;
    margin: 0;
  }
`

export const Price = styled.p`
  color: #464646;
  font-weight: bold;
  font-size: 40px;
  text-align: center;
  margin: 10px 0 30px 0;
  .large &,
  .medium & {
    font-size: 78px;
    line-height: 1.2;
    margin: 10px 0 40px 0;
  }
`
export const Paragraph = styled.div``
export const Card = styled.div`
  border-radius: 20px;
  width: 100%;
  margin: 0 auto;
  background: ${base.white};
  overflow: hidden;
  &.small {
    margin: 16px 0;
  }
`

export const Content = styled.div`
  align-items: center;
  padding: 5% 0;
  /* min-height: 40vh; */
`

export const Item = styled.li`
  & > * {
    font-weight: normal !important;
  }
`

export const Head = styled(CardHeader)`
  background: ${({ base }) => base};
  height: 43px;
`

export const ButtonWrapper = styled.div`
  margin: 10px 20px;
  .large &,
  .medium & {
    max-width: 290px;
    margin: auto;
  }
`
