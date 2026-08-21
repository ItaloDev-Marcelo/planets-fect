import { Link } from '@tanstack/react-router'

export const NotFound = () => {
  return (
   <main className='flex flex-col items-center justify-center p-6'>
        <h1 className='uppercase tracking-wider text-2xl mt-25'>Page not found !</h1> 
       <Link className='outline-2 text-white text-center my-9 hover:text-black font-semibold w-50 p-2 h-10 hover:bg-white outline-white scale-120' to='/'>Go to Earth</Link>
    </main>
  )
}
