import { useNavigate } from "react-router-dom"
import {DotColor} from '../components/DotColor'
import Arrow from '../assets/icon-chevron.svg'
type NavListProps = {
    path: string, 
    name: string,
    color: string
}

export const NavItem = ({path, name, color}:NavListProps) => {

 const navigate = useNavigate()
 
  return (
    <li className="list-none p-2 md:mt-2.5" onClick={() => navigate(path)} >
        <div className="flex flex-row justify-between items-center px-2">
          <button className="bg-trasparent uppercase 
          flex flex-row items-center gap-2.5 cursor-pointer font-semibold hover:text-gray-400">
           <DotColor color={color}/>{name}</button>
           <img src={Arrow} alt=''  className='w-2.5 md:hidden' />
        </div>
        <hr className="my-1 md:hidden text-gray-200"/>
    </li>
  )
}
