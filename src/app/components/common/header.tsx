import { Button } from '@/app/components/ui/button'
import React from 'react'
import Link from 'next/link'
import { FileText } from 'lucide-react'
import Navlink  from './nav-link'

const Header = () => {
  const IsLoggedIn = false
  return (
    <div className=''>
      <nav
        className="fixed top-5 inset-x-0  before:backdrop-blur-md mx-auto max-w-4xl   flex justify-between items-center rounded-full border border-white/20 bg-transparent dark:bg-neutral-900/50
          backdrop-blur-md shadow-lg p-1"
      >
        <div className="flex justify-between items-center">
          {/* ---START OF THE HOME PAGE LINK */}
          <div>
            <Navlink href="/" className="flex items-center gap-2">
              <FileText
                className="h-6 w-6 transform-gpu hover:rotate-25 transition-transform duration-200 ease-in-out origin-center"
              />
              <span className="font-bold text-lg bg-text-blue">Summarizer</span>
            </Navlink>
          </div>
          {/* ---END OF THE HOME PAGE LINK */}

          <ul className="flex px-34 py-2 items-center gap-4">
            
             <div>
              <li className="font-bold">
                <Link href="/avacado">Home</Link>
              </li>
            </div>

            {/* This is for the about page */}
            <div>
              <li className="font-bold">
                <Link href="/about">About</Link>
              </li>
            </div>
            {/* The about section end here */}

            {/* This is for the contact page */}
            <div>
              <li className="font-bold">
                <Link href="/contact">Contact</Link>
              </li>
            </div>
            {/* The contact section end here */}

            <li className="font-bold">
              <Link href="/pricing">Pricing</Link>
            </li>
            {/* This is for the login Pricing page */}
            <div></div>

            {IsLoggedIn ? (
              <div>
                <li className="font-bold">
                  <Link href="/dashboard">Your Summa</Link>
                </li>
              </div>
            ) : (
              <div>
                <li>
                  <Link href="/Signup" className="px-45  font-bold">
                    <Button className="hover:bg-green-500" variant="outline">
                      Sign UP
                    </Button>
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header





