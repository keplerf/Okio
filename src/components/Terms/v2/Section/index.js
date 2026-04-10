import * as React from 'react'
import { PropTypes } from 'prop-types'
import { ResponsiveContext } from 'grommet'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { Description } from '@components/PrivacyPolicy/styles'
import { Header, Heading, List, Item, JumplinkBox, Primary } from './styles'

const { useContext } = React

const Section = ({ data }) => {
  const size = useContext(ResponsiveContext)
  const { title, description, jumplinkid, termsBlock: blocks } = data

  const RT_OPTIONS = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <Description className={size}>{children}</Description>
      }
    }
  }

  const content =
    description &&
    documentToReactComponents(JSON.parse(description.raw), RT_OPTIONS)

  return (
    <>
      <Primary className={size} gap='xsmall'>
        <JumplinkBox id={jumplinkid} />
        <Header id={jumplinkid} size={size}>
          {title}
        </Header>
        {content}
      </Primary>
      <List>
        {blocks?.map((info, index) => {
          const text = documentToReactComponents(
            JSON.parse(info.description.raw),
            RT_OPTIONS
          )

          return (
            <div key={index}>
              <Heading>{info.title}</Heading>
              <Item className='subtitle'>{info.subtitle}</Item>
              {text}
            </div>
          )
        })}
      </List>
    </>
  )
}

Section.propTypes = {
  data: PropTypes.object.isRequired
}

export default Section
