import * as React from 'react'
import PropTypes from 'prop-types'
import { ResponsiveContext } from 'grommet'
import Form from './Form'
import Links from './Links'
import Social from './Social'
import {
  Wrapper,
  LeftColumn,
  RightColumn,
  StyledLogo,
  FormHeader,
  Content
} from './styles'
import { Section, Inner } from '@primitives'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { renderLineBreaks } from '@helpers/useRenderText'

const { useContext } = React

const Footer = ({ data }) => {
  const {
    logo,
    leftColumn: links,
    socialIcons,
    legal,
    contact,
    copyright
  } = data
  const size = useContext(ResponsiveContext)

  const RT_OPTIONS = {
    renderText: renderLineBreaks,
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        if (size === 'large') {
          return <Content size='medium'>{children}</Content>
        }

        return <Content size='medium'>{children}</Content>
      }
    }
  }

  const legalContent =
    legal && documentToReactComponents(JSON.parse(legal.raw), RT_OPTIONS)

  const contactContent =
    contact && documentToReactComponents(JSON.parse(contact.raw), RT_OPTIONS)

  const copyrightContent =
    copyright &&
    documentToReactComponents(JSON.parse(copyright.raw), RT_OPTIONS)

  if (size === 'large') {
    return (
      <Section footer>
        <Inner footer>
          <LeftColumn
            pad={{ horizontal: 'large', vertical: '64px' }}
            gap='medium'
          >
            <StyledLogo alt={data.formHeader} data={logo} large />
            {legalContent}
            {copyrightContent}
            <Links data={links} large />
            {contactContent}
          </LeftColumn>
          <RightColumn>
            <FormHeader large>{data.formHeader}</FormHeader>
            <Form />
            <Social items={socialIcons} />
          </RightColumn>
        </Inner>
      </Section>
    )
  }

  return (
    <Wrapper pad={{ horizontal: 'large', vertical: '64px' }} gap='xlarge'>
      <StyledLogo alt={data.formHeader} data={logo} />
      {legalContent}
      {copyrightContent}
      <Links data={links} />
      {contactContent}
      <Social size={size} items={socialIcons} />
    </Wrapper>
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
    legal: PropTypes.shape({
      raw: PropTypes.string
    }),
    contact: PropTypes.shape({
      raw: PropTypes.string
    }),
    copyright: PropTypes.shape({
      raw: PropTypes.string
    })
  }).isRequired
}

export default Footer
