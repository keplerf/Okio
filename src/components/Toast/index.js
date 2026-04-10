import * as React from 'react'
import PropTypes from 'prop-types'
import { Text, ResponsiveContext } from 'grommet'
import { Section, Inner } from '@primitives'
import { base } from '@themes'
import Button from '@components/Button/v2'
import { Collapsible, Wrapper, CloseIcon } from './styles'
import useDataTrackValue from '@helpers/useDataTrackValue'

const { useContext } = React

const Toast = ({ data, onClose, isOpen }) => {
  const {
    message: { message },
    cta,
    closeIcon
  } = data
  const size = useContext(ResponsiveContext)
  const isMobile = size === 'small'

  let padding

  if (isMobile) {
    padding = {
      horizontal: 'xlarge',
      bottom: 'medium',
      top: 'large'
    }
  } else {
    padding = {
      horizontal: 'xsmall',
      vertical: 'xsmall'
    }
  }

  return (
    <Collapsible className={size} open={isOpen}>
      <Section toast background='#d2d1e1' id='toast' name='toast'>
        <Inner toast>
          <Wrapper
            fill
            className={size}
            gap={isMobile && 'small'}
            pad={padding}
            role='alert'
          >
            <Text
              color={base.text}
              size='small'
              weight={600}
              textAlign='center'
              a11yTitle={message}
              margin={{
                horizontal: 'xsmall'
              }}
            >
              {message}
            </Text>
            <Button
              toast
              appearance='text'
              color={base.deepPurple}
              internal={cta.contentfulinternal}
              href={cta.url}
              a11yTitle={cta.label}
              data-track='true'
              data-track-value={useDataTrackValue('toast', cta.label)}
            >
              {cta.label}
            </Button>
            <CloseIcon
              svg={closeIcon?.svg}
              src={closeIcon?.file?.url}
              className={size}
              isMobile={isMobile}
              alt={closeIcon?.title || 'close'}
              a11yTitle={closeIcon?.title || 'close'}
              onClick={onClose}
            />
          </Wrapper>
        </Inner>
      </Section>
    </Collapsible>
  )
}

Toast.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  data: PropTypes.shape({
    message: PropTypes.shape({
      message: PropTypes.string
    }),
    cta: PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string,
      contentfulinternal: PropTypes.bool
    }),
    closeIcon: PropTypes.shape({
      title: PropTypes.string,
      file: PropTypes.shape({
        url: PropTypes.string
      }),
      svg: PropTypes.shape({
        content: PropTypes.string
      })
    })
  })
}

export default Toast
