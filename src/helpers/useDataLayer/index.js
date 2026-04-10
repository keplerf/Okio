import { useEffect } from 'react'

export const getWebData = ({
  metadata,
  dataLayerName,
  isLoggedIn,
  firstName,
  pageType,
  documentLocation,
  dataLayer = {}
}) => {
  const { pathname, hash } = documentLocation
  const { headTitle } = metadata

  dataLayer.loginState = isLoggedIn // add when login is completed
  dataLayer.userID = firstName // add when login is completed

  Object.keys(dataLayer)
    .filter(
      (key) => ['pageName', 'pageType'].includes(key) || key.startsWith('level')
    )
    .forEach((key) => delete dataLayer[key])

  const levels = pathname.slice(1).split('/')
  levels[0] ||= 'home'
  hash && levels.push(hash.slice(1))
  const pageName = [headTitle, ...levels].join(':')

  const newMetadata = { pageName, pageType }
  levels.forEach((level, i) => {
    newMetadata['level' + String(i + 1)] = level
  })

  Object.assign(dataLayer, newMetadata)
  return [dataLayer, pageName]
}

const useDataLayer = (
  metadata,
  dataLayerName = 'webData',
  updater,
  pageType = 'home',
  status
) => {
  const { isLoggedIn, firstName } = status

  useEffect(() => {
    const [dataLayer, pageName] = getWebData({
      metadata,
      dataLayerName,
      isLoggedIn: isLoggedIn ? 'auth' : 'not-auth',
      firstName: firstName || '',
      pageType,
      documentLocation: document.location,
      dataLayer: window[dataLayerName]
    })

    updater((state) => {
      if (state?.pageName === pageName) return state
      return { ...dataLayer }
    })
  })
}

export default useDataLayer
