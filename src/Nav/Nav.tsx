import { useState } from 'react'
import { NavItem } from '../components/NavItem'
import {NavList} from '../Nav/data/NavList'
import Hamburger from '../assets/icon-hamburger.svg'  
const Nav = () => {

  const [navBar, setNavBar] = useState(false)

  return (
    <nav className='flex flex-col px-2 xl:flex-row md:justify-center md:border-b md:gap-5 md:border-gray-50 
    
     md:items-center xl:items-center xl:justify-between text-white xl:h-25 xl:py-10 ' >
      <div className='p-2 my-7 md:my-1.5 flex flex-row justify-between items-center'>
          <a href='#' className="uppercase pl-2.5 font-medium ">The Planets</a>
          <button className='md:hidden' onClick={() => setNavBar(!navBar)}><img src={Hamburger}/></button>
       </div>
      
        <ul className={` ${navBar ? 'flex-col md:flex' : 'hidden md:flex' } md:flex-row xl:mr-4 md:flex-wrap md:justify-center md:gap-2.5 space-y-4`}>
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