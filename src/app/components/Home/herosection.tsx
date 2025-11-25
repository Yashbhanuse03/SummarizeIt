import React from 'react'
import {Button} from '@/app/components/ui/button'
import { Sparkles } from 'lucide-react'

const herosection = () => {
  return (
    <div className='flex flex-col gap-5 items-center justify-center h-screen'>
        <div className='flex gap-2 items-center rounded-full bg-[#9bc9ff] shadow-xl border  p-3 animation-pulse pr-5   '>
            <Sparkles className='text-pink-500'/>
             <p>Powered by AI</p>
        </div>
       
        <h1 className='text-3xl font-bold'>
            Transform PDFs into concise summaries
        </h1>
        <h3 className='text-lg'> Get a beatifull summary of your PDFs in seconds</h3>
        

        <Button className='mt-4 rounded-lg  shodow-lg'> Try Summary</Button>

    </div>
    
  )
}

export default herosection