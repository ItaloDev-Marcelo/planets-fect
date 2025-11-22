import type { buttonProps } from "./Button"

const ButtonBar = ({handleTabClick,selectTab,color, title, valor}:buttonProps) => {
  return (
        <button onClick={() => handleTabClick(valor)}
         className={`mx-2.5 uppercase font-semibold text-[0.8rem] ${selectTab === valor && `text-${color}`}  `}
        >{title}</button>
  )
}

export default ButtonBar