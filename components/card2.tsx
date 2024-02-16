
import React from 'react'
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"


import CounterInput from './counterInput'
import { Check } from 'lucide-react'

const Card2 = () => {
    return (
        <div>
            <Card className="w-[auto]">
                <div className='transition-[outline] group box mx-1 px-[20px] grid gap-[33px] content-between pt-[26px] pb-[16px] md:grid-cols-[1fr_max-content] md:pb-[25px] md:pl-[23px] md:mx-[2px] focus-within:outline-primary focus-within:outline-[1.5px]'>
                    <div className='grid justify-items-center text-center md:justify-items-start md:grid-flow-col md:text-start md:justify-start md:gap-[35px] md:items-center'>
                        <img src="/ProxyProtection.svg" height="62" alt="Config Icon" className="mb-[19px] md:mb-0" />
                        <div>
                            <p className="transition-[color] text-[22px] leading-[24px] text-webDarker font-medium mb-2 group-focus-within:text-primary">Proxy Protection</p>
                            <p className="text-webDark/70 leading-[20px]">Built-in proxy to hide your traffic and protect your privacy</p>
                        </div>
                    </div>
                    <div className="flex w-[236px] justify-between items-center mx-auto md:w-[222px] h-[60px]">
                        <p className="text-[20px] text-webDarker font-bold">€9.99</p>
                        <Checkbox style={{ width: "40px", height: "40px" }} id="terms" />

                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Card2