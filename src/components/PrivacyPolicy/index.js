import React, { useContext } from 'react'
import { PropTypes } from 'prop-types'
import Link from '@components/Link'
import { ResponsiveContext, Box } from 'grommet'
import { Heading } from '@tenon-io/tenon-ui'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { Section, Inner } from '@primitives'
import Block from './Block'
import { Header, Description, Grid, Icon, Primary, Wrapper } from './styles'

const columns = {
  small: ['auto'],
  medium: ['auto'],
  large: ['auto', 'auto'],
  xlarge: ['auto', 'auto']
}

const gap = {
  small: 'xsmall',
  medium: 'none',
  large: 'xlarge'
}

const PrivacyPolicy = ({ data }) => {
  const { title, subtitle, blocks } = data
  const size = useContext(ResponsiveContext)

  const RT_OPTIONS = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <Description className={size}>{children}</Description>
      }
    }
  }
  const description = documentToReactComponents(
    JSON.parse(subtitle.raw),
    RT_OPTIONS
  )

  return (
    <Section privacy>
      <Inner>
        <Wrapper pad={size === 'small' ? '' : 'medium'} gap='large'>
          <Box id='back' className={size}>
            <Link to={-1} a11yTitle='home'>
              <Icon size={size} />
            </Link>
          </Box>
          <Primary className={size} gap='medium'>
            <Header size={size}>{title}</Header>
            {description}
          </Primary>
          <Grid
            columns={columns[size]}
            gap={gap[size]}
            a11yTitle='list of privacy principles'
            align='stretch'
            justify='stretch'
          >
            <Heading.LevelBoundary>
              {blocks.map((block) => (
                <Block key={block.id} data={block} size={size} />
              ))}
            </Heading.LevelBoundary>
          </Grid>
        </Wrapper>
      </Inner>
    </Section>
  )
}

PrivacyPolicy.propTypes = {
  data: PropTypes.object.isRequired
}

export default PrivacyPolicy
