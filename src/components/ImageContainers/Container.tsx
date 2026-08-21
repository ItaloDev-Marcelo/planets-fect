import type { ImageContentProps } from "../../shared/types/image.content"

const Container = ({url, style}:ImageContentProps) => {
  return  <img src={url} alt='' className={style} />
}

export default Container