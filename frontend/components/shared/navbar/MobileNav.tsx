"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Sidebar } from "lucide-react";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

const NavContent = () => {
  const pathname = usePathname();
  return (
    <section className="flex h-full flex-col gap-4 pt-6">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <SheetClose asChild key={item.route} className="flex">
            <Link
              href={item.route}
              className={`${
                isActive
                  ? "bg-red-500 rounded-lg [&&]:text-white"
                  : " text-dark-300 dark:text-light-900 !important"
              } flex items-center justify-start gap-4 bg-transparent p-3`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {item.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          width={36}
          height={36}
          alt="Menu"
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none top-0"
      >
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/images/site-logo.svg"
            width={23}
            height={23}
            alt="StackOverflow"
          />
          <p className="h2-bold text-dark100_light900">
            Stack <span className="text-[#FF7000]">Overflow</span>
          </p>
        </Link>
        <SheetHeader>
          <SheetTitle className="text-left pl-6 font-light text-[15px]">
            Navigation Menu
          </SheetTitle>
          {/* <SheetDescription className="sr-only">
                        Mobile navigation menu
                    </SheetDescription> */}
        </SheetHeader>

        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
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
                  <span className="text-primary-500">Log In</span>
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
                  Sign Up
                 
                </Button>
              </Link>
            
          </div>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
