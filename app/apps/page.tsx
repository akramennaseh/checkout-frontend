"use client"
import React, { useState } from 'react'
import { Tab } from '@headlessui/react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from "@/components/ui/label"


import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Button } from '@/components/ui/button'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

const Page = () => {
    const [selectedTab, setSelectedTab] = useState<string>('TV Screens');

    const handleSelectChange = (value: string) => {
        setSelectedTab(value);
    };
    return (
        
        <div className='flex-1'>
            <Navigation />
            <div className='container max-w-[1140px] pt-[45px] pb-[92px] px-[15px] md:px-4 md:pt-[55px]'>
                <div className='grid gap-2.5 md:gap-5 text-center max-w-[750px] mx-auto mb-[50px] md:mb-[70px]'>
                    <p className="font-black text-[30px] leading-[34px] text-[#1e1e1e]">IPTV Apps</p>
                    <p className=" font-medium text-[20px] text-black/70">
                        Whether you prefer to stream on your TV, laptop, tablet, or smartphone, our service is compatible with a variety of applications.
                    </p>
                </div>
                <div className='md:bg-white md:rounded-base md:border border-black/10 md:shadow-base'>
                    <Tab.Group>
                        <Tab.List className="hidden md:flex w-full justify-between pt-6 px-14 pb-4">
                            <Tab className="grid gap-[21px] items-end justify-items-center transition-[filter] ui-not-selected:brightness-0 ui-not-selected:invert-[.5]">
                                <img src="/tv.svg" width="70" height="47" />
                                <p className="font-medium text-xl text-primary">TV Screens</p>
                            </Tab>
                            <Tab className="grid gap-[21px] items-end justify-items-center transition-[filter] ui-not-selected:brightness-0 ui-not-selected:invert-[.5]">
                                <img src="/mobile.svg" width="48" height="51" />
                                <p className="font-medium text-xl text-primary">Mobile &amp; Tablet</p>
                            </Tab>
                            <Tab className="grid gap-[21px] items-end justify-items-center transition-[filter] ui-not-selected:brightness-0 ui-not-selected:invert-[.5]">
                                <img src="/web.svg" width="81" height="48" />
                                <p className="font-medium text-xl text-primary">Web</p>
                            </Tab>
                            <Tab className="grid gap-[21px] items-end justify-items-center transition-[filter] ui-not-selected:brightness-0 ui-not-selected:invert-[.5]">
                                <img src="/box.svg" width="81" height="48" />
                                <p className="font-medium text-xl text-primary">Box &amp; Stick</p>
                            </Tab>
                        </Tab.List>
                        <Tab.Panels className="hidden md:flex bg-white border border-black/10 shadow-base rounded-base pt-[20px] px-[21px] pb-[44px] md:bg-transparent md:border-0 md:shadow-none md:rounded-none md:border-t md:pt-[22px] md:px-[19px] md:pb-[61px]">
                            <Tab.Panel>
                                <div id="headlessui-tabs-panel-143" role="tabpanel" aria-labelledby="headlessui-tabs-tab-139" data-headlessui-state="selected" className="">
                                    <p className="font-bold text-xl text-dark">
                                        Get IPTV on your Smart TV
                                    </p>
                                    <p className="text-lg leading-[30px] mb-[22px] text-dark/70 md:mb-[41px]">
                                        Install the app, Grab your remote &amp; Enjoy!
                                    </p>
                                    <div className="grid gap-[42px] md:gap-[32px]">
                                        <div className="grid gap-[26px] md:justify-start md:grid-flow-col md:gap-[32px] items-center">
                                            <img src="/android-tv.svg" width="179" height="32" alt="Platform Icon" />
                                            <div className="grid gap-[19px] md:justify-start md:grid-flow-col md:gap-[17px]">
                                                <a href="https://siptv.eu/howto/sammy/files/siptv_tizen.zip" target="_blank" className="bg-primary shadow-btn rounded-full py-[15px] px-[29px] w-max text-white font-medium text-lg flex gap-[26px]">
                                                    SMART IPTV
                                                    <img src="/download.svg" width="18" height="18" alt="Download now" />
                                                </a>
                                                <a href="https://manage-setiptv.com/index.php/how-to-install/" target="_blank" className="bg-primary shadow-btn rounded-full py-[15px] px-[29px] w-max text-white font-medium text-lg flex gap-[26px]">
                                                    SET IPTV
                                                    <img src="/download.svg" width="18" height="18" alt="Download now" />
                                                </a>
                                                <a href="https://netiptv.eu/Download" target="_blank" className="bg-primary shadow-btn rounded-full py-[15px] px-[29px] w-max text-white font-medium text-lg flex gap-[26px]">
                                                    NET IPTV
                                                    <img src="/download.svg" width="18" height="18" alt="Download now" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="grid gap-[26px] md:justify-start md:grid-flow-col md:gap-[32px] items-center">
                                            <img src="/lg.svg" width="73" height="32" alt="Platform Icon" />
                                            <div className="grid gap-[19px] md:justify-start md:grid-flow-col md:gap-[17px]">
                                                <a href="https://siptv.app/howto/lg/" target="_blank" className="bg-primary shadow-btn rounded-full py-[15px] px-[29px] w-max text-white font-medium text-lg flex gap-[26px]">
                                                    SMART IPTV
                                                    <img src="/download.svg" width="18" height="18" alt="Download now" />
                                                </a>
                                                <a href="https://gb.lgappstv.com/main/tvapp/detail?appId=995666&amp;catCode1=&amp;moreYn=N&amp;cateYn=N&amp;orderType=0&amp;headerName=&amp;appRankCode=&amp;sellrUsrNo=" target="_blank" className="bg-primary shadow-btn rounded-full py-[15px] px-[29px] w-max text-white font-medium text-lg flex gap-[26px]">
                                                    DuplexPlay
                                                    <img src="/download.svg" width="18" height="18" alt="Download now" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="grid gap-[26px] md:justify-start md:grid-flow-col md:gap-[32px] items-center">
                                            <img src="/samsung-tv.svg" width="158" height="55" alt="Platform Icon" />
                                            <div className="grid gap-[19px] md:justify-start md:grid-flow-col md:gap-[17px]">
                                                <a href="https://siptv.eu/howto/sammy/files/siptv_tizen.zip" target="_blank" className="bg-primary shadow-btn rounded-full py-[15px] px-[29px] w-max text-white font-medium text-lg flex gap-[26px]">
                                                    SMART IPTV
                                                    <img src="/download.svg" width="18" height="18" alt="Download now" />
                                                </a>
                                                <a href="https://manage-setiptv.com/index.php/how-to-install/" target="_blank" className="bg-primary shadow-btn rounded-full py-[15px] px-[29px] w-max text-white font-medium text-lg flex gap-[26px]">
                                                    SET IPTV
                                                    <img src="/download.svg" width="18" height="18" alt="Download now" />
                                                </a>
                                                <a href="https://netiptv.eu/Download" target="_blank" className="bg-primary shadow-btn rounded-full py-[15px] px-[29px] w-max text-white font-medium text-lg flex gap-[26px]">
                                                    NET IPTV
                                                    <img src="/download.svg" width="18" height="18" alt="Download now" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div id="headlessui-tabs-panel-8" role="tabpanel" aria-labelledby="headlessui-tabs-tab-230142" data-headlessui-state="selected" className="" >
                                    <p className="font-bold text-xl text-dark">
                                        Get IPTV on your Mobile or Tablet
                                    </p>
                                    <p className="text-lg leading-[30px] mb-[22px] text-dark/70 md:mb-[41px]">
                                        A collection of the best iptv apps you can use
                                    </p>
                                    <div className="grid gap-[42px] md:gap-[32px]"  >
                                        <div className="grid gap-[26px] md:justify-start md:grid-flow-col md:gap-[32px] items-center"  >
                                            <img src="/apple.svg" width="29" height="35" alt="Platform Icon" data-nuxt-img="" />
                                            <div className="grid gap-[19px] md:justify-start md:grid-flow-col md:gap-[17px]"  >
                                                <a href="https://apps.apple.com/fr/app/gse-smart-iptv-player-live-tv/id6444845680" target="_blank" className="bg-primary shadow-btn rounded-full py-[15px] px-[29px] w-max text-white font-medium text-lg flex gap-[26px]">
                                                    GSE IPTV
                                                    <img src=" /download.svg" width="18" height="18" alt="Download now" data-nuxt-img="" />
                                                </a>
                                                <a href="https://apps.apple.com/fr/app/smarters-player-lite/id1628995509" target="_blank" className="bg-primary shadow-btn rounded-full py-[15px] px-[29px] w-max text-white font-medium text-lg flex gap-[26px]">
                                                    Smarters Player Lite
                                                    <img src=" /download.svg" width="18" height="18" alt="Download now" data-nuxt-img="" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="grid gap-[26px] md:justify-start md:grid-flow-col md:gap-[32px] items-center"  >
                                            <img src="/android.svg" width="157" height="32" alt="Platform Icon" data-nuxt-img="" />
                                            <div className="grid gap-[19px] md:justify-start md:grid-flow-col md:gap-[17px]"  >
                                                <a href="https://play.google.com/store/apps/details?id=com.gsetech.smartiptv2" target="_blank" className="bg-primary shadow-btn rounded-full py-[15px] px-[29px] w-max text-white font-medium text-lg flex gap-[26px]">
                                                    GSE IPTV
                                                    <img src=" /download.svg" width="18" height="18" alt="Download now" data-nuxt-img="" />
                                                </a>
                                                <a href="https://play.google.com/store/apps/details?id=ar.tvplayer.tv" target="_blank" className="bg-primary shadow-btn rounded-full py-[15px] px-[29px] w-max text-white font-medium text-lg flex gap-[26px]">
                                                    Tivimate
                                                    <img src=" /download.svg" width="18" height="18" alt="Download now" data-nuxt-img="" />
                                                </a>
                                                <a href="https://play.google.com/store/apps/details?id=com.purple.iptv.smart.player" target="_blank" className="bg-primary shadow-btn rounded-full py-[15px] px-[29px] w-max text-white font-medium text-lg flex gap-[26px]">
                                                    Purple IPTV
                                                    <img src=" /download.svg" width="18" height="18" alt="Download now" data-nuxt-img="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className=''>
                                    <span >
                                        <span aria-hidden="true" id="headlessui-tabs-panel-40" role="tabpanel" aria-labelledby="headlessui-tabs-tab-36" className=""  >
                                        </span>
                                        <span aria-hidden="true" id="headlessui-tabs-panel-41" role="tabpanel" aria-labelledby="headlessui-tabs-tab-37" className=""  >
                                        </span>
                                        <div id="headlessui-tabs-panel-42" role="tabpanel" aria-labelledby="headlessui-tabs-tab-38" data-headlessui-state="selected" className="" >
                                            <p className="font-bold text-xl text-dark">
                                                Get IPTV on your Mobile or Tablet
                                            </p>
                                            <p className="text-lg leading-[30px] mb-[22px] text-dark/70 md:mb-[41px]">
                                                A collection of the best iptv apps you can use
                                            </p>
                                            <div className="grid gap-[42px] md:gap-[32px]"  >
                                                <div className="grid gap-[26px] md:justify-start md:grid-flow-col md:gap-[32px] items-center"  >
                                                    <img src="/apple.svg" width="29" height="35" alt="Platform Icon" data-nuxt-img="" />
                                                    <div className="grid gap-[19px] md:justify-start md:grid-flow-col md:gap-[17px]"  >
                                                        <a href="http://webtv.iptvsmarters.com/" target="_blank" className="bg-primary shadow-btn rounded-full py-[15px] px-[29px] w-max text-white font-medium text-lg flex gap-[26px]">
                                                            Open in Browser
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <span aria-hidden="true" id="headlessui-tabs-panel-43" role="tabpanel" aria-labelledby="headlessui-tabs-tab-39" className="">
                                        </span>
                                    </span>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className="bg-white border border-black/10 shadow-base rounded-base pt-[20px] px-[21px] pb-[44px] md:bg-transparent md:border-0 md:shadow-none md:rounded-none md:border-t md:pt-[22px] md:px-[19px] md:pb-[61px]" >
                                    <span >
                                        <span aria-hidden="true" id="headlessui-tabs-panel-40" role="tabpanel" aria-labelledby="headlessui-tabs-tab-36" className="" >
                                        </span>
                                        <span aria-hidden="true" id="headlessui-tabs-panel-41" role="tabpanel" aria-labelledby="headlessui-tabs-tab-37" className="" >
                                        </span>
                                        <span aria-hidden="true" id="headlessui-tabs-panel-42" role="tabpanel" aria-labelledby="headlessui-tabs-tab-38" className="" >
                                        </span>
                                        <div id="headlessui-tabs-panel-43" role="tabpanel" aria-labelledby="headlessui-tabs-tab-39" data-headlessui-state="selected" className=""  >
                                            <p className="font-bold text-xl text-dark">
                                                Get IPTV on your TV box or stick.
                                            </p>
                                            <p className="text-lg leading-[30px] mb-[22px] text-dark/70 md:mb-[41px]">
                                                Plug &amp; Play on your TV
                                            </p>
                                            <div className="grid gap-[42px] md:gap-[32px]" >
                                                <div className="grid gap-[26px] md:justify-start md:grid-flow-col md:gap-[32px] items-center" >
                                                    <img src="/android.svg" width="157" height="32" alt="Platform Icon" data-nuxt-img="" />
                                                    <div className="grid gap-[19px] md:justify-start md:grid-flow-col md:gap-[17px]" >
                                                        <a href="https://play.google.com/store/apps/details?id=com.purple.iptv.smart.player" target="_blank" className="bg-primary shadow-btn rounded-full py-[15px] px-[29px] w-max text-white font-medium text-lg flex gap-[26px]">
                                                            Purple IPTV
                                                            <img src="/download.svg" width="18" height="18" alt="Download now" data-nuxt-img="" />
                                                        </a>
                                                        <a href="https://play.google.com/store/apps/details?id=com.gsesmartiptv.smartiptv" target="_blank" className="bg-primary shadow-btn rounded-full py-[15px] px-[29px] w-max text-white font-medium text-lg flex gap-[26px]">
                                                            IPTV Smarters
                                                            <img src="/download.svg" width="18" height="18" alt="Download now" data-nuxt-img="" />
                                                        </a>

                                                        <a href="https://play.google.com/store/apps/details?id=ar.tvplayer.tv" target="_blank" className="bg-primary shadow-btn rounded-full py-[15px] px-[29px] w-max text-white font-medium text-lg flex gap-[26px]">
                                                            Tivimate
                                                            <img src="/download.svg" width="18" height="18" alt="Download now" data-nuxt-img="" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </span></div>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>

                </div>
                <div className=' md:hidden'>
                    <div className='pb-3'>
                        <Select value={selectedTab} onValueChange={handleSelectChange} >
                            <SelectTrigger>
                                <SelectValue placeholder="TV Screens" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="TV Screens">TV Screens</SelectItem>
                                    <SelectItem value="Mobile & Tablet">Mobile & Tablet</SelectItem>
                                    <SelectItem value="Web">Web</SelectItem>
                                    <SelectItem value="Box & Stick">Box & Stick</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    {selectedTab === 'TV Screens' && <div className='bg-white border border-black/10 shadow-base rounded-base pt-[20px] px-[21px] pb-[44px] md:bg-transparent md:border-0 md:shadow-none md:rounded-none md:border-t md:pt-[22px] md:px-[19px] md:pb-[61px]'>
                        <div id="headlessui-tabs-panel-143" role="tabpanel" aria-labelledby="headlessui-tabs-tab-139" data-headlessui-state="selected" className="">
                            <p className="font-bold text-xl text-dark">
                                Get IPTV on your Smart TV
                            </p>
                            <p className="text-lg leading-[30px] mb-[22px] text-dark/70 md:mb-[41px]">
                                Install the app, Grab your remote &amp; Enjoy!
                            </p>
                            <div className="grid gap-[42px] md:gap-[32px]">
                                <div className="grid gap-[26px] md:justify-start md:grid-flow-col md:gap-[32px] items-center">
                                    <img src="/android-tv.svg" width="179" height="32" alt="Platform Icon" />
                                    <div className="grid gap-[19px] md:justify-start md:grid-flow-col md:gap-[17px]">
                                        <a href="https://siptv.eu/howto/sammy/files/siptv_tizen.zip" target="_blank" className="bg-primary shadow-btn rounded-full py-[15px] px-[29px] w-max text-white font-medium text-lg flex gap-[26px]">
                                            SMART IPTV
                                            <img src="/download.svg" width="18" height="18" alt="Download now" />
                                        </a>
                                        <a href="https://manage-setiptv.com/index.php/how-to-install/" target="_blank" className="bg-primary shadow-btn rounded-full py-[15px] px-[29px] w-max text-white font-medium text-lg flex gap-[26px]">
                                            SET IPTV
                                            <img src="/download.svg" width="18" height="18" alt="Download now" />
                                        </a>
                                        <a href="https://netiptv.eu/Download" target="_blank" className="bg-primary shadow-btn rounded-full py-[15px] px-[29px] w-max text-white font-medium text-lg flex gap-[26px]">
                                            NET IPTV
                                            <img src="/download.svg" width="18" height="18" alt="Download now" />
                                        </a>
                                    </div>
                                </div>
                                <div className="grid gap-[26px] md:justify-start md:grid-flow-col md:gap-[32px] items-center">
                                    <img src="/lg.svg" width="73" height="32" alt="Platform Icon" />
                                    <div className="grid gap-[19px] md:justify-start md:grid-flow-col md:gap-[17px]">
                                        <a href="https://siptv.app/howto/lg/" target="_blank" className="bg-primary shadow-btn rounded-full py-[15px] px-[29px] w-max text-white font-medium text-lg flex gap-[26px]">
                                            SMART IPTV
                                            <img src="/download.svg" width="18" height="18" alt="Download now" />
                                        </a>
                                        <a href="https://gb.lgappstv.com/main/tvapp/detail?appId=995666&amp;catCode1=&amp;moreYn=N&amp;cateYn=N&amp;orderType=0&amp;headerName=&amp;appRankCode=&amp;sellrUsrNo=" target="_blank" className="bg-primary shadow-btn rounded-full py-[15px] px-[29px] w-max text-white font-medium text-lg flex gap-[26px]">
                                            DuplexPlay
                                            <img src="/download.svg" width="18" height="18" alt="Download now" />
                                        </a>
                                    </div>
                                </div>
                                <div className="grid gap-[26px] md:justify-start md:grid-flow-col md:gap-[32px] items-center">
                                    <img src="/samsung-tv.svg" width="158" height="55" alt="Platform Icon" />
                                    <div className="grid gap-[19px] md:justify-start md:grid-flow-col md:gap-[17px]">
                                        <a href="https://siptv.eu/howto/sammy/files/siptv_tizen.zip" target="_blank" className="bg-primary shadow-btn rounded-full py-[15px] px-[29px] w-max text-white font-medium text-lg flex gap-[26px]">
                                            SMART IPTV
                                            <img src="/download.svg" width="18" height="18" alt="Download now" />
                                        </a>
                                        <a href="https://manage-setiptv.com/index.php/how-to-install/" target="_blank" className="bg-primary shadow-btn rounded-full py-[15px] px-[29px] w-max text-white font-medium text-lg flex gap-[26px]">
                                            SET IPTV
                                            <img src="/download.svg" width="18" height="18" alt="Download now" />
                                        </a>
                                        <a href="https://netiptv.eu/Download" target="_blank" className="bg-primary shadow-btn rounded-full py-[15px] px-[29px] w-max text-white font-medium text-lg flex gap-[26px]">
                                            NET IPTV
                                            <img src="/download.svg" width="18" height="18" alt="Download now" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
                    {selectedTab === 'Mobile & Tablet' && <div className='bg-white border border-black/10 shadow-base rounded-base pt-[20px] px-[21px] pb-[44px] md:bg-transparent md:border-0 md:shadow-none md:rounded-none md:border-t md:pt-[22px] md:px-[19px] md:pb-[61px]'>
                        <div id="headlessui-tabs-panel-8" role="tabpanel" aria-labelledby="headlessui-tabs-tab-230142" data-headlessui-state="selected" className="" >
                            <p className="font-bold text-xl text-dark">
                                Get IPTV on your Mobile or Tablet
                            </p>
                            <p className="text-lg leading-[30px] mb-[22px] text-dark/70 md:mb-[41px]">
                                A collection of the best iptv apps you can use
                            </p>
                            <div className="grid gap-[42px] md:gap-[32px]"  >
                                <div className="grid gap-[26px] md:justify-start md:grid-flow-col md:gap-[32px] items-center"  >
                                    <img src="/apple.svg" width="29" height="35" alt="Platform Icon" data-nuxt-img="" />
                                    <div className="grid gap-[19px] md:justify-start md:grid-flow-col md:gap-[17px]"  >
                                        <a href="https://apps.apple.com/fr/app/gse-smart-iptv-player-live-tv/id6444845680" target="_blank" className="bg-primary shadow-btn rounded-full py-[15px] px-[29px] w-max text-white font-medium text-lg flex gap-[26px]">
                                            GSE IPTV
                                            <img src=" /download.svg" width="18" height="18" alt="Download now" data-nuxt-img="" />
                                        </a>
                                        <a href="https://apps.apple.com/fr/app/smarters-player-lite/id1628995509" target="_blank" className="bg-primary shadow-btn rounded-full py-[15px] px-[29px] w-max text-white font-medium text-lg flex gap-[26px]">
                                            Smarters Player Lite
                                            <img src=" /download.svg" width="18" height="18" alt="Download now" data-nuxt-img="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="grid gap-[26px] md:justify-start md:grid-flow-col md:gap-[32px] items-center"  >
                                    <img src="/android.svg" width="157" height="32" alt="Platform Icon" data-nuxt-img="" />
                                    <div className="grid gap-[19px] md:justify-start md:grid-flow-col md:gap-[17px]"  >
                                        <a href="https://play.google.com/store/apps/details?id=com.gsetech.smartiptv2" target="_blank" className="bg-primary shadow-btn rounded-full py-[15px] px-[29px] w-max text-white font-medium text-lg flex gap-[26px]">
                                            GSE IPTV
                                            <img src=" /download.svg" width="18" height="18" alt="Download now" data-nuxt-img="" />
                                        </a>
                                        <a href="https://play.google.com/store/apps/details?id=ar.tvplayer.tv" target="_blank" className="bg-primary shadow-btn rounded-full py-[15px] px-[29px] w-max text-white font-medium text-lg flex gap-[26px]">
                                            Tivimate
                                            <img src=" /download.svg" width="18" height="18" alt="Download now" data-nuxt-img="" />
                                        </a>
                                        <a href="https://play.google.com/store/apps/details?id=com.purple.iptv.smart.player" target="_blank" className="bg-primary shadow-btn rounded-full py-[15px] px-[29px] w-max text-white font-medium text-lg flex gap-[26px]">
                                            Purple IPTV
                                            <img src=" /download.svg" width="18" height="18" alt="Download now" data-nuxt-img="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
                    {selectedTab === 'Web' && <div className='bg-white border border-black/10 shadow-base rounded-base pt-[20px] px-[21px] pb-[44px] md:bg-transparent md:border-0 md:shadow-none md:rounded-none md:border-t md:pt-[22px] md:px-[19px] md:pb-[61px]'>
                        <div className=''>
                            <span >
                                <span aria-hidden="true" id="headlessui-tabs-panel-40" role="tabpanel" aria-labelledby="headlessui-tabs-tab-36" className=""  >
                                </span>
                                <span aria-hidden="true" id="headlessui-tabs-panel-41" role="tabpanel" aria-labelledby="headlessui-tabs-tab-37" className=""  >
                                </span>
                                <div id="headlessui-tabs-panel-42" role="tabpanel" aria-labelledby="headlessui-tabs-tab-38" data-headlessui-state="selected" className="" >
                                    <p className="font-bold text-xl text-dark">
                                        Get IPTV on your Mobile or Tablet
                                    </p>
                                    <p className="text-lg leading-[30px] mb-[22px] text-dark/70 md:mb-[41px]">
                                        A collection of the best iptv apps you can use
                                    </p>
                                    <div className="grid gap-[42px] md:gap-[32px]"  >
                                        <div className="grid gap-[26px] md:justify-start md:grid-flow-col md:gap-[32px] items-center"  >
                                            <img src="/apple.svg" width="29" height="35" alt="Platform Icon" data-nuxt-img="" />
                                            <div className="grid gap-[19px] md:justify-start md:grid-flow-col md:gap-[17px]"  >
                                                <a href="http://webtv.iptvsmarters.com/" target="_blank" className="bg-primary shadow-btn rounded-full py-[15px] px-[29px] w-max text-white font-medium text-lg flex gap-[26px]">
                                                    Open in Browser
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span aria-hidden="true" id="headlessui-tabs-panel-43" role="tabpanel" aria-labelledby="headlessui-tabs-tab-39" className="">
                                </span>
                            </span>
                        </div>
                    </div>}
                    {selectedTab === 'Box & Stick' && <div className='bg-white border border-black/10 shadow-base rounded-base pt-[20px] px-[21px] pb-[44px] md:bg-transparent md:border-0 md:shadow-none md:rounded-none md:border-t md:pt-[22px] md:px-[19px] md:pb-[61px]'>
                        <div className="" >
                            <span >
                                <span aria-hidden="true" id="headlessui-tabs-panel-40" role="tabpanel" aria-labelledby="headlessui-tabs-tab-36" className="" >
                                </span>
                                <span aria-hidden="true" id="headlessui-tabs-panel-41" role="tabpanel" aria-labelledby="headlessui-tabs-tab-37" className="" >
                                </span>
                                <span aria-hidden="true" id="headlessui-tabs-panel-42" role="tabpanel" aria-labelledby="headlessui-tabs-tab-38" className="" >
                                </span>
                                <div id="headlessui-tabs-panel-43" role="tabpanel" aria-labelledby="headlessui-tabs-tab-39" data-headlessui-state="selected" className=""  >
                                    <p className="font-bold text-xl text-dark">
                                        Get IPTV on your TV box or stick.
                                    </p>
                                    <p className="text-lg leading-[30px] mb-[22px] text-dark/70 md:mb-[41px]">
                                        Plug &amp; Play on your TV
                                    </p>
                                    <div className="grid gap-[42px] md:gap-[32px]" >
                                        <div className="grid gap-[26px] md:justify-start md:grid-flow-col md:gap-[32px] items-center" >
                                            <img src="/android.svg" width="157" height="32" alt="Platform Icon" data-nuxt-img="" />
                                            <div className="grid gap-[19px] md:justify-start md:grid-flow-col md:gap-[17px]" >
                                                <a href="https://play.google.com/store/apps/details?id=com.purple.iptv.smart.player" target="_blank" className="bg-primary shadow-btn rounded-full py-[15px] px-[29px] w-max text-white font-medium text-lg flex gap-[26px]">
                                                    Purple IPTV
                                                    <img src="/download.svg" width="18" height="18" alt="Download now" data-nuxt-img="" />
                                                </a>
                                                <a href="https://play.google.com/store/apps/details?id=com.gsesmartiptv.smartiptv" target="_blank" className="bg-primary shadow-btn rounded-full py-[15px] px-[29px] w-max text-white font-medium text-lg flex gap-[26px]">
                                                    IPTV Smarters
                                                    <img src="/download.svg" width="18" height="18" alt="Download now" data-nuxt-img="" />
                                                </a>

                                                <a href="https://play.google.com/store/apps/details?id=ar.tvplayer.tv" target="_blank" className="bg-primary shadow-btn rounded-full py-[15px] px-[29px] w-max text-white font-medium text-lg flex gap-[26px]">
                                                    Tivimate
                                                    <img src="/download.svg" width="18" height="18" alt="Download now" data-nuxt-img="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>}
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default Page