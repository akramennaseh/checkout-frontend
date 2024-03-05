"use client"
import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/Toggle";
import { useTheme } from "next-themes";


const Navigat = ({ toggle }: { toggle: () => void }) => {
  const { theme } = useTheme();

  const menus = [
    { title: "Features", path: "/#features" },
    { title: "Channel List", path: "/channels-list" },
    { title: "Pricing", path: "/#pricing" },
    { title: "Reseller", path: "/Reseller/#ResellerPricing" },
    { title: "FAQs", path: "/#faq" },
    { title: "Installation Guide", path: "/guides" },
    { title: "Contact us", path: "/#contact" },
  ]

  return (
    <>
      <div className="w-full h-auto ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-50 flex justify-between py-8" >

          <div className="relative z-10 flex flex-wrap items-center justify-between w-full">
          <Link href="/checkout" className="flex-none ">
  <img 
    alt="Logo" 
    width="180" 
    height="200" 
    decoding="async" 
    data-nimg="1" 
    src={theme === 'dark' ? "/logo-dark.png" : "/logo-light.png"} 
  />
</Link>
            <div className="hidden flex-grow flex lg:flex lg:gap-10 justify-center items-center">
              <ul className="flex gap-6">
                {menus.map((item, idx) => (
                  <li key={idx} className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm text-foreground/60">
                    <Link href={item.path}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-none">
              <ModeToggle />
              <button
                type="button"
                className="ml-4 md:hidden relative z-10 -m-2 inline-flex items-center rounded-lg stroke-primary p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                onClick={toggle}
              >
                <Menu />
              </button>
            </div>
          </div>

        </div>
      </div>

    </>
  );
};

export default Navigat;