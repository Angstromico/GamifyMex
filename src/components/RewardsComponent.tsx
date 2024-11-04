import { FaStar, FaTrophy, FaGift, FaMedal } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const RewardsComponent = () => {
  const { t } = useTranslation()

  // Debugging translation values
  console.log(t('rewards.exclusiveBadge.title'))
  console.log(t('rewards.leaderboardPoints.title'))
  console.log(t('rewards.mysteryGift.title'))
  console.log(t('rewards.weeklyMedal.title'))

  /* This are the console.log: rewards.exclusiveBadge.title
RewardsComponent.tsx:9 rewards.leaderboardPoints.title
RewardsComponent.tsx:10 rewards.mysteryGift.title
RewardsComponent.tsx:11 rewards.weeklyMedal.title
hook.js:377 rewards.exclusiveBadge.title
hook.js:377 rewards.leaderboardPoints.title
hook.js:377 rewards.mysteryGift.title
hook.js:377 rewards.weeklyMedal.title */

  // Array of rewards for illustration
  const rewards = [
    {
      icon: <FaStar size={28} />,
      title: t('hero.rewards.exclusiveBadge.title'),
      description: t('hero.rewards.exclusiveBadge.description'),
    },
    {
      icon: <FaTrophy size={28} />,
      title: t('hero.rewards.leaderboardPoints.title'),
      description: t('hero.rewards.leaderboardPoints.description'),
    },
    {
      icon: <FaGift size={28} />,
      title: t('hero.rewards.mysteryGift.title'),
      description: t('hero.rewards.mysteryGift.description'),
    },
    {
      icon: <FaMedal size={28} />,
      title: t('hero.rewards.weeklyMedal.title'),
      description: t('hero.rewards.weeklyMedal.description'),
    },
  ]

  return (
    <div className='text-center'>
      <h2 className='text-xl font-bold mb-4'>
        {t('hero.rewards.availableRewards')}
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
