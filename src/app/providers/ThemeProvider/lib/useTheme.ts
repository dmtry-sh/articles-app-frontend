import { useContext, useEffect } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

export interface IUseThemeResult {
  theme?: Theme
  toggleTheme: () => void
}

export const useTheme: () => IUseThemeResult = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        if (theme && !document.body.className) {
            document.body.className = theme;
        }
        // eslint-disable-next-line
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        if (setTheme) {
            setTheme(newTheme)
            document.body.className = newTheme;
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
        }
    }

    return { theme, toggleTheme }
}
