import * as React from 'react'
import DataLayerContext from '@context/DataLayerContext'

const { useContext } = React

const useDataTrackValue = (componentType, label) => {
  const webData = useContext(DataLayerContext)
  const [type, cta] = [componentType, label].map((string) =>
    string?.toLowerCase().replace(/\s+/g, '-')
  )

  return [webData?.pageName, type, cta].join(':')
}

export default useDataTrackValue
