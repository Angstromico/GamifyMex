import { splitTextToLines } from '../utils'
import { useTranslation } from 'react-i18next'

const MiniBingo = () => {
  const { t } = useTranslation()

  const text = splitTextToLines(t('hero.minibingo'))

  return (
    <div className='flex flex-col items-center justify-center overflow-y-auto max-h-[1000px] w-full h-full bg-n-8 text-n-1 no-scrollbar'>
      <div className='w-full px-4 md:px-6 max-h-[600px] overflow-y-auto'>
        <h1 className='text-lg md:text-xl mb-4 text-yellow-500 font-bold'>
          <span className='text-gray-400'>Bingo</span>57
        </h1>
        {text.map((arr, index) => (
          <p
            key={index}
            className='mb-2 text-sm md:text-base max-w-[90%] text-justify'
          >
            {arr}
          </p>
        ))}
      </div>
    </div>
  )
}

export default MiniBingo
