import { FC, ReactNode } from 'react'
import cls from './Text.module.scss'
import { classNames } from '../../lib/classNames'

type AsType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
type TextFz = 14 | 16 | 18 | 20 | 22 | 24 | 26 | 28 | 30 | 32 | 34 | 36 | 38 | 40 | 42 | 44
type TextFw = 400 | 500 | 600 | 700 | 800 

interface TextProps {
    children: ReactNode;
    className?: string;
    as?: AsType;
    fz?: TextFz;
    fw?: TextFw;
}

const fzClasses: Record<TextFz, string> = {
  14: cls.fz14,
  16: cls.fz16,
  18: cls.fz18,
  20: cls.fz20,
  22: cls.fz22,
  24: cls.fz24,
  26: cls.fz26,
  28: cls.fz28,
  30: cls.fz30,
  32: cls.fz32,
  34: cls.fz24,
  36: cls.fz36,
  38: cls.fz38,
  40: cls.fz40,
  42: cls.fz42,
  44: cls.fz44,
}

const fwClasses: Record<TextFw, string> = {
  400: cls.fw400,
  500: cls.fw500,
  600: cls.fw600,
  700: cls.fw700,
  800: cls.fw800,
}

export const Text: FC<TextProps> = (props) => {
    const { children, className = '', as = 'h2', fz = '16', fw = 600 } = props;

    const classes = [
      fz && fzClasses[fz],
      fw && fwClasses[fw],
      className
    ]

    const getAS = {
      h1: <h1 className={(classNames("", {}, classes))}>{children}</h1>,
      h2: <h2 className={(classNames("", {}, classes))}>{children}</h2>,
      h3: <h3 className={(classNames("", {}, classes))}>{children}</h3>,
      h4: <h4 className={(classNames("", {}, classes))}>{children}</h4>,
      h5: <h5 className={(classNames("", {}, classes))}>{children}</h5>,
      h6: <h6 className={(classNames("", {}, classes))}>{children}</h6>,
      p: <p className={(classNames("", {}, classes))}>{children}</p>,
    }

  return getAS[as]
}