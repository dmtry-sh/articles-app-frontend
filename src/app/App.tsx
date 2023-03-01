import { useTheme } from 'app/providers/ThemeProvider'
import { NavBar } from 'widjets/NavBar'
import { Sidebar } from 'widjets/Sidebar'
import { type FC, Suspense } from 'react'
import { AppRouter } from './providers/router'
import { classNames } from 'shared/lib/classNames/classNames'

export const App: FC = () => {
    const { theme } = useTheme();

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
