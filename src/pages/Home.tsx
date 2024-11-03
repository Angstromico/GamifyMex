import React from 'react'
import { useTranslation } from 'react-i18next'

const Home: React.FC = () => {
  const { t } = useTranslation()
  return <div className='text-2xl font-bold'>{t('home.welcome')}</div>
}

export default Home
