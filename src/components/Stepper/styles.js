import styled from 'styled-components'
import { Box, Text, Paragraph, Heading } from 'grommet'
import classnames from 'classnames'
import { base } from '@themes'

export const Header = styled(Box)`
  display: block;
  padding: 0;
  display: flex;
  align-items: flex-start;
  margin: 0;
  justify-self: flex-start;
  width: 100%;
`

export const Title = styled(Heading)`
  font-size: 40px;
  line-height: 47px;
  color: ${base.white};
  font-weight: 600;
`

export const Subtitle = styled(Heading)`
  font-size: 14px;
  line-height: 21px;
  color: ${base.white};
  font-weight: 600;
  min-width: 100%;
`

export const Sentence = styled(Paragraph)`
  font-weight: 600;
  line-height: 38px;
  margin-bottom: 0px;
  width: 100%;

  &.small {
    line-height: 28px;
    white-space: pre-wrap;
  }
`

export const Step = styled(Text).attrs(({ $step, paragraph }) => ({
  className: classnames({
    step: $step,
    paragraph
  })
}))`
  font-weight: 600;
  flex-shrink: 0;
  line-height: 38px;

  &.step {
    color: ${base.palePurple};
  }

  &.paragraph {
    font-size: 20px;
    word-wrap: break-word;
    white-space: pre;
  }
`

export const Item = styled.li`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  word-wrap: break-word;
  white-space: pre;

  &.small {
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem 0;
  }
`

export const List = styled(Box)`
  font-weight: bolder;
  color: ${base.white};

  ul,
  ol {
    list-style: none;
    border-top: solid 1px ${base.white};
    padding: 0;
  }

  li {
    padding: 2rem 0;
    border-bottom: solid 1px ${base.white};
  }

  strong {
    font-size: 14px;
    font-weight: bolder;
    padding-right: 1rem;
    line-height: 0;
    color: ${base.grayish[1]};
    &.small {
      margin-bottom: 5px;
    }
  }
`
