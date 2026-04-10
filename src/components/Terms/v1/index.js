import * as React from 'react'
import { PropTypes } from 'prop-types'
import { Box, ResponsiveContext } from 'grommet'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { Primary, Icon, Description, Wrapper } from '@components/PrivacyPolicy/styles'
import { Header, Heading, Link, List, Item } from './styles'

const { useContext } = React

const Terms = ({ data }) => {
  const size = useContext(ResponsiveContext)
  const { title, description, links, termsBlock: blocks } = data

  const RT_OPTIONS = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <Description className={size}>{children}</Description>
      }
    }
  }
  const subtitle = documentToReactComponents(
    JSON.parse(description.raw),
    RT_OPTIONS
  )

  return (
    <Wrapper pad={{ vertical: 'medium' }} gap='medium'>
      <Box id='back' className={size}>
        <Link to='/' a11yTitle='home'>
          <Icon size={size} />
        </Link>
      </Box>
      <List>
        <Item className='title'>{title}</Item>
        {
          links.map(({ url, label }, index) => {
            return (
              <Link key={`label-${index}`} to={url} a11yTitle={label}>
                <Item>{label}</Item>
              </Link>
            )
          })
        }
      </List>
      <Primary className={size} gap='xsmall'>
        <Header size={size}>{title}</Header>
        {subtitle}
      </Primary>
      <List>
        {
          blocks.map((info, index) => {
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
          })
        }
      </List>
    </Wrapper>
  )
}

Terms.propTypes = {
  data: PropTypes.object.isRequired
}

export default Terms
