"use client"
import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/Toggle";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";


const Navigat = ({ toggle }: { toggle: () => void }) => {
  const { theme } = useTheme();

  const menus = [
    { title: "Channels List", path: "/channels" },
    { title: "Apps", path: "/apps" },
    { title: "Login", path: "/login" },
  ]

  return (
    <>
      <div className="w-full h-auto bg-white ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-50 flex justify-between py-5" >

          <div className="relative z-10 flex flex-wrap items-center justify-between w-full">
          <Link href="/checkout" className="flex items-center ">
              <img
                alt="Logo"
                width="175"
                height="37"
                decoding="async"
                data-nimg="1"
                src={theme === 'dark' ? "/studylucky.png" : "/studylucky.png"}
              />
              
            </Link>
            {/*<div className="hidden flex-grow flex lg:flex lg:gap-10 justify-end items-center">
              <ul className="flex gap-6">
                {menus.map((item, idx) => (
                  <li key={idx} className="text-black flex items-center text-lg font-medium transition-colors hover:text-primary sm:text-[16px] ">
                    <Link href={item.path}>{item.title}</Link>

                    
                    
                  </li>
                ))}
              </ul>
              <Button variant="default" style={{borderRadius: '25px',}} className="text-lg py-[25px] px-[32px]">
            <Link href="/checkout" >Get your 70% OFF</Link>
          </Button>
              </div>*/}
            {/*<div className="flex-none">
              
              <button
                type="button"
                className="text-black ml-4 lg:hidden relative z-10 -m-2 inline-flex items-center rounded-lg  p-2 hover:bg-gray-200/50 hover:stroke-black active:stroke-gray-900 "
                onClick={toggle}
              >
                <Menu />
                
              </button>
            </div>*/}
          </div>

        </div>
      </div>

    </>
  );
};

export default Navigat;