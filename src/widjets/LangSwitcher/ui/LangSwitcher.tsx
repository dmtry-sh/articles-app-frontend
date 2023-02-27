import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'


interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation()

    const toggle = () => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
    }

    return (
        <Button
            onClick={toggle}
            variant={ButtonVariant.CLEAR}
            className={classNames('', {}, [className])}
        >
            {t('Язык')}
        </Button>
    )
}
