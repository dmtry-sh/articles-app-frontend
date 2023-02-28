import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import cls from './LangSwitcher.module.scss'


interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const { className, short } = props;

    const { t, i18n } = useTranslation()

    const toggle = () => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
    }

    return (
        <Button
            onClick={toggle}
            variant={ButtonVariant.CLEAR}
            className={classNames(cls.langSwitcher, {}, [className])}
        >
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    )
}
