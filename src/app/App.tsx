import { useTheme } from 'app/providers/ThemeProvider'
import { NavBar } from 'widjets/NavBar'
import { Sidebar } from 'widjets/Sidebar'
import { type FC, Suspense, useEffect } from 'react'
import { AppRouter } from './providers/router'
import { classNames } from 'shared/lib/classNames/classNames'
import { useDispatch } from 'react-redux';
import { userActions } from 'appEntities/User';

export const App: FC = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <NavBar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}
