import { FaStar, FaTrophy, FaGift, FaMedal } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const RewardsComponent = () => {
  const { t } = useTranslation()

  // Array of rewards for illustration
  const rewards = [
    {
      icon: <FaStar size={28} />,
      title: t('rewards.exclusiveBadge.title'),
      description: t('rewards.exclusiveBadge.description'),
    },
    {
      icon: <FaTrophy size={28} />,
      title: t('rewards.leaderboardPoints.title'),
      description: t('rewards.leaderboardPoints.description'),
    },
    {
      icon: <FaGift size={28} />,
      title: t('rewards.mysteryGift.title'),
      description: t('rewards.mysteryGift.description'),
    },
    {
      icon: <FaMedal size={28} />,
      title: t('rewards.weeklyMedal.title'),
      description: t('rewards.weeklyMedal.description'),
    },
  ]

  return (
    <div className='text-center'>
      <h2 className='text-xl font-bold mb-4'>
        {t('rewards.availableRewards')}
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {rewards.map((reward, index) => (
          <div
            key={index}
            className='bg-gray-700 p-4 rounded-lg flex items-center space-x-3 text-white hover:bg-gray-600 transition-colors'
          >
            {reward.icon}
            <div className='text-left'>
              <h3 className='font-semibold'>{reward.title}</h3>
              <p className='text-sm'>{reward.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RewardsComponent
