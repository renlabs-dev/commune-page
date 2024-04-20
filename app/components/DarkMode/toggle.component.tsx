import { useEffect, useState } from 'react'

import {
  DARK_THEME_CLASSNAME,
  LIGHT_THEME_CLASSNAME,
  SYSTEM_THEME_CLASSNAME,
  TThemes,
  getStoredTheme,
  isDarkSystemTheme,
  setTheme,
} from './theming'

import {
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/20/solid'

interface ThemeOptionProps {
  text: string
  theme: TThemes
  currentTheme: TThemes
  icon: React.ReactNode
  handleThemeChange: (theme: TThemes) => void
}

const ThemeOption = ({
  text,
  icon,
  theme,
  currentTheme,
  handleThemeChange,
}: ThemeOptionProps) => {
  return (
    <div
      className={`${currentTheme === theme ? 'bg-gray-100 dark:bg-[#131B2A]' : ''
        } flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-title hover:bg-gray-200 last:rounded-b-lg first:rounded-t-lg hover:text-gray-900 dark:text-titleDark dark:hover:bg-blue-900`}
      onClick={() => handleThemeChange(theme)}
    >
      <span>{icon}</span>
      <span>{text}</span>
    </div>
  )
}

export const DarkModeToggle = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [currentTheme, setCurrentTheme] = useState<TThemes>(getStoredTheme())
  const [icon, setIcon] = useState<React.ReactNode>(null)

  const handleThemeChange = (theme: TThemes) => {
    setCurrentTheme(theme)
    setIsDropdownOpen(false)
  }

  useEffect(() => {
    const handleIcon = () => {
      const isDarkTheme = currentTheme === DARK_THEME_CLASSNAME
      const isSystemTheme = currentTheme === SYSTEM_THEME_CLASSNAME

      const shouldUseSystemDarkTheme = isSystemTheme && isDarkSystemTheme()

      if (isDarkTheme || shouldUseSystemDarkTheme) {
        return <MoonIcon className={`h-6 dark:fill-title dark:fill-darkTitle lg:dark:fill-white`} />
      }

      return <SunIcon className={'h-6 dark:fill-title md:dark:fill-white'} />
    }

    setIcon(handleIcon())
  }, [currentTheme])


  useEffect(() => {
    setTheme(currentTheme)
  }, [currentTheme])

  const themes = [
    {
      text: 'Light',
      theme: LIGHT_THEME_CLASSNAME,
      icon: <SunIcon className={'h-6 dark:fill-titleDark'} />,
    },
    {
      text: 'Dark',
      theme: DARK_THEME_CLASSNAME,
      icon: <MoonIcon className={'h-6 dark:fill-titleDark'} />,
    },
    {
      text: 'System',
      theme: SYSTEM_THEME_CLASSNAME,
      icon: <ComputerDesktopIcon className={'h-6 dark:fill-titleDark'} />,
    },
  ]

  return (
    <>
      <button
        type='button'
        className='inline-flex items-center justify-center rounded-xl p-1 hover:bg-gray-100 focus:ring-1 focus:ring-gray-200 focus:ring-offset-2 dark:fill-title dark:ring-offset-transparent dark:hover:bg-gray-200 lg:dark:hover:bg-[#0C1320] dark:focus:ring-titleDark'
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {icon}
      </button>
      {isDropdownOpen && (
        <div className='dark:shadow-custom-dark absolute right-0 top-10 w-fit origin-top-right rounded-xl border-2 border-black bg-white shadow-custom dark:border-titleDark dark:bg-[#0C1320] md:right-0 md:top-12 md:mt-4'>
          <div
            role='menu'
            className='py-0.5'
            aria-orientation='vertical'
            aria-labelledby='options-menu'
          >
            {themes.map((theme) => (
              <ThemeOption
                key={theme.text}
                text={theme.text}
                theme={theme.theme as TThemes}
                icon={theme.icon}
                currentTheme={currentTheme}
                handleThemeChange={handleThemeChange}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
