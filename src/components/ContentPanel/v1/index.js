import React from 'react'
import propTypes from 'prop-types'
import { Box, Heading, ResponsiveContext, Text } from 'grommet'
import { convertToBgImage } from 'gbimage-bridge'
import Button from '@components/Button/v2'
import { Section, Inner } from '@primitives'
import useDataTrackValue from '@helpers/useDataTrackValue'
import { Content, Logo, CardImage, TextContent, Wrapper } from './styles'

const ContentPanel = ({ data }) => {
  const size = React.useContext(ResponsiveContext)
  const isMobile = size === 'small'
  const image = convertToBgImage(data.image.gatsbyImageData)

  return (
    <Section panel>
      <Inner>
        <Wrapper
          columns={{
            count: isMobile ? 1 : 2,
            size: 'auto'
          }}
        >
          <CardImage
            Tag='div'
            {...image}
            preserveStackingContext
            className={size}
          />
          <Content className={size} gap='xsmall'>
            <Logo
              fit='contain'
              src={data.logo.file.url}
              alt={data.header}
            />
            <Heading
              level='3'
              size={size === 'small' ? '24px' : 'large'}
              label={data.header}
            >
              {data.header}
            </Heading>
            <Box width={size === 'large' ? '80%' : 'auto'}>
              <TextContent>
                <strong>{data.subHeader.subHeader}</strong>
              </TextContent>
              <TextContent>{data.text.text}</TextContent>
            </Box>
            {data.cta && (
              <Button
                appearance='primary'
                size='large'
                href={data.cta.url}
                a11yTitle={data.cta.label}
                data-track='true'
                data-track-value={useDataTrackValue(
                  `${data?.header}-card`,
                  data?.cta?.label
                )}
                internal={data.cta.contentfulinternal}
                style={{ alignSelf: 'flex-start' }}
              >
                <Text a11yTitle={data.cta.label}>{data.cta.label}</Text>
              </Button>
            )}
          </Content>
        </Wrapper>
      </Inner>
    </Section>
  )
}

ContentPanel.propTypes = {
  data: propTypes.object.isRequired
}

export default ContentPanel
