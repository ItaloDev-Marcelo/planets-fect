
type DotColorProp = {color: string}

export const DotColor = ({color}:DotColorProp) => {
  return (
    <div className={`w-4 h-4 bg-amber-300 rounded-[50%] md:hidden ${color}`}></div>
  )
}
