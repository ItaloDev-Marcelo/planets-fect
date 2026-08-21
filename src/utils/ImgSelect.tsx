import ImageContent from "../components/ImageContainers/Container"
import FigureContainer from "../components/ImageContainers/FigureContainer"
import type { InforBlockProps } from "../shared/types/data.type"
const ImgSelect = ({selectTab, data}:InforBlockProps) => {
   switch(selectTab) {
      case  "overview":
        return <FigureContainer><ImageContent name={data.name} style='min-w-30 px-20 md:p-0 md:max-w-75 xl:max-w-125 '  url={data.images.planet}/></FigureContainer>
      break  
      case  "structure":
        return <FigureContainer><ImageContent name={data.name} style='min-w-30 px-20 md:p-0 md:max-w-75 xl:max-w-125' url={data.images.internal}/></FigureContainer>
      break  
      case  "geology":
        return <FigureContainer style='relative'>
             <ImageContent name={data.name} style='min-w-30 px-20 md:p-0 md:max-w-75 xl:max-w-125' url={data.images.planet}/>
             <div className='absolute top-22 left-48 md:top-40 xl:left-80 xl:top-75 md:left-50 '>
                  <ImageContent style="w-30  md:max-w-40 xl:w-110 rotate-320" url={data.images.geology}/>
             </div>
        </FigureContainer>
      break  
      default:
        return null
      break  
   }
}

export default ImgSelect