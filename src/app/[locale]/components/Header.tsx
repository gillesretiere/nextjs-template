'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import GithubIcon from '../../icons/github'
import LogoIcon from '../../icons/logo'
import LangSwitcher from './LangSwitcher'
import ThemeSwitch from './ThemeSwitch'
import { NavBar } from './NavBar'

interface Props {
  locale: string
}
export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('')
  return (
    <>
      <div className='mx-auto flex max-w-screen-2xl flex-row items-center justify-between p-5'>
        <Link lang={locale} href='/'>
          <div className='flex flex-row items-center'>
            <img src="/logo.png" className='mr-4 w-12'></img>

            <span className='text-xs lg:text-lg xl:text-xl mx-2 select-none hidden sm:block'>Hammer &amp; Marteau</span>
          </div>
        </Link>
        <div className='flex flex-row items-center gap-3 text-xs font-thin whitespace-nowrap'>
          <nav className='mx-4 inline-flex gap-5'>
            <Link lang={locale} href={`/about`}>
              {t('About')}
            </Link>
          </nav>
          <ThemeSwitch />
          <LangSwitcher />
        </div>
      </div>
    </>

  )
}
