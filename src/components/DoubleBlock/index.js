import * as React from 'react'
import { Box, ResponsiveContext } from 'grommet'
import { Heading } from '@tenon-io/tenon-ui'
import PropTypes from 'prop-types'
import { Section, Inner } from '@primitives'
import { types } from '@components/Banner/v1'
import Block from '@components/Block'
import Divider from '@components/DoubleBlock/Divider'
import { Boxes, Head } from './styles'

const { useContext } = React

const DoubleBlock = ({ data, appearance }) => {
  const { title, blocks } = data
  const size = useContext(ResponsiveContext)

  return (
    <Section banner background={types[appearance].background}>
      <Inner>
        <Box pad='large'>
          <Heading.LevelBoundary>
            <Box a11yTitle={title}>
              <Head className={size}>{title}</Head>
            </Box>
            <Boxes className={size} justify='evenly'>
              <Heading.LevelBoundary>
                <Block
                  className='double'
                  data={blocks[0]}
                  appearance={appearance}
                />
                <Divider />
                <Block
                  className='double'
                  data={blocks[1]}
                  appearance={appearance}
                />
              </Heading.LevelBoundary>
            </Boxes>
          </Heading.LevelBoundary>
        </Box>
      </Inner>
    </Section>
  )
}

DoubleBlock.propTypes = {
  data: PropTypes.object.isRequired,
  appearance: PropTypes.string.isRequired
}

export default DoubleBlock
