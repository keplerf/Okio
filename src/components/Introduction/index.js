/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { PropTypes } from 'prop-types'
import { Box, ResponsiveContext } from 'grommet'
import { Section, Inner } from '@primitives'

import { Image, Title, Subtitle, Wrapper, Video } from './styles'

const Introduction = ({ data }) => {
  const size = useContext(ResponsiveContext)
  const isMobile = size === 'small' ? 'small' : 'large'
  const { header: title, subHeader: subtitle } = data

  if (size === 'small') {
    return (
      <Section pad='large' align='center' className={isMobile}>
        <Inner>
          <Video
            preload='auto'
            poster={data.imageMobile.file.url}
            loop
            autoPlay
            muted
            playsInline
            width='150%'
            fit='cover'
            controls='false'
          >
            <source src={data.mp4Video.file.url} type='video/mp4' />
            <source src={data.webmVideo.file.url} type='video/webm' />
            <Image src={data.imageMobile.file.url} />
          </Video>
          <Wrapper className={size}>
            <Title as='h2' level={2}>
              {title}
            </Title>
            <Subtitle as='h3' level={3}>
              {subtitle}
            </Subtitle>
          </Wrapper>
        </Inner>
      </Section>
    )
  }

  return (
    <Section pad='large' align='center' className={isMobile}>
      <Inner>
        <Wrapper className={size}>
          <video
            preload='auto'
            poster={data.imageMobile.file.url}
            loop
            autoPlay
            muted
            width='100%'
          >
            <source src={data.mp4Video.file.url} type='video/mp4' />
            <source src={data.webmVideo.file.url} type='video/webm' />
            <Image src={data.imageMobile.file.url} />
          </video>
          <Box className='text-container'>
            <Title level={2}>{title}</Title>
            <Subtitle level={3}>{subtitle}</Subtitle>
          </Box>
        </Wrapper>
      </Inner>
    </Section>
  )
}

Introduction.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.string.isRequired,
    subHeader: PropTypes.string.isRequired,
    image: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string.isRequired
      })
    }),
    imageUrl: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string.isRequired
      })
    })
  })
}

export default Introduction
