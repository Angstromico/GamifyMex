import React from 'react'
import type { ReactNode } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import './DefaultLayout.css'
import { siteInfo } from '@constants/index'
import {
  Header,
  Footer,
  ButtonGradient,
  LanguageSwitcher,
} from '@components/index'
import logo from '@assets/logo3.png'
import i18n from '../i18n'

interface DefaultLayoutProps {
  noWrapper?: boolean
  title?: string
  image?: string
  description?: string
  children: ReactNode
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  noWrapper = false,
  title,
  image,
  description,
  children,
}) => {
  const lang = i18n.language
  const pageTitle = title || siteInfo.title
  const pageDescription = description || siteInfo.description
  const pageImage = image || siteInfo.image

  return (
    <HelmetProvider>
      <Helmet>
        <html lang={lang} />
        <title>{pageTitle}</title>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' type='image/svg+xml' href={logo} />
        <meta name='description' content={pageDescription} />
        <meta name='author' content='Manuel Morales' />
        <meta property='og:locale' content={lang} />
        <meta property='og:type' content='website' />
        <meta property='og:description' content={pageDescription} />
        <meta property='og:url' content={window.location.href} />
        <meta property='og:site_name' content={pageTitle} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={pageTitle} />
        <meta name='twitter:description' content={pageDescription} />
        <meta name='twitter:image' content={pageImage} />
        <meta property='og:image' content={pageImage} />
      </Helmet>
      {!noWrapper && <Header />}
      <ButtonGradient />
      <LanguageSwitcher />
      {children}
      {!noWrapper && <Footer />}
    </HelmetProvider>
  )
}

export default DefaultLayout
