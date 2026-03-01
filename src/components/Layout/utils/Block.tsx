import type { BlockProps } from "../../../types/block.type"

const Block = ({title, content}:BlockProps) => {
  return (
     <article className='w-full flex  flex-row md:w-40 xl:w-60  h-25 p-4 border border-gray-400 rounded-[7px] 
          gap-2.5 items-center justify-between md:flex-col xl:flex-row'>
           <div><h2 className='uppercase text-[.9em] xl:text-[1em]  font-semibold  '>{title}</h2></div>
           <div><h3 className='text-[1.1em] font-bold'>{content}</h3></div>
     </article>
  )
}

export default Block