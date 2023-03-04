import { FC, memo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './LoginForm.module.scss';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

export interface LoginFormProps {
    className?: string;
}

const reducers: ReducersList = {
    loginForm: loginReducer
}

const LoginForm: FC<LoginFormProps> = memo((props) => {
    const dispatch = useDispatch();

    const { className } = props;

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const { t } = useTranslation();

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);


    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeOnUnmount
        >
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
        </DynamicModuleLoader>
    )
});

export default LoginForm;