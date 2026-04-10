import * as React from 'react'
import PropTypes from 'prop-types'
import { ResponsiveContext } from 'grommet'
import { LoginContext } from '@context/LoginContext'
// import Button from '@components/Button/v2'
import useDataTrackValue from '@helpers/useDataTrackValue'
import { Button, LoggedInButton, Drawer } from './styles'

const { useState, useContext } = React

const LoginMenu = ({ loginLink, logoutLink, myAccountLink }) => {
  const status = useContext(LoginContext)
  const size = useContext(ResponsiveContext)
  const { isLoggedIn, initials } = status
  const [state, setState] = useState({ isOpen: false })

  const myAccountLinkValue = useDataTrackValue('header', myAccountLink.label)
  const logoutLinkValue = useDataTrackValue('header', logoutLink.label)

  const handleMenuToggle = () => {
    setState((previousState) => {
      return { ...previousState, isOpen: !previousState.isOpen }
    })
  }

  if (!isLoggedIn) {
    return (
      <>
        <Button
          internal={loginLink.contentfulinternal}
          appearance='text'
          size='large'
          href={loginLink.url}
          a11yTitle={loginLink.label}
          className={size}
          data-track='true'
          data-track-value={useDataTrackValue('header', loginLink.label)}
        >
          {loginLink.label}
        </Button>
      </>
    )
  }

  return (
    <div>
      <LoggedInButton onClick={handleMenuToggle}>{initials}</LoggedInButton>
      <Drawer open={state.isOpen}>
        <li>
          <Button
            internal={myAccountLink.contentfulinternal}
            href={myAccountLink.url}
            a11yTitle={myAccountLink.label}
            data-track='true'
            data-track-value={myAccountLinkValue}
          >
            {myAccountLink.label}
          </Button>
        </li>
        <li>
          <Button
            internal={logoutLink.contentfulinternal}
            href={logoutLink.url}
            a11yTitle={logoutLink.label}
            data-track='true'
            data-track-value={logoutLinkValue}
          >
            {logoutLink.label}
          </Button>
        </li>
      </Drawer>
    </div>
  )
}

LoginMenu.propTypes = {
  loginLink: PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string,
    contentfulinternal: PropTypes.bool
  }),
  logoutLink: PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string,
    contentfulinternal: PropTypes.bool
  }),
  myAccountLink: PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string,
    contentfulinternal: PropTypes.bool
  })
}

export default LoginMenu
