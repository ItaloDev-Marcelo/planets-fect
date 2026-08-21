import type { FigureContainerProps } from '../../shared/types/figure.type';

const FigureContainer = ({children, style}:FigureContainerProps) => {
  return <figure className={style}>{children}</figure>
}

export default FigureContainer