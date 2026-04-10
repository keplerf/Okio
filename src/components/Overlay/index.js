import React, { useContext } from 'react'
import { ResponsiveContext } from 'grommet'
import { Section, Inner as InnerSection } from '@primitives'
import { Wrapper, Inner, Title } from './style'
import { PropTypes } from 'prop-types'
import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

const Overlay = ({ data: { content, image } }) => {
  const size = useContext(ResponsiveContext)
  const bgImage = convertToBgImage(image.gatsbyImageData)

  const RT_OPTIONS = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <Title>{children}</Title>
      }
    }
  }

  const text = documentToReactComponents(JSON.parse(content.raw), RT_OPTIONS)

  return (
    <BackgroundImage Tag='section' {...bgImage} preserveStackingContext>
      <Section overLay>
        <InnerSection overLay gap='medium'>
          <Wrapper overlay cover className={size}>
            <Inner>{text}</Inner>
          </Wrapper>
        </InnerSection>
      </Section>
    </BackgroundImage>
  )
}

Overlay.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.object.isRequired,
    image: PropTypes.object.isRequired
  }).isRequired
}

export default Overlay
