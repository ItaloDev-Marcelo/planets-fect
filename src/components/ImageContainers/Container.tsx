import type { ImageContentProps } from "../../shared/types/image.content"

const Container = ({url, style, name}:ImageContentProps) => {
  return  <img src={url} alt='' id={name}  className={style} />
}

export default Container