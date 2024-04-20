import { getCookie, setCookie } from "@/app/utils"

enum Themes {
  Light = 'light',
  Dark = 'dark',
}

const THEME_KEY = 'theme'
const DEFAULT_THEME = Themes.Light
export const DARK_THEME_CLASSNAME = 'dark'
export const LIGHT_THEME_CLASSNAME = 'light'
export const SYSTEM_THEME_CLASSNAME = 'system'

export type TThemes = typeof DARK_THEME_CLASSNAME| typeof LIGHT_THEME_CLASSNAME | typeof SYSTEM_THEME_CLASSNAME

export function getStoredTheme() {
  try {
    return getCookie(THEME_KEY) ?? DEFAULT_THEME
  } catch (e) {
    return DEFAULT_THEME
  }
}

export function setTheme(theme: TThemes) {
  const root = getHtml()

  const setThemeCookie = (value: string) => {
    setCookie(THEME_KEY, value, {
      path: '/',
    })
  }

  root.classList.remove(DARK_THEME_CLASSNAME)
  root.classList.remove(LIGHT_THEME_CLASSNAME)

  const setThemeCookieSystem = () => {
    setThemeCookie(SYSTEM_THEME_CLASSNAME)

    if (isDarkSystemTheme()) {
      root.classList.add(DARK_THEME_CLASSNAME)
    }
  }

  const setThemeCookieDark = () => {
    root.classList.add(DARK_THEME_CLASSNAME)
    setThemeCookie(DARK_THEME_CLASSNAME)
  }

  const changeTheme = (theme: TThemes) => {
    const themeList = {
      'system': () => setThemeCookieSystem(),
      'dark': () => setThemeCookieDark(),
      'light': () => setThemeCookie(LIGHT_THEME_CLASSNAME)
    } 

    return themeList[theme || 'light']
  }

  changeTheme(theme)()
}

function getHtml() {
  return document.firstElementChild as HTMLHtmlElement
}

export function isDarkSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}