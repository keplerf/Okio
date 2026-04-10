import * as React from 'react'
import { PropTypes } from 'prop-types'
import { Box, Text, ResponsiveContext } from 'grommet'
import Button from '@components/Button/v2'
import { Content, Title, SubTitle, Icon, CardImage } from './styles'
import useDataTrackValue from '@helpers/useDataTrackValue'
import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'

const { useContext } = React

const Card = ({ data }) => {
  const {
    title,
    subTitle,
    description,
    icon,
    cta,
    ctaTheme,
    image,
    mobileImage,
    imageMarginsMedium,
    imageMarginsLarge,
    direction
  } = data
  const size = useContext(ResponsiveContext)
  const isMobile = size === 'small'

  let contentAlign = 'center'
  const flexDirection = direction ? 'row' : 'row-reverse'
  if (!isMobile) contentAlign = flexDirection === 'row' ? 'start' : 'end'

  const imageMargins = {
    small: 'none',
    medium: imageMarginsMedium || 'none',
    large: imageMarginsLarge || '10px'
  }

  let bgImage
  if (mobileImage && isMobile) {
    bgImage = convertToBgImage(mobileImage.gatsbyImageData)
  } else {
    bgImage = convertToBgImage(image.gatsbyImageData)
  }

  return (
    <Box
      fill
      key={title}
      className={size}
      direction={isMobile ? 'column' : flexDirection}
      pad={{ vertical: isMobile ? 'medium' : '64px' }}
      gap='large'
      align='center'
    >
      <Box
        fill
        height={{ max: isMobile ? '300px' : '768px' }}
        width={{ max: size === 'medium' ? '500px' : '768px' }}
        margin={imageMargins[size]}
      >
        <BackgroundImage Tag='section' {...bgImage} preserveStackingContext>
          <CardImage />
        </BackgroundImage>
      </Box>
      <Box
        width={size === 'large' ? '80%' : '100%'}
        justify='center'
        align={contentAlign}
      >
        <Content $isMobile={isMobile} justify='center' align='start'>
          {icon && (
            <Icon
              svg={icon.svg}
              src={icon.file?.url}
              alt={icon.title || title}
              a11yTitle={icon.title || title}
            />
          )}
          <Title $isMobile={isMobile}>{title}</Title>
          {subTitle && <SubTitle>{subTitle}</SubTitle>}
          <Text size='medium'>{description?.description}</Text>
          {cta && (
            <Button
              size='large'
              appearance={ctaTheme}
              href={cta?.url}
              a11yTitle={cta?.label}
              internal={cta?.contentfulinternal}
              data-track='true'
              data-track-value={useDataTrackValue(`${title}-card`, cta?.label)}
            >
              {cta?.label}
            </Button>
          )}
        </Content>
      </Box>
    </Box>
  )
}

Card.propTypes = {
  data: PropTypes.object.isRequired
}

export default Card
