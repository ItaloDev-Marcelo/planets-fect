import type { ImageContentProps } from "../types/image.content"

const ImageContent = ({url, style}:ImageContentProps) => {
  return  <img src={url} alt='' className={style} />

}

export default ImageContent