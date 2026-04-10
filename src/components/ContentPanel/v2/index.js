import React from 'react'
import propTypes from 'prop-types'
import { Box, Heading, ResponsiveContext, Text } from 'grommet'
import Button from '@components/Button/v2'
import { Section, Inner } from '@primitives'
import useDataTrackValue from '@helpers/useDataTrackValue'
import { Content, Logo, TextContent } from './styles'

const ContentPanel = ({ data }) => {
  const size = React.useContext(ResponsiveContext)

  return (
    <Section panel>
      <Inner>
        <Content className={size} gap='xsmall'>
          <Heading
            level={2}
            size={size === 'small' ? '24px' : 'large'}
            label={data.header}
            alignSelf='center'
            style={
              size === 'small' ? { fontSize: '33px' } : { fontSize: '43px' }
            }
          >
            {data.header}
          </Heading>
          <Box width={size === 'large' ? '80%' : 'auto'} alignSelf='center'>
            <TextContent>
              <strong>{data.subHeader.subHeader}</strong>
            </TextContent>
          </Box>
          <Logo fit='contain' svg={data.logo.svg} alt={data.header} />
          {data.cta && (
            <Box width={size === 'small' ? '100%' : '290px'} alignSelf='center'>
              <Button
                appearance='primary'
                size='xlarge'
                href={data.cta.url}
                a11yTitle={data.cta.label}
                data-track='true'
                data-track-value={useDataTrackValue(
                  `${data?.header}-card`,
                  data?.cta?.label
                )}
                internal={data.cta.contentfulinternal}
                style={{}}
              >
                <Text a11yTitle={data.cta.label}>{data.cta.label}</Text>
              </Button>
            </Box>
          )}
        </Content>
      </Inner>
    </Section>
  )
}

ContentPanel.propTypes = {
  data: propTypes.object.isRequired
}

export default ContentPanel
