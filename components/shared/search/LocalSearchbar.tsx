"use client"
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'

interface CustomInputProps {
    route: string
    iconPosition: string
    imgSrc: string
    placeholder: string
    otherClasses: string
}

const LocalSearchbar = ({
    route,
    iconPosition,
    imgSrc,
    placeholder,
    otherClasses
}: CustomInputProps) => {
  return (
    <div className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}>
      {iconPosition === 'left' && (<Image 
       src={imgSrc}
       alt='search icon'
       width={24}
       height={24}
       className='cursor-pointer'
      />)}

      <Input className='paragraph-regular outline-none ring-0 ring-offset-0 focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-none shadow-none background-light800_darkgradient placeholder:text-light-400 dark:placeholder:text-light-600'
      type='text'
      placeholder={placeholder}
      value=""
      onChange={()=>{}}
      />

{iconPosition === 'right' && (<Image 
       src={imgSrc}
       alt='search icon'
       width={24}
       height={24}
       className='cursor-pointer'
      />)}

    </div>
  )
}

export default LocalSearchbar
