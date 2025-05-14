import { FC, forwardRef, InputHTMLAttributes, ReactNode, useState} from 'react'
import cls from './Input.module.scss'
import { classNames } from '../../lib/classNames';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    children: ReactNode;
    value: string;
}

export const Input: FC<InputProps> = forwardRef((props, ref: any) => {
  const { children, value = '', className = '', height, placeholder, ...rest } = props;
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className={classNames(cls.input_block, {[cls.active]: value || isFocused}, [className])}>
            <div className={cls.label} 
                 onFocus={() => setIsFocused(true)}
                 onBlur={() => setIsFocused(false)}>
                <input 
                    className={cls.input}
                    {...rest}
                    ref={ref}
                    value="wws"
                />
                {placeholder && <span className={cls.placeholder}>{placeholder}</span>}
            </div>  
        </div>
  )
})

