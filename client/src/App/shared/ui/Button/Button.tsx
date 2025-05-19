import { FC, ReactNode } from 'react'
import cls from './Button.module.scss'
import { classNames, Mods } from '../../lib/classNames';

type ButtonVariant = "default" | "primary";  
type ButtonSize = 42 | 70 | 83 | 91 | 113 | 115 | 135 | 169 | 175 | 212;

interface ButtonProps {
    children: ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
    max?: boolean;
}  

const variantClasses: Record<ButtonVariant, string> = {
    default: cls.default,
    primary: cls.primary,
}

const sizeClasses: Record<ButtonSize, string> = {
    42: cls.size42,
    70: cls.size70,
    83: cls.size83,
    91: cls.size91,
    113: cls.size113,
    115: cls.size115,
    135: cls.size135,
    169: cls.size169,
    175: cls.size175,
    212: cls.size212,
}

export const Button: FC<ButtonProps> = (props) => {
    const { children, className = '', variant = "default", size = "70", max} = props;

    const classes = [
        variant && variantClasses[variant],
        size && sizeClasses[size],
        className
    ]

    const mods: Mods = {
        [cls.max]: !max
    }

  return (
    <button className={classNames(cls.btn, mods, classes)}>
        {children}
    </button>
  )
}

