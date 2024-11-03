import { useState, useEffect } from 'react'
import HeaderLink from './HeaderLink'
import logo from '@assets/logo3.png'
import NavLinks from './NavLinks'
import DynamicLink from './DynamicLink'
import Button from '@components/Button'
import MenuSvg from '@assets/svg/MenuSvg'
import pkg from 'scroll-lock'
const { disablePageScroll, enablePageScroll } = pkg
import NavLink from './NavLink'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [pathname, setPathname] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const { t } = useTranslation()

  useEffect(() => {
    setPathname(window.location.pathname)

    // Check localStorage for loginData
    const loginData = localStorage.getItem('loginData')
    if (loginData) {
      const parsedData = JSON.parse(loginData)
      if (parsedData.isLoggedIn) {
        setIsLoggedIn(true)
        setUsername(parsedData.username) // Store username
      }
    }
  }, [])

  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false)
      enablePageScroll()
      return
    }
    setIsOpen(true)
    disablePageScroll()
  }

  const logOutUser = () => {
    // Clear login data from localStorage
    localStorage.removeItem('loginData')
    setIsLoggedIn(false)
    setUsername('')
    // Optionally, redirect to homepage after logout
    window.location.href = '/'
  }

  const navigation = [
    {
      id: 1,
      title: 'Hero',
      url: '#hero',
      onlyMobile: false,
    },
    {
      id: 2,
      title: 'Video',
      url: '#video',
      onlyMobile: false,
    },
    {
      id: '3',
      title: t('nav.signup'),
      url: '/signup',
      onlyMobile: true,
    },
    {
      id: '4',
      title: 'Login',
      url: '/login',
      onlyMobile: true,
    },
    {
      id: '6',
      title: 'Bingo',
      url: '/bingo',
      onlyMobile: false,
    },
    {
      id: '7',
      title: t('nav.quiz'),
      url: '/trivia',
      onlyMobile: false,
    },
  ]

  return (
    <header
      className={`fixed flex lg:block justify-between items-center top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        isOpen ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'
      }`}
    >
      <div className='relative flex items-center justify-start lg:justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-4 max-w-screen-2xl mx-auto w-full lg:w-auto'>
        <HeaderLink>
          <img className='max-w-36' src={logo} alt='Logo' />
        </HeaderLink>
        <NavLinks
          handleClick={handleClick}
          isOpen={isOpen}
          pathname={pathname}
          onLogOut={logOutUser}
          isLoggedIn={isLoggedIn}
          username={username}
          navigation={navigation}
        />
        <nav className='hidden lg:flex justify-between gap-5 items-center flex-wrap'>
          {navigation.map((page, i) => (
            <NavLink
              title={page.title}
              url={page.url}
              onlyMobile={page.onlyMobile}
              currentPath={pathname}
              key={i}
            />
          ))}
        </nav>
        {/* Conditional navigation based on login status */}
        {isLoggedIn ? (
          <nav className='hidden lg:flex gap-5 items-center flex-wrap'>
            <p className='capitalize'>{username}</p> {/* Display username */}
            <Button
              text='Dashboard'
              link={'/dashboard'}
              className='hidden lg:flex'
            />
            <button
              className='px-4 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded-md shadow-md hover:from-red-600 hover:to-red-800 transition-transform duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50'
              onClick={logOutUser}
            >
              {t('nav.logOut')}
            </button>
          </nav>
        ) : (
          <nav className='hidden lg:flex gap-5 items-center flex-wrap'>
            <DynamicLink href='/login' text='Login' classes='hidden lg:flex' />
            <Button
              text='Sign Up'
              link={'/signup'}
              className='hidden lg:flex'
            />
          </nav>
        )}
      </div>
      <Button onClick={handleClick} text='' className='ml-auto lg:hidden'>
        <MenuSvg isOpen={isOpen} />
      </Button>
    </header>
  )
}

export default Header
