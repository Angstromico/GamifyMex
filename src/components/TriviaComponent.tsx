import { splitTextToLines } from '../utils'
import { useTranslation } from 'react-i18next'

const TriviaComponent = () => {
  const { t } = useTranslation()

  const text = splitTextToLines(t('hero.quiz'))

  return (
    <div className='flex flex-col items-center justify-start w-full h-full max-h-[80vh] overflow-y-auto bg-n-8 text-n-1 no-scrollbar'>
      <div className='w-full max-w-md md:max-w-lg p-4'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl mb-4 text-yellow-500 font-bold text-center mt-5'>
          <span className='text-gray-400'>La</span> Quincena
        </h1>
        {text.map((arr, index) => (
          <p
            key={index}
            className='text-sm md:text-base lg:text-lg mb-4 text-justify'
          >
            {arr}
          </p>
        ))}
      </div>
    </div>
  )
}

export default TriviaComponent
