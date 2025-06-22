import React, { FC, ReactNode } from "react"
import ContentLoader from "react-content-loader"
import cls from './Skeleton.module.scss'

interface SkeletonProps {
  className?: string;
}

export const Skeleton: FC <SkeletonProps> = ({className}) => (
  <ContentLoader 
  className={cls.skeleton}
    speed={2}
    width={400}
    height={410}
    viewBox="0 0 400 410"
    backgroundColor="#f7f7f7"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="270" rx="0" ry="0" width="233" height="12" /> 
    <rect x="0" y="290" rx="0" ry="0" width="233" height="12" /> 
    <rect x="0" y="310" rx="0" ry="0" width="233" height="12" /> 
    <rect x="15" y="330" rx="0" ry="0" width="203" height="12" /> 
    <rect x="25" y="360" rx="0" ry="0" width="183" height="41" /> 
    <rect x="0" y="22" rx="0" ry="0" width="233" height="233" />
  </ContentLoader>
)

