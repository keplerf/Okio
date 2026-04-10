import * as React from 'react'
import { PropTypes } from 'prop-types'
import useLoginStatus from '@helpers/useLoginStatus'

const { createContext } = React

export const LoginContext = createContext()

const LoginContextProvider = ({ children }) => {
  const status = useLoginStatus()

  return (
    <LoginContext.Provider value={status}>{children}</LoginContext.Provider>
  )
}

LoginContextProvider.propTypes = {
  children: PropTypes.node
}

export default LoginContextProvider
