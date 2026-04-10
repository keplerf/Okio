import * as React from 'react'
import { ResponsiveContext } from 'grommet'
import { Large, Mobile } from './styles'

const { useContext } = React

const Divider = () => {
  const size = useContext(ResponsiveContext)
  switch (size) {
    case 'small':
      return <Mobile margin={{ vertical: 'medium' }} />
    default:
      return <Large margin={{ horizontal: 'large' }} />
  }
}

export default Divider
