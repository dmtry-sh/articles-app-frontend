import { FC, memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { loginActions } from '../../model/slice/loginSlice';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './LoginForm.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

export interface LoginFormProps {
    className?: string;
}

const LoginForm: FC<LoginFormProps> = memo((props) => {
    const { className } = props;

    const dispatch = useDispatch();

    const {
        username,
        password,
        isLoading,
        error
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    const { t } = useTranslation();

    return (
        <div
            className={classNames(cls.LoginForm, {}, [className])}
        >
            <Text title={t('Форма авторизации')} />
            {error && (<Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />)}
            <Input
                type="text"
                placeholder={t('Введите username')}
                className={cls.input}
                onChange={onChangeUsername}
                value={username}
                autofocus
            />
            <Input
                type="text"
                placeholder={t('Введите password')}
                className={cls.input}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={cls.loginBtn}
                variant={ButtonVariant.OUTLINE}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    )
});

export default LoginForm;