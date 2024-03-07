import React from 'react'
import { Separator } from './ui/separator'

const Footer = () => {
    return (
        <div className='bg-white border-t border-black/10 bg-light'>
            <div className='container grid max-w-[1148px] px-[19px] py-[28px] mx-auto lg:grid-cols-[1fr_max-content] lg:gap-[111px] items-start md:py-[30px]'>
                <div className='grid lg:grid-cols-[32fr_42fr] lg:gap-[51px]'>
                    <div>
                        <a href='/checkout'>
                            <img className="mb-4 " src='/logo-light.png' style={{
                                width: "177px",

                            }} alt='logo' />
                        </a>
                        <p className='text-lg text-black/40 leading-[26px] max-w-[90%] mb-[25px]'>Unrivaled IPTV streaming with 9,000+ channels, live sports, movies & TV shows. Seamless viewing on multiple devices, affordable pricing.</p>
                    </div>
                    <div className='grid gap-7 mb-[39px] lg:grid-flow-col lg:justify-between mt-[17px]'>
                        <div className='grid gap-[15px]'>
                            <p className="font-bold text-lg text-black">Legal</p>
                            <div className="grid gap-4"><a href="/channels" className="transition-[color,_transform] origin-left text-black/80 text-lg font-normal focus-within:text-primary focus-within:scale-105 w-max hover:text-primary hover:scale-105">Channels list</a>
                            </div>
                            <div className="grid gap-4"><a href="/channels" className="transition-[color,_transform] origin-left text-black/80 text-lg font-normal focus-within:text-primary focus-within:scale-105 w-max hover:text-primary hover:scale-105">Apps</a>
                            </div>
                            <div className="grid gap-4"><a href="/channels" className="transition-[color,_transform] origin-left text-black/80 text-lg font-normal focus-within:text-primary focus-within:scale-105 w-max hover:text-primary hover:scale-105">Support</a>
                            </div>
                        </div>
                        <div className='grid gap-[15px]'>
                            <p className="font-bold text-lg text-black">Help</p>
                            <div className="grid gap-4"><a href="/channels" className="transition-[color,_transform] origin-left text-black/80 text-lg font-normal focus-within:text-primary focus-within:scale-105 w-max hover:text-primary hover:scale-105">Terms of Service</a>
                            </div>
                            <div className="grid gap-4"><a href="/channels" className="transition-[color,_transform] origin-left text-black/80 text-lg font-normal focus-within:text-primary focus-within:scale-105 w-max hover:text-primary hover:scale-105">Privacy Policy</a>
                            </div>
                            <div className="grid gap-4"><a href="/channels" className="transition-[color,_transform] origin-left text-black/80 text-lg font-normal focus-within:text-primary focus-within:scale-105 w-max hover:text-primary hover:scale-105">DMCA</a>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer