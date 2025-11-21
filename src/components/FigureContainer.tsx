import React from 'react'

type FigureContainerProps = {children: React.ReactNode, style?: string}

const FigureContainer = ({children, style}:FigureContainerProps) => {
  return (
    <figure className={style}>{children}</figure>
  )
}

export default FigureContainer