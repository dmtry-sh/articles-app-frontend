import { type FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NavBar.module.scss'
import { Button, ButtonVariant } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/Modal/Modal";

interface NavBarProps {
  className?: string
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
    const { t } = useTranslation()

    const [isAuthModalOpened, setIsAuthModalOpened] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModalOpened(prev => !prev);
    }, [])



    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                variant={ButtonVariant.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal
                isOpen={isAuthModalOpened}
                onClose={onToggleModal}
            >
                {/* eslint-disable-next-line i18next/no-literal-string */}
                {/* eslint-disable-next-line i18next/no-literal-string */}
                Рандомный текст
            </Modal>
        </div>
    )
}
