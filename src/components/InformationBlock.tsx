
import source from '../assets/icon-source.svg'
import type { InforBlockProps } from '../types/data.type'
const InformationBlock = ({selectTab, data}:InforBlockProps) => {
  return (
    <>
          <p className='py-2'>{data[selectTab].content}</p>
          <div className='flex flex-row justify-center xl:justify-start md:py-2'><p>Soure: <strong><a href={data[selectTab].source} target='_blank' className="underline">Wikipedia</a></strong></p><img src={source} className='w-3 h-3 ml-1' alt=''/>    </div>
    </>
  )
}

export default InformationBlock