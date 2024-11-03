import NavLink from './NavLink'
import { HamburgerMenu } from '@components/design/Header'
import { useTranslation } from 'react-i18next'

interface Props {
  pathname: string
  isOpen: boolean
  handleClick: () => void
  onLogOut: () => void
  isLoggedIn: boolean
  username: string
  navigation: (
    | {
        id: number
        title: string
        url: string
        onlyMobile: boolean
      }
    | {
        id: string
        title: string
        url: string
        onlyMobile: boolean
      }
  )[]
}

const NavLinks = ({
  pathname,
  isOpen,
  handleClick,
  onLogOut,
  isLoggedIn,
  username,
  navigation,
}: Props) => {
  const { t } = useTranslation()

  return (
    <nav
      className={`${
        isOpen ? '' : 'hidden'
      } fixed h-screen lg:hidden top-20 left-0 right-0 bg-n-8 lg:static flex lg:mx-auto lg:bg-transparent`}
    >
      {isOpen && (
        <ul className='relative mt-12 lg:mt-0 gap-5 flex flex-col lg:flex-row items-center justify-center m-auto'>
          {isLoggedIn && <NavLink title={`Welcome ${username}`} isTitle />}
          {navigation.map((page, i) => (
            <NavLink
              title={page.title}
              url={page.url}
              onlyMobile={page.onlyMobile}
              currentPath={pathname}
              key={i}
              handleClick={handleClick}
            />
          ))}
          {isLoggedIn && (
            <NavLink
              title={t('nav.logOut')}
              onlyMobile
              currentPath='#'
              handleClick={onLogOut}
            />
          )}
        </ul>
      )}

      <HamburgerMenu />
    </nav>
  )
}

export default NavLinks
