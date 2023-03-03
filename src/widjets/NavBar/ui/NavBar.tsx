import { type FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NavBar.module.scss'
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'appEntities/User';

interface NavBarProps {
    className?: string
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);

    const [isModalOpened, setIsModalOpened] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsModalOpened(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsModalOpened(true);
    }, []);

    const onLogOut = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.navbar, {}, [className])}>
                <Button
                    variant={ButtonVariant.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onLogOut}
                >
                    {t('Выйти')}
                </Button>
                <LoginModal
                    isOpen={isModalOpened}
                    onClose={onCloseModal}
                />
            </div>
        )
    }

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
