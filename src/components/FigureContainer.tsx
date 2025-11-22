import type { FigureContainerProps } from '../types/figure.type'

const FigureContainer = ({children, style}:FigureContainerProps) => {
  return <figure className={style}>{children}</figure>
}

export default FigureContainer