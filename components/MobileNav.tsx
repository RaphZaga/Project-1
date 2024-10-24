"use client";

import React from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/sheet";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { sidebarLinks } from '@/constants';
import Footer from './Footer';

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    // Wrapper div with mobile-only display
    <div className="block lg:hidden"> 
      <section className="w-full max-w-[50px]">
        <Sheet>
          <SheetTrigger>
            <Image
              src="/hamburger.svg"
              width={30}
              height={30}
              alt="menu"
              className="cursor-pointer"
            />
          </SheetTrigger>
          <SheetContent side="left" className="border-none bg-white">
            <Link href="/" className="cursor-pointer items-center gap-1 flex px-4">
              <Image
                src="/logo.svg"
                width={34}
                height={34}
                alt="Logo"
              />
              <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
                Horizon
              </h1>
            </Link>

            <div className="mobilenav-sheet">
              <SheetClose asChild>
                <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                  {sidebarLinks.map((item) => {
                    const isActive =
                      pathname === item.route || pathname.startsWith(`${item.route}/`);
                    return (
                      <SheetClose asChild key={item.route}>
                        <Link
                          href={item.route}
                          key={item.label}
                          className={cn("mobile-sheet_close w-full", {
                            "bg-bank-gradient": isActive,
                          })}
                        >
                          <Image
                            src={item.imgURL}
                            alt={item.label}
                            width={20}
                            height={20}
                            className={cn({
                              "brightness-[3] invert-0": isActive,
                            })}
                          />
                          <p className={cn("text-16 font-semibold text-black-2", {
                            "!text-white": isActive,
                          })}>
                            {item.label}
                          </p>
                        </Link>
                      </SheetClose>
                    );
                  })}
                  USER
                </nav>
              </SheetClose>
           <Footer user={user} type="mobile"/>
            </div>
          </SheetContent>
        </Sheet>
      </section>
    </div>
  );
};

export default MobileNav;
