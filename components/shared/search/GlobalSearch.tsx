import React from 'react'
import Image from 'next/image'
import { Input } from "@/components/ui/input"

const GlobalSearch = () => {
  return (
    <div className='relative w-full max-w-[600px] max-lg:hidden'>
        <div className='background-light800_darkgradient relative flex min-h-[40px] grow items-center gap-1 rounded-xl px-4 no-focus'>
            <Image 
             src = "/assets/icons/search.svg"
             alt="search"
             width={24}
             height={24}
             className='cursor-pointer'
            />
           <Input 
  type='text'
  placeholder='Search globally'
  value=""
  className='paragraph-regular outline-none ring-0 ring-offset-0 focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-none shadow-none background-light800_darkgradient placeholder:text-light-400 dark:placeholder:text-light-600'
/>
        </div>
      
    </div>
  )
}

export default GlobalSearch
