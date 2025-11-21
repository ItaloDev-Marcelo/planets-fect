
type ImageContentProps = {url: string, style: string}

const ImageContent = ({url, style}:ImageContentProps) => {
  return  <img src={url} alt='' className={style} />

}

export default ImageContent