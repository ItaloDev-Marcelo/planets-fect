import type { NavegationTabProps } from '../../shared/types/navegation.type'
import ButtonBar from '../Btns/ButtonBar'

const NavegationTab = ({handleTabClick,selectTab,color}:NavegationTabProps) => {
  return (
       <div className='flex flex-row items-center justify-center  relative py-3 pb-5  md:w-120 xl:flex-col xl:w-full text-white'>
                <ButtonBar handleTabClick={handleTabClick} selectTab={selectTab} color={color} valor='overview' title='overview' />
                <div className='mx-9'>
                  <ButtonBar handleTabClick={handleTabClick} selectTab={selectTab} color={color} valor='structure' title='structure' />
                </div>
                <ButtonBar handleTabClick={handleTabClick} selectTab={selectTab} color={color} valor='geology' title='surface' />
       <div className={`absolute top-16 ${selectTab === 'overview' && 'left-1 w-15 xs-2:w-15 xs-2:left-17'} 
        ${selectTab === 'structure' && 'left-26 w-19 xs-2:w-15 xs-2:left-42.5   '} 
        ${selectTab === 'geology' && 'left-55 xs-2:left-69 w-15'}    h-1 bg-${color}`}>

       </div>
      </div>
  )
}

export default NavegationTab