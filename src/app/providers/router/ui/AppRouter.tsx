import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widjets/PageLoader'

export const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map(props => (
                    <Route
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        {...props}
                        key={props.path}
                        element={(<div className="page-wrapper">{props.element}</div>)}
                    />
                ))}
            </Routes>
        </Suspense>
    )
}
