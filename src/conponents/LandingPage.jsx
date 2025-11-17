import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

function LandingPage() {
  return (
    <div className='w-full h-screen font-founder pt-2 text-[#212121] '>
      <div className='textstructure mt-40'>
        <div className='masker px-22'>
          <h1 className='text-9xl uppercase font-semibold tracking-tight leading-[6vw] '>we create</h1>
        </div>
         <div className='masker px-22 flex items-center gap-3'>
          <div className='bg-red-700 w-[8vw] h-[5.5vw] rounded-xl '></div>
          <h1 className='text-9xl uppercase font-semibold tracking-tight leading-[6vw] '>eye-opening</h1>
        </div>
         <div className='masker px-22'>
          <h1 className='text-9xl uppercase font-semibold tracking-tight leading-[6vw] '>presentations</h1>
        </div>
      </div>
      <div className='border-t border-zinc-700 mt-20'></div>
<div className='bottom w-full flex items-center justify-between'>
  <div className='w-[70%] flex items-center justify-between mt-5 px-10  '>
    {["Presentation and storytelling agency","For innovation teams and global brands"].map((item,index)=> <p className='font-light tracking-wide ' key={index}>{item}</p>)}
  </div>
  <div className='start mr-12 mt-5 flex items-center gap-2  justify-center'>
    <div className='button uppercase border rounded-full border-zinc-500 py-1 px-3 '>start the project</div>
    <div className='arrow border rounded-full p-1.5 text-xl border-zinc-500'>
    <MdOutlineArrowOutward />

    </div>
  </div>
</div>
    </div>
  )
}

export default LandingPage