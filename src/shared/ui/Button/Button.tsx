import { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ButtonVariant {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: ButtonVariant
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        variant,
        ...restProps
    } = props

    return (
        <button
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...restProps}
            type={'button'}
            className={classNames(cls.button, {}, [className, cls[variant]])}
        >
            {children}
        </button>
    )
}
