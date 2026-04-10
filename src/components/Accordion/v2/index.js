import * as React from 'react'
import { ResponsiveContext } from 'grommet'
import { PropTypes } from 'prop-types'
import { Section, Inner } from '@primitives'
import Panel from './Panel'
import {
  Accordion,
  HeadingWrapper,
  Title,
  SubTitle,
  PanelTitle
} from './styles'

const { useState, useContext } = React

const AccordionComponent = ({ data }) => {
  const size = useContext(ResponsiveContext)
  const [active, setActive] = useState(-1)
  const {
    title,
    subtitle,
    panelTitle,
    panels,
    expandIcon,
    collapseIcon,
    contentfulid
  } = data

  return (
    <Section accordion name={contentfulid} id={contentfulid}>
      <Inner>
        <Title level={2} className={size}>
          {title}
        </Title>
        <SubTitle className={size}>{subtitle}</SubTitle>
        <HeadingWrapper size={size}>
          <PanelTitle level={3} size={size}>
            {panelTitle}
          </PanelTitle>
        </HeadingWrapper>
        <Accordion
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
    panelTitle: PropTypes.string.isRequired,
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
