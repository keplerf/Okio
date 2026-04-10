import * as React from 'react'

const { useState } = React

const useCookies = (cookieTypes) => {
  const initialState = cookieTypes.reduce(
    (state, { cookieType }) => {
      if (cookieType) {
        return { ...state, [cookieType]: false }
      }
      return { ...state }
    },
    { acceptedCookies: false }
  )

  const [cookies, setCookies] = useState(initialState)

  // useEffect(() => {
  // check if client has accepted cookies
  // setCookies( ... )
  // }, [])

  const acceptCookiesHandler = () => {
    // check which cookie types have been toggled off
    // setCookies (...)
    setCookies((state) => ({ ...state, acceptedCookies: true }))
  }

  return { ...cookies, acceptCookiesHandler }
}

export default useCookies
