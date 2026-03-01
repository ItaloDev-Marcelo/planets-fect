import { useState } from 'react'
import type { CommunLayoutProps } from '../../types/data.type'
import ButtonSelect from '../../utils/ButtonSelect'
import InformationBlock from '../InformationBlock/InformationBlock'
import ImgSelect from '../../utils/ImgSelect';
import ButtonSelectV2 from '../../utils/ButtonSelectV2';
import Nav from '../../Nav/Nav'
import Block from './utils/Block'
import type { Tabs } from '../../types/tabs.type';

const CommunLayout = ({data}:CommunLayoutProps) => {
  const [selectTab, setSelectTab] = useState<Tabs>("overview")
  const handleTabClick = (tab:Tabs) => setSelectTab(tab)
  const [navBar, setNavBar] = useState(false)
  const handleNavBar = () => setNavBar(!navBar);

  return (
    <div>
      <Nav navBar={navBar} handleNavBar={handleNavBar} />
      <div className={`${!navBar ? 'flex flex-col' : 'hidden md:flex'}`}>
          <div className='md:hidden'><ButtonSelectV2 name={data.name} handleTabClick={handleTabClick}  selectTab={selectTab} /></div>
        <main className='text-white'>
       <div className='flex flex-col xl:flex-row  pt-25 xl:pt-15 px-50 xl:px-35 items-center justify-between content-center'>
          <div className='my-4   xl:my-0  '> <ImgSelect selectTab={selectTab} data={data} /></div>
           <section className='w-100 md:w-125 lg:w-100 xl:w-150 text-center lg:text-left px-7 '>
                <h1 className='font-bold text-[1.5em] uppercase my-5 text-2xl xl:text-[3.5rem]'>{data.name}</h1>
                <InformationBlock selectTab={selectTab} data={data} />
               <div className='hidden mt-4 md:flex  pt-2.5   md:w-120 xl:flex-col xl:w-full '>
                  <ButtonSelect name={data.name} valor="overview" handleTabClick={handleTabClick}  selectTab={selectTab} title='01 Overview' />
                  <ButtonSelect name={data.name} valor="structure" handleTabClick={handleTabClick} selectTab={selectTab} title='02 Internal Structure' />
                  <ButtonSelect name={data.name} valor="geology" handleTabClick={handleTabClick}  selectTab={selectTab} title='03 Surface Geology' />
                </div>
           </section>
       </div>
       <div className='flex flex-col   md:flex-row justify-center items-center gap-5 mt-15 p-5'>
        <Block title='Rotation time' content={data.rotation} />
        <Block title='Revolution time' content={data.revolution} />
        <Block title='Radius' content={data.radius} />
        <Block title='Average temp.' content={data.temperature} />
       </div>
    </main>
      </div>
    </div>
  )
}

export default CommunLayout