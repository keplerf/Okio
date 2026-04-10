import * as React from 'react'
import { ResponsiveContext } from 'grommet'
import { PropTypes } from 'prop-types'
import { Section, Inner } from '@primitives'
import Panel from './Panel'
import { Accordion, HeadingWrapper, Header, Subtitle } from './styles'

const { useState, useContext } = React

const AccordionComponent = ({ data }) => {
  const size = useContext(ResponsiveContext)

  const [active, setActive] = useState(-1)

  const { title, subtitle, panels, expandIcon, collapseIcon } = data

  return (
    <Section accordion name={data.contentfulid} id={data.contentfulid}>
      <Inner>
        <HeadingWrapper size={size} a11yTitle={`${title} ${subtitle}`}>
          <Header level={3} size={size}>
            {title}
          </Header>
          <Subtitle color='#949494' level={4} size={size}>
            {subtitle}
          </Subtitle>
        </HeadingWrapper>
        <Accordion
          animate={false}
          onActive={([current]) => setActive(current)}
          activeIndex={active}
        >
          {panels.map((panel, index) => (
            <Panel
              key={panel.id}
              size={size}
              item={panel}
              isCurrent={index === active}
              setActive={setActive}
              expandIcon={expandIcon}
              collapseIcon={collapseIcon}
            />
          ))}
        </Accordion>
      </Inner>
    </Section>
  )
}

AccordionComponent.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    contentfulid: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    expandIcon: PropTypes.shape({
      title: PropTypes.string.isRequired,
      file: PropTypes.shape({
        url: PropTypes.string.isRequired
      }),
      svg: PropTypes.shape({
        content: PropTypes.string.isRequired
      })
    }).isRequired,
    collapseIcon: PropTypes.shape({
      title: PropTypes.string.isRequired,
      file: PropTypes.shape({
        url: PropTypes.string.isRequired
      }),
      svg: PropTypes.shape({
        content: PropTypes.string.isRequired
      })
    }).isRequired,
    circleOverlay: PropTypes.shape({
      title: PropTypes.string.isRequired,
      file: PropTypes.shape({
        url: PropTypes.string.isRequired
      }),
      svg: PropTypes.shape({
        content: PropTypes.string.isRequired
      })
    }),
    panels: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.shape({
          raw: PropTypes.any.isRequired
        }),
        image: PropTypes.shape({
          file: PropTypes.shape({
            url: PropTypes.string.isRequired
          })
        })
      })
    ).isRequired
  })
}

export default AccordionComponent
