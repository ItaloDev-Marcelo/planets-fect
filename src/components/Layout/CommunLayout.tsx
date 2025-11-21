import { useState } from 'react'
import type { CommunLayoutProps } from '../../types/data.type'
import ButtonSelect from '../../utils/ButtonSelect'
import InformationBlock from '../InformationBlock'
import ImgSelect from '../../utils/ImgSelect';
export type Tabs = "overview" | "structure" | "geology";
const CommunLayout = ({data}:CommunLayoutProps) => {
  const [selectTab, setSelectTab] = useState<Tabs>('overview')
  const handleTabClick = (tab:Tabs) => setSelectTab(tab)

  return (
    <main className='text-white'>
       <div className='flex flex-col xl:flex-row  pt-25 px-50 items-center justify-between content-center'>
          <div className='my-4   xl:my-0  '> <ImgSelect selectTab={selectTab} data={data} /></div>
           <section className='w-100 md:w-125 lg:w-100 text-center lg:text-left px-7 '>
                <h1 className='font-bold text-[em] uppercase my-5 text-2xl'>{data.name}</h1>
                <InformationBlock selectTab={selectTab} data={data} />
               <div className='flex mt-4 md:flex md:ml-7 pt-2.5 xl:ml-0 md:w-120 '>
                  <ButtonSelect name={data.name} valor='overview' handleTabClick={handleTabClick} selectTab='01 Overview' />
                  <ButtonSelect name={data.name} valor='structure' handleTabClick={handleTabClick} selectTab='02 Internal Structure' />
                  <ButtonSelect name={data.name} valor='geology' handleTabClick={handleTabClick} selectTab='03 Surface Geology' />
                </div>
           </section>
       </div>
       <div className='flex flex-col  xl:flex-row justify-center items-center gap-5 mt-15 p-5'>
         <article className='w-full  md:w-40 h-25 p-4 border border-gray-400 rounded-[7px]  gap-2.5 items-start justify-center flex-col'>
           <h2 className='uppercase text-[.7em] mb-2.5'>Rotation time</h2>
           <h3 className='text-[1.2em] font-bold'>{data.rotation}</h3>
         </article>
         <article className='w-full  md:w-40 h-25  p-4  border border-gray-400 rounded-[7px] gap-2.5 items-start justify-center flex-col'>
            <h2 className='uppercase text-[.7em] mb-2.5'>Revolution time</h2>
            <h3 className='text-[1.2em] font-bold'>{data.revolution}</h3>
         </article>
         <article className='w-full  md:w-40 h-25  p-4  border border-gray-400 rounded-[7px] gap-2.5 items-start justify-center flex-col'>
            <h2 className='uppercase text-[.7em] mb-2.5'>Radius</h2>
             <h3 className='text-[1.2em] font-bold'>{data.radius}</h3>
         </article>
         <article className='w-full  md:w-40 h-25  p-4  border border-gray-400 rounded-[7px] gap-2.5 items-start justify-center flex-col'>
             <h2 className='uppercase text-[.7em] mb-2.5'>Average temp.</h2>
              <h3 className='text-[1.2em] font-bold'>{data.temperature}</h3>
         </article>
       </div>
    </main>
  )
}

export default CommunLayout