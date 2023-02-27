import { type FC } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red'
}

export interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        children,
        className,
        theme = AppLinkTheme.PRIMARY,
        ...restProps
    } = props

    return (
        <Link
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...restProps}
            className={classNames(cls.applink, {}, [className, cls[theme]])}
        >
            {children}
        </Link>
    )
}
