"use strict";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from 'react';

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup function to remove the class if the component unmounts while the sidebar is open
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]); // Run this effect whenever isOpen changes

  const menus = [
    { title: "Channels List", path: "/#" },
    { title: "Apps", path: "/#" },
    { title: "Login", path: "/#" },
  ]

  return (
    <>
    {isOpen && <div className="fixed inset-0 z-10 bg-white/50 blur-effect"></div>}
    <div
        className={`absolute inset-x-0 top-0 z-20 origin-top rounded-b-2xl bg-gray-300 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20 transform transition-transform duration-200 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <button className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-white p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none" onClick={toggle}>
          {/* Close icon */}
          {/*<X />*/}
        </button>
        
        <ul className="space-y-4">
          {menus.map((item, idx) => (
            <li key={idx} className="block text-base leading-7 tracking-tight text-black">
              <Link onClick={toggle} href={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-4">
          <Button asChild className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors relative overflow-hidden bg-violet-600 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-violet-600 active:text-white/80 before:transition-colors">
            <Link href="/#pricing" onClick={toggle}>Get Started</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;