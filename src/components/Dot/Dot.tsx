type Dot = {color: string}

export const Dot = ({color}:Dot) => {
  return <div className={`w-4 h-4 bg-amber-300 rounded-[50%] md:hidden ${color}`}></div>
}
