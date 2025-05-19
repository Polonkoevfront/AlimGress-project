import cls from './AppLink.module.scss'
import { FC, ReactNode } from "react"
import { LinkProps, NavLink } from "react-router-dom"
import { classNames } from "../../../shared/lib/classNames";

interface AppLinkProps extends LinkProps {
    children: ReactNode;
    className?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { children, className = '', to, ...rest } = props;

  return (
    <NavLink to={to} className={classNames(cls.link, {}, [className])} {...rest}>
      {children}
    </NavLink>
  )
}

