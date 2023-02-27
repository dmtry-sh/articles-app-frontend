import { type RouteProps } from 'react-router-dom'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found'
}

export const routesPaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: routesPaths.main,
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: routesPaths.about,
        element: <AboutPage />
    },
    [AppRoutes.NOT_FOUND]: {
        path: routesPaths.not_found,
        element: <NotFoundPage />
    }
}
