import type { Tabs } from "./Layout/CommunLayout";

export type buttonProps = {
    handleTabClick: (tab:Tabs) => void;
    name?: string;
    color?:string;
    valor: Tabs;
    selectTab?: string
}
const Button = ({handleTabClick,color,valor,selectTab}:buttonProps) => {
  return (
       <button className={` ${selectTab ?  color : 'bg-trasparent'}
        border border-gray p-2.5 w-35 mx-1 text-[0.7em] `} onClick={() => handleTabClick(valor)}>{selectTab}</button>
  )
}

export default Button