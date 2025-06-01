import { FC, ReactNode } from 'react'
import cls from './Button.module.scss'
import { classNames, Mods } from '../../lib/classNames';

type ButtonVariant = "default" | "primary";  
type ButtonSize = 42 | 70 | 83 | 91 | 102 | 113 | 115 | 131 | 135 | 147 | 169 | 175 | 201 | 212;

interface ButtonProps {
    children: ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
    max?: boolean;
    type?: string
    onClick?: () => void;
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
    102: cls.size102,
    113: cls.size113,
    115: cls.size115,
    131: cls.size131,
    135: cls.size135,
    147: cls.size147,
    169: cls.size169,
    175: cls.size175,
    201: cls.size201,
    212: cls.size212,
}

export const Button: FC<ButtonProps> = (props) => {
    const { children, className = '', variant = "default", size = "70", max,} = props;

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

