import ButtonBar from './components/ButtonBar'
import type { Tabs } from './components/Layout/CommunLayout'

type NavegationTabProps = {
    handleTabClick: (tab: Tabs) => void,
    selectTab: Tabs,
    color: string
}

const NavegationTab = ({handleTabClick,selectTab,color}:NavegationTabProps) => {
  return (
       <div className='flex flex-row items-center justify-center  relative py-3 pb-5 border-b-1 border-gray-300  md:w-120 xl:flex-col xl:w-[100%] text-white'>
                <ButtonBar handleTabClick={handleTabClick} selectTab={selectTab} color={color} valor='overview' title='overview' />
                <div className='mx-9'><ButtonBar handleTabClick={handleTabClick} selectTab={selectTab} color={color} valor='structure' title='structure' /></div>
                <ButtonBar handleTabClick={handleTabClick} selectTab={selectTab} color={color} valor='geology' title='surface' />
       <div className={`absolute top-13 ${selectTab === 'overview' && 'left-8 w-20'}  ${selectTab === 'structure' && 'left-39 w-19'} ${selectTab === 'geology' && 'left-73 w-15'}    h-1 bg-${color}`}></div>
      </div>
  )
}

export default NavegationTab