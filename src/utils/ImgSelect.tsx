import ImageContent from "../components/ImageContent"
import FigureContainer from "../components/FigureContainer"
import type { InforBlockProps } from "../types/data.type"
const ImgSelect = ({selectTab, data}:InforBlockProps) => {
   switch(selectTab) {
      case  "overview":
        return <FigureContainer><ImageContent style='min-w-40 md:max-w-75'  url={data.images.planet}/></FigureContainer>
      break  
      case  "structure":
        return <FigureContainer><ImageContent style='min-w-40 md:max-w-75' url={data.images.internal}/></FigureContainer>
      break  
      case  "geology":
        return <FigureContainer style='relative'>
             <ImageContent style='min-w-40 md:max-w-75' url={data.images.planet}/>
             <div className='absolute top-22 left-26 md:top-40 md:left-50 '>
                  <ImageContent style="min-w-20  md:max-w-40 rotate-320" url={data.images.geology}/>
             </div>
        </FigureContainer>
      break  
      default:
        return null
      break  
   }
}

export default ImgSelect