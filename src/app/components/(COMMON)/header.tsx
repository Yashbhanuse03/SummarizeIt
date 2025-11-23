import { Button } from '@/app/components/ui/button'
import React from 'react'
import Link from 'next/link'


const Header = () => {
  return (
    <nav className="fixed top-5 inset-x-0 mx-auto max-w-4xl 
    flex justify-between items-center 
    rounded-full border border-white/20 
    bg-white/30 dark:bg-neutral-900/50 
    backdrop-blur-md shadow-lg p-3">
    <div className="flex justify-between items-center">


     <Link className="text-2xl font-bold px-5 " href="/">SUMMARIZER</Link>
     <ul className="flex px-34 py-2 items-center gap-4">
        <li className='font-bold'><Link href="/">Home</Link></li>
        <li ><Link href="/about">About</Link></li>
        <li className='font-bold'><Link href="/contact">Contact</Link></li>
        <li className='font-bold'><Link href="/pricing">Pricing</Link></li>
        <li className='px-15 hover:bg-green-500 font-bold'><Button  variant="outline">Login</Button></li>
     </ul>
    </div>
    </nav>

  )
}

export default Header

