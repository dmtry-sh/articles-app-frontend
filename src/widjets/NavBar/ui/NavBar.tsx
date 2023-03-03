import { type FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NavBar.module.scss'
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUserName';

interface NavBarProps {
  className?: string
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
    const { t } = useTranslation()

    const [isModalOpened, setIsModalOpened] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsModalOpened(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsModalOpened(true);
    }, [])



    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                variant={ButtonVariant.CLEAR_INVERTED}
                className={cls.links}
                onClick={onOpenModal}
            >
                {t('Войти')}
            </Button>
            <LoginModal
                isOpen={isModalOpened}
                onClose={onCloseModal}
            />
        </div>
    )
}
