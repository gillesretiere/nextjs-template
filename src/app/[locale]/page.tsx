import { useTranslations } from 'next-intl'
import Button from './components/Button'
import { FiMail, FiPhone, } from 'react-icons/fi'


export default function DashboardPage() {
  const t = useTranslations('')
  return (
    <div>
      <section className='flex flex-col items-center justify-center py-24'>
        <h1 className='text-center text-5xl md:text-7xl font-thin tracking-tight leading-tight'>
          {t('With_the')}{' '}
          <span className='bg-span-bg bg-clip-text text-transparent'>
            {t('Saynètes')}
          </span>
          <br />
          {t('Master_your_communication_with_non-native_speakers')}
        </h1>
        <div className='my-6 px-20 text-center text-2xl text-text-secondary'>
          {t(
            'Help_break_down_language_barriers_and_cultural_misunderstandings'
          )}
        </div>
        <div className='mt-4 flex flex-row gap-4'>
          <a
            href='https://saynetes.fr/language_page/'
            target='_blank'
          >
            <Button rounded size='large' className='w-full inline-flex items-center whitespace-nowrap font-thin'>
              {t('Get_started')}
              <svg xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                className="lucide lucide-arrow-right h-4 w-4">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>
          </a>
          <a
            href='https://saynetes.fr/'
            target='_blank'
          >
            <Button rounded size='large' variant='secondary' className='font-medium'>
              {t('Learn_More')}
            </Button>
          </a>
        </div>
      </section>
      <section className='bg-background-secondary py-20 max-lg:py-10'>
        <div className='mx-auto grid max-w-screen-lg grid-cols-3 gap-7 px-8 py-5 max-lg:max-w-fit max-lg:grid-cols-1 max-lg:gap-10'>
          <div className='text-center'>
            <h2 className='mb-3  text-xl font-semibold'>{t('Approachable')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'Easy_and_Accessible'
              )}
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>{t('Modular')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'Modular_and_Expandable'
              )}
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>{t('Accurate')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'Accurate_and_Reliable'
              )}
            </p>
          </div>
        </div>
      </section>
      {/* Section Pricing */}
      <section className='bg-background-primary py-20 max-lg:py-10'>
        <div className='mx-auto grid max-w-screen-lg grid-cols-3 gap-7 px-8 py-5 max-lg:max-w-fit max-lg:grid-cols-1 max-lg:gap-10'>

          <div className='relative rounded-2xl bg-background-secondary shadow-lg text-left px-10 py-10'>
            <h2 className='mb-3 text-xl font-semibold'>{t('Scene_1x1')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t('1x1_description')}
            </p>
            <h1 className='my-3 text-5xl font-semibold'>
              990€
              <span className='text-xs font-light'>
                {t('Scene_by_Language')}
              </span>
            </h1>
          </div>

          <div className='relative rounded-2xl bg-background-secondary shadow-lg border border-secondary text-left px-10 py-10'>
            <h2 className='mb-3 text-xl font-semibold'>{t('Serie_1x5')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t('1x5_description')}
            </p>
            <h1 className='my-3 text-5xl font-semibold'>
              890€
              <span className='text-xs font-light'>
                {t('Scene_by_Language')}
              </span>
            </h1>
          </div>

          <div className='relative rounded-2xl bg-background-secondary shadow-lg text-left px-10 py-10'>
            <h2 className='mb-3 text-xl font-semibold'>{t('Custom_Solution')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t('If_you_have_any_special_requests')}
            </p>
            <h1 className='my-3 text-2xl font-semibold'>
              {t('Contact_us')}
            </h1>
            <div className='flex items-center gap-2'><FiMail/><a className='text-sky-500 hover:text-sky-700 text-xs' href="mailto:contact@hammer-marteau.com">contact@hammer-marteau.com</a></div>
            <div className='flex items-center gap-2'><FiPhone/><span className='relative'>06 30 30 13 64</span></div>
          </div>
        </div>
      </section>
    </div>
  )
}
