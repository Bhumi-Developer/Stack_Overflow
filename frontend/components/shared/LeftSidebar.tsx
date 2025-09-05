'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import {
    SignInButton,
    SignUpButton,
    SignedOut
  } from '@clerk/nextjs'
  import { Button } from "@/components/ui/button";

const LeftSidebar = () => {
    const pathname = usePathname();
  return (
    <section
    className='background-light900_dark200 light-border custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-4  pt-24 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]'>
         <div className="flex flex-1 flex-col gap-4">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
         
            <Link key={item.route}
              href={item.route}
              className={`${
                isActive
                  ? "bg-primary-500 rounded-lg [&&]:text-white"
                  : "text-dark300_light900"
              } flex items-center text-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p className={`${isActive ? "base-bold" : "base-medium"} max-lg:hidden`}>
                {item.label}
              </p>
            </Link>
          
        );
      })}
    </div>
    <SignedOut>
            <div className="flex flex-col gap-3">
              
                <Link href="/sign-in">
                  <Button className="small-medium min-h-[41px] w-full rounded-lg px-4 py-3 mt-4 shadow-none  bg-light-800 dark:bg-dark-300">
                    <Image
                    src="/assets/icons/account.svg"
                    alt="login"
                    width={20}
                    height={20}
                    className='invert-colors lg:hidden'
                    />
                    <span className="text-primary-500 max-lg:hidden">Log In</span>
                  </Button>
                </Link>
              
              
                <Link href="/sign-up">
                  <Button className="small-medium light-border-2 text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none bg-light-800 dark:bg-dark-400 text-center">
                  <Image
                    src="/assets/icons/sign-up.svg"
                    alt="sign-up"
                    width={20}
                    height={20}
                    className='invert-colors lg:hidden'
                    />
                    <span className='max-lg:hidden'> Sign Up</span>
                   
                  </Button>
                </Link>
              
            </div>
          </SignedOut>
    </section>
  )
}

export default LeftSidebar
