import type { Tabs } from "./Layout/CommunLayout";

export type buttonProps = {
    handleTabClick: (tab:Tabs) => void;
    name?: string;
    color?:string;
    valor: Tabs;
    title?: string;
    selectTab: Tabs
}


const Button = ({handleTabClick,color,valor,title,selectTab}:buttonProps) => {
  return (
       <button className={` ${valor == selectTab ?  `${color} text-gray-200`: 'bg-trasparent '}
        border border-gray p-2.5 w-35 mx-1 text-[1em] xl:w-full xl:my-3 xl:text-left font-semibold cursor-pointer `} onClick={() => handleTabClick(valor)}>{title}</button>
  )
}

export default Button