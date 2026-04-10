import * as React from 'react'
import PropTypes from 'prop-types'
import { Box, ResponsiveContext, Text } from 'grommet'
import Logo from './Logo'
import Form from './Form'
import Links from './Links'
import Social from './Social'
import { Section, Inner } from '@primitives'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { base } from '@themes'

const { useContext } = React

const Footer = ({ data }) => {
  const { logo, leftColumn: links, socialIcons, copyright } = data
  const size = useContext(ResponsiveContext)

  const RT_OPTIONS = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        if (size === 'large') {
          return (
            <Text
              color='white'
              margin={{ vertical: '6px' }}
              size='medium'
              weight={600}
            >
              {children}
            </Text>
          )
        }

        return (
          <Text color='white' size='medium'>
            {children}
          </Text>
        )
      }
    }
  }
  const copyrightContent = documentToReactComponents(
    JSON.parse(copyright.raw),
    RT_OPTIONS
  )

  if (size === 'large') {
    return (
      <Section background={base.darkUIPurple} footer>
        <Inner footer>
          <Box
            pad={{ horizontal: 'large', vertical: '64px' }}
            width='100%'
            gap='medium'
          >
            <Logo
              alt={data.formHeader}
              data={logo}
              large
              width='768px'
              height='28px'
            />

            <Links data={links} large />
            {copyrightContent}
          </Box>
          <Box fill align='center' pad={{ top: '64px' }}>
            <Text color='#e5e5e5' size='medium' margin={{ left: '-95px' }}>
              {data.formHeader}
            </Text>
            <Form />
            <Social items={socialIcons} justify='end' marginTop='large' />
          </Box>
        </Inner>
      </Section>
    )
  }

  return (
    <Box background={base.darkUIPurple}>
      <Box fill pad={{ horizontal: 'large', vertical: '64px' }} gap='24px'>
        <Logo alt={data.formHeader} data={logo} width='768px' height='28px' />
        <Box>
          <Text color='#e5e5e5' size='medium'>
            {data.formHeader}
          </Text>
          <Form size={size} />
        </Box>
        <Links data={links} />
        <Social size={size} items={socialIcons} justify='start' align='end' />
        {copyrightContent}
      </Box>
    </Box>
  )
}

Footer.propTypes = {
  data: PropTypes.shape({
    logo: PropTypes.shape({
      title: PropTypes.string,
      file: PropTypes.shape({
        url: PropTypes.string
      })
    }),
    leftColumn: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        url: PropTypes.string
      })
    ),
    formHeader: PropTypes.string,
    socialIcons: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        url: PropTypes.string,
        iconimage: PropTypes.shape({
          title: PropTypes.string,
          file: PropTypes.shape({
            url: PropTypes.string
          })
        })
      })
    ),
    copyright: PropTypes.shape({
      raw: PropTypes.string
    })
  }).isRequired
}

export default Footer
