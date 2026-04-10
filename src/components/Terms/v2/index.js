import * as React from 'react'
import { PropTypes } from 'prop-types'
import Section from './Section'
import { Box, ResponsiveContext } from 'grommet'
import { Icon, Wrapper } from '@components/PrivacyPolicy/styles'
import { Link, List, Item, BackToTop } from './styles'
import useDataTrackValue from '@helpers/useDataTrackValue'

const { useContext, useEffect, useState } = React

const Terms = ({ data: { links, sections } }) => {
  const size = useContext(ResponsiveContext)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  return (
    <Wrapper gap='medium'>
      <BackToTop onClick={() => window.scrollTo(0, 0)} showButton={showButton}>
        Back to top
      </BackToTop>
      <Box id='back' className={size}>
        <Link to={-1} a11yTitle='home'>
          <Icon size={size} />
        </Link>
      </Box>
      <List>
        {links?.map(({ id, url, label }) => (
          <Link
            key={id}
            to={url}
            a11yTitle={label}
            data-track='true'
            data-track-value={useDataTrackValue('navigation', label)}
          >
            <Item>{label}</Item>
          </Link>
        ))}
      </List>
      {sections?.map((termsBlock) => (
        <Section key={termsBlock.index} data={termsBlock} />
      ))}
    </Wrapper>
  )
}

Terms.propTypes = {
  data: PropTypes.shape({
    links: PropTypes.array,
    sections: PropTypes.array
  }).isRequired
}

export default Terms
