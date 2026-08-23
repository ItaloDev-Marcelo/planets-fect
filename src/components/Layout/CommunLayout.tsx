import { useState } from 'react'
import type { CommunLayoutProps } from '../../shared/types/data.type'
import InformationBlock from '../InformationBlock/InformationBlock'
import ImgSelect from '../../utils/ImgSelect';
import Block from './Block'
import type { Tabs } from '../../shared/types/tabs.type';
import { colors } from '../../shared/constants/Colors';
import Button from '../Btns/Button';
import NavegationTab from '../Nav/navegationTab';
import type { btnTp } from '../../shared/types/btn.type';
import type { BlockProps } from '../../shared/types/block.type';

const CommunLayout = ({data}:CommunLayoutProps) => {
  const [selectTab, setSelectTab] = useState<Tabs>("overview")
  const handleTabClick = (tab:Tabs) => setSelectTab(tab)

  const btnSelectDt:btnTp[] = [
                     {
                      valor: 'overview',
                      title: '01 Overview'
                     } ,
                      {
                      valor: 'structure',
                      title: '02 Internal Structure'
                     } ,
                      {
                      valor: 'geology',
                      title: '03 Surface Geology'
                     } 
  ]


  const blockDt:BlockProps[] = [
                    {
                    title: 'Rotation time',
                    content: data.rotation,
                    },
                    {
                       title: 'Revolution time',
                    content: data.revolution,
                    },
                    {
                       title: 'Radius',
                    content: data.radius,
                    },
                    {
                       title: 'Average temp.',
                    content: data.temperature,
                    }
  ]


  return (
    <div>
      <div className='py-2'>
          <div className='text-white flex flex-col items-center justify-center md:hidden  border-b-2 border-gray-300  w-full h-20'>

          <div className='mt-0 gap-x-8 pl-2 flex flex-row' >
                <NavegationTab color={`${colors[data.name as keyof typeof colors]}`} handleTabClick={handleTabClick}  selectTab={selectTab} />
          </div>

          </div>
            
       <main className='text-white flex flex-col items-center justify-center'>
       <div className=' flex flex-col xl:flex-row   mt-0 md:my-10 lg:my-0 xl:pt-7 px-50 xl:px-5 xl:gap-30 items-center justify-between '>
          <div className='my-10 xl:my-0'> 
            <ImgSelect selectTab={selectTab} data={data} />
          </div>
           <section className=' text-center lg:text-left justify-around'>
               <div className='flex flex-row xl:flex-col 
                items-center justify-center'>

                <div className='md:text-left md:mr-15 '>
                  <h1 className='font-bold text-[1.5em] uppercase my-5 text-2xl xl:text-[3.5rem] '>{data.name}</h1>
                 <InformationBlock selectTab={selectTab} data={data} />
                </div>

               <div className='hidden mt-4 md:flex pt-2.5 xl:-ml-9 md:flex-col w-[90%]  '>
                  {
                    btnSelectDt.map((item, index) => (
                        <Button key={index} valor={item.valor} title={item.title} color={colors[data.name as keyof typeof colors]} handleTabClick={handleTabClick}  selectTab={selectTab} />
                    ))
                  }
                </div>
               </div>
           </section>
       </div>
       <div className='flex flex-col   md:flex-row justify-center items-center gap-5 mt-8 p-2'>
        {
           blockDt.map((item,index) => (
            <Block key={index} title={item.title} content={item.content} />
           ))
        }
       </div>
    </main>
      </div>
    </div>
  )
}

export default CommunLayout