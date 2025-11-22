import { NavItem } from '../components/NavItem'
import {NavList} from '../Nav/data/NavList'
import Hamburger from '../assets/icon-hamburger.svg'  
import type { NavProps } from '../types/nav.type'

const Nav = ({navBar, handleNavBar}:NavProps ) => {
  return (
    <nav className='flex flex-col px-2 w-full xl:flex-row md:justify-center
     border-b md:gap-5 border-gray-50 md:items-center xl:justify-between text-white xl:h-25 xl:py-10 ' >
      <div className='p-2 my-7 md:my-1.5 flex flex-row justify-between items-center'>
          <a href='#' className="uppercase pl-2.5 font-bold ">The Planets</a>
          <button className='md:hidden' onClick={handleNavBar}><img src={Hamburger}/></button>
       </div>
      
        <ul className={` ${navBar ? 'flex-col md:flex' : 'hidden md:flex ' }
       md:flex-row xl:mr-4 md:flex-wrap px-4 lg:px-0  md:justify-center md:gap-2.5 space-y-4 pt-5 fixed top-25 md:top-[-25px] xl:top-[-5px] xl:w-auto xl:h-auto
        left-0 w-full h-full md:relative
         bg-deep-space-blue z-100 h-max-full `}>
          {
             NavList.map(({path,name, color}, index) => (
                <NavItem key={index} path={path} name={name} color={color} />
             ))
          }
        </ul>
        
    </nav>
  )
}

export default Nav