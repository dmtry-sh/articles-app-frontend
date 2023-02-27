import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            className={classNames('', {}, [className, theme])}
            variant={ButtonVariant.CLEAR}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? (<DarkIcon />) : (<LightIcon />)}
        </Button>
    )
}
