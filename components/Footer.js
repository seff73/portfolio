import { AiTwotoneHeart } from 'react-icons/ai';
import { HiOutlineHeart } from 'react-icons/hi'

export default function Footer() {
  return (
    <div className='w-full h-16 bg-gray-50 flex justify-center items-center'>
        <h1 className='text-base text-slate-500 mr-2'>Copyright © 2022 - Made with</h1>
        <HiOutlineHeart className='text-slate-500'/> 
        <h1 className='text-base text-slate-500 ml-2'>
          by{" "}
          <a 
            href='#' 
            className='cursor-pointer font-semibold text-slate-500 hover:text-black'>
            SeffTeam
          </a>
        </h1>
    </div>
  )
}
