import * as React from 'react'
import { Helmet } from 'react-helmet'
import DataLayerContext from '@context/DataLayerContext'

const { useContext } = React

const DataLayer = () => {
  const GATSBY_ANALYTICS_SRC = process.env.GATSBY_ANALYTICS_SRC
  const DATA_LAYER_NAME = process.env.GATSBY_DATA_LAYER_NAME

  const dataLayer = useContext(DataLayerContext)
  const webData = JSON.stringify(dataLayer) || '{}'

  return (
    <Helmet>
      <script type='text/javascript'>
        {`window.${DATA_LAYER_NAME} = ${webData};`}
      </script>
      <script src={GATSBY_ANALYTICS_SRC} defer />
    </Helmet>
  )
}

export default DataLayer
