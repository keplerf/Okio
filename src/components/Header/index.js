import React, { useContext, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { ResponsiveContext, Text, Nav } from 'grommet'
import { LoginContext } from '@context/LoginContext'
import useDataTrackValue from '@helpers/useDataTrackValue'
import Button from '@components/Button/v2'
import Link from '@components/Link'
import LoginMenu from '@components/LoginMenu'
import { Section, Inner } from '@primitives'
import {
  Account,
  Links,
  Logo,
  LogoWrapper,
  HamburgerIcon,
  DropdownMenu,
  CloseIcon
} from './styles'

const Header = ({
  data: {
    cta,
    links,
    login,
    logout,
    myAccount,
    logo,
    hamburgerIcon,
    closeIcon
  } = {}
}) => {
  const { isLoggedIn } = useContext(LoginContext)
  const size = useContext(ResponsiveContext)
  const [dropDownActive, setDropDownActive] = useState(false)

  const clickDropDown = () => setDropDownActive(!dropDownActive)

  const AccountButtons = () =>
    useMemo(() => {
      if (isLoggedIn) {
        return (
          <Account gap='small'>
            <Link to={myAccount.url} a11yTitle={myAccount.label}>
              {myAccount.label}
            </Link>
            <Link to={logout.url} a11yTitle={logout.label}>
              {logout.label}
            </Link>
          </Account>
        )
      }

      return (
        <Account gap='small'>
          <Link to={login.url} a11yTitle={login.label}>
            {login.label}
          </Link>
        </Account>
      )
    }, [isLoggedIn])

  let content
  let dropdownBtn

  if (dropDownActive !== true) {
    dropdownBtn = (
      <HamburgerIcon
        onClick={clickDropDown}
        svg={hamburgerIcon?.svg}
        src={hamburgerIcon?.file?.url}
        alt={hamburgerIcon?.title || 'open'}
        a11yTitle={hamburgerIcon?.title || 'open'}
      />
    )
  } else {
    dropdownBtn = (
      <CloseIcon
        className={size}
        onClick={clickDropDown}
        svg={closeIcon?.svg}
        src={closeIcon?.file?.url}
        alt={closeIcon?.title || 'close'}
        a11yTitle={closeIcon?.title || 'close'}
      />
    )
  }

  if (['small', 'medium'].includes(size)) {
    content = (
      <Nav direction='column' gap='small' justify='between' color='white'>
        <Links gap='large'>
          {links.map((link) => {
            return (
              <Button
                key={link.id}
                internal={link.contentfulinternal}
                appearance='text'
                href={link.url}
                a11yTitle={link.label}
                onClick={clickDropDown}
              >
                {link.label}
              </Button>
            )
          })}
          <Button
            appearance='secondary'
            color='white'
            size='large'
            href={cta.url}
            a11yTitle={cta.label}
            onClick={clickDropDown}
          >
            {cta.label}
          </Button>
        </Links>
        <AccountButtons />
      </Nav>
    )
  } else {
    content = (
      <Nav direction='row' gap='medium' justify='center' color='white'>
        {links.map((link) => {
          const val = useDataTrackValue('header', link?.label)
          return (
            <Button
              key={link.id}
              internal={link.contentfulinternal}
              appearance='text'
              href={link.url}
              a11yTitle={link.label}
              data-track='true'
              data-track-value={val}
            >
              {link.label}
            </Button>
          )
        })}
        <LoginMenu
          loginLink={login}
          logoutLink={logout}
          myAccountLink={myAccount}
        />
      </Nav>
    )
  }

  const ctaValue = useDataTrackValue('header', cta?.label)

  return (
    <Section
      header
      background='#242238'
      id='home'
      name='home'
      className={dropDownActive ? 'active' : ''}
    >
      <Inner header>
        <LogoWrapper>
          <Link
            a11yTitle='home'
            to={
              typeof document !== 'undefined' &&
              document.location.pathname === '/'
                ? '#'
                : '/'
            }
          >
            <Logo
              src={logo.file?.url}
              svg={logo.svg}
              alt={logo.title || 'okyo logo'}
              a11yTitle={logo.title || 'okyo logo'}
            />
          </Link>
        </LogoWrapper>

        {dropdownBtn}

        <DropdownMenu
          direction={size !== 'large' ? 'column' : 'row'}
          gap='small'
          align='baseline'
          pad={{ right: 'xsmall' }}
          size={size}
        >
          {content}
          {cta && size === 'large' && (
            <Button
              appearance='primary'
              size={size}
              href={cta?.url}
              a11yTitle={cta?.label}
              data-track='true'
              data-track-value={ctaValue}
            >
              <Text color='black'>{cta?.label}</Text>
            </Button>
          )}
        </DropdownMenu>
      </Inner>
    </Section>
  )
}

Header.propTypes = {
  data: PropTypes.shape({
    cta: PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string,
      contentfulinternal: PropTypes.bool
    }),
    links: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        url: PropTypes.string,
        contentfulinternal: PropTypes.bool
      })
    ),
    login: PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      url: PropTypes.string,
      contentfulinternal: PropTypes.bool
    }),
    logout: PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      url: PropTypes.string,
      contentfulinternal: PropTypes.bool
    }),
    myAccount: PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      url: PropTypes.string,
      contentfulinternal: PropTypes.bool
    }),
    logo: PropTypes.shape({
      title: PropTypes.string,
      file: PropTypes.shape({
        url: PropTypes.string
      }),
      svg: PropTypes.shape({
        content: PropTypes.string
      })
    }),
    hamburgerIcon: PropTypes.shape({
      title: PropTypes.string,
      file: PropTypes.shape({
        url: PropTypes.string
      }),
      svg: PropTypes.shape({
        content: PropTypes.string
      })
    }),
    closeIcon: PropTypes.shape({
      title: PropTypes.string,
      file: PropTypes.shape({
        url: PropTypes.string
      }),
      svg: PropTypes.shape({
        content: PropTypes.string
      })
    })
  })
}

export default Header
