import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <>
      {/* Desktop Language Selector */}
      <div className='language-selector fixed top-28 right-[2%] hidden md:flex items-center space-x-4 text-white dark:text-black z-50 font-bold'>
        <ul className='flex space-x-2'>
          <li>
            <a
              onClick={() => changeLanguage('es')}
              className={`block py-1 px-3 rounded-full bg-gray-700 dark:bg-gray-200 hover:bg-gray-600 dark:hover:bg-gray-100 transition-colors ${
                i18n.language === 'es' ? 'bg-violet-600 dark:bg-violet-600' : ''
              }`}
              href='#'
            >
              Español
            </a>
          </li>
          <li>
            <a
              onClick={() => changeLanguage('en')}
              className={`block py-1 px-3 rounded-full bg-gray-700 dark:bg-gray-200 hover:bg-gray-600 dark:hover:bg-gray-100 transition-colors ${
                i18n.language === 'en' ? 'bg-violet-600 dark:bg-violet-600' : ''
              }`}
              href='#'
            >
              English
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Language Selector */}
      <div className='language-selector-mobile flex md:hidden flex-col gap-4 fixed top-28 right-[2%] z-20 text-white font-bold dark:text-black'>
        <ul>
          {/* I want same width in both links here */}
          <li className='my-5'>
            <a
              onClick={() => changeLanguage('es')}
              className={`py-1 text-center block w-[100px] px-2 rounded-full bg-gray-700 dark:bg-gray-200 hover:bg-gray-600 dark:hover:bg-gray-100 transition-colors ${
                i18n.language === 'es' ? 'bg-violet-600 dark:bg-violet-600' : ''
              }`}
              href='#'
            >
              Español
            </a>
          </li>
          <li className='my-5'>
            <a
              onClick={() => changeLanguage('en')}
              className={`block text-center py-1 w-[100px] px-2 rounded-full bg-gray-700 dark:bg-gray-200 hover:bg-gray-600 dark:hover:bg-gray-100 transition-colors ${
                i18n.language === 'en' ? 'bg-violet-600 dark:bg-violet-600' : ''
              }`}
              href='#'
            >
              English
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default LanguageSwitcher
