import {Dot} from '../Dot/Dot'
import Arrow from '../../assets/icon-chevron.svg'
import type { NavListProps } from "../../shared/types/nav.list"
import { Link } from "@tanstack/react-router"

export const NavItem = ({path, name, color, handleNavBar}:NavListProps) => {


  return (
   <Link to={path} onClick={handleNavBar}>
       <li className="list-none p-2 md:mt-2.5" >
        <div className="flex flex-row justify-between items-center px-2">
          <button className="bg-trasparent uppercase 
          flex flex-row items-center gap-2.5 cursor-pointer font-semibold hover:text-gray-400">
           <Dot color={color}/>{name}</button>
           <img src={Arrow} alt=''  className='w-2.5 md:hidden' />
        </div>
        <hr className="mt-5 md:hidden text-gray-200"/>
    </li>
   </Link>
  )
}
