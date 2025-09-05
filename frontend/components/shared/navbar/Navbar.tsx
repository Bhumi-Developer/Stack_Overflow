import Link from "next/link"
import Image from 'next/image'
import React from 'react'
import { SignedIn } from "@clerk/nextjs"
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Theme from "./Theme"
import MobileNav from "./MobileNav"
import GlobalSearch from "../search/GlobalSearch"

const Navbar = () => {
  return (
    <nav className='flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12 flex justify-between'>
        <Link href="/" className="flex items-center gap-1">
        <Image 
        src="/assets/images/site-logo.svg"
        width={23}
        height = {23}
        alt="StackOverflow"
        />
        <p className="h2-bold text-dark-100 dark:text-light-900 max-sm:hidden">Stack <span className="text-primary-500">Overflow</span></p>
        </Link>

          <GlobalSearch />
        <div className="flex gap-5">
          <Theme />
            
                
            
        {/* <SignedOut>
        <SignInButton mode="modal">
          <button className="px-3 py-1 rounded bg-white text-blue-600 hover:bg-gray-400 border-blue-600 ">Log in</button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-800 ">Sign Up</button>
        </SignUpButton>
      </SignedOut> */}

      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      
            <MobileNav />
        </div>
    </nav>
  )
}

export default Navbar
