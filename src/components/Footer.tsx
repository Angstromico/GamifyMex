import React from 'react'
import Section from './Section'
import { useTranslation } from 'react-i18next'
import { socials } from '@constants/index'

const Footer: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Section id='footer' crosses classes='!px-0 !py-10'>
      <footer className='container flex sm:justify-between justify-center items-center gap-10 flex-col md:flex-row'>
        <p className='caption text-n-4 lg:block'>
          {new Date().getFullYear()} &copy; {t('footer.rights')}
        </p>
        <ul className='flex flex-wrap gap-5'>
          {socials.map((s) => (
            <a
              key={s.title}
              href={s.url}
              className='cursor-pointer flex items-center justify-center w-10 h-10 rounded-full bg-n-7 transition-colors hover:bg-n-6'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={s.iconUrl} alt={s.title} height={16} width={16} />
            </a>
          ))}
        </ul>
      </footer>
    </Section>
  )
}

export default Footer
