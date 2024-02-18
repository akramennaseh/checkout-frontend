"use client"
import React, { useState } from 'react'
import Card2 from './card2'
import { Card } from "@/components/ui/card"
import CounterInput from './counterInput'
import Image from 'next/image'
import { Checkbox } from "@/components/ui/checkbox"

type Extra = {
    id: number;
    price: string;
};
type Proxy = {
    id: number;
    price: string;
};


const Step2 = () => {
    const Extras: Extra[] = [
        { id: 1, price: '19.99'},

    ];
    const Proxys: Proxy[] = [
        { id: 1, price: '9.99'},

    ];


    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count > 0 ? count - 1 : 0);
    const [checkboxValue, setCheckboxValue] = useState(0);
    const handleCheckboxChange = (checked: boolean | string) => {
        setCheckboxValue(checked === true ? 1 : 0);
    };
    return (
        <>
            <div>
                <Card className="w-[auto]">
                    <div className='transition-[outline] group box mx-1 px-[20px] grid gap-[33px] content-between pt-[26px] pb-[16px] md:grid-cols-[1fr_max-content] md:pb-[25px] md:pl-[23px] md:mx-[2px] focus-within:outline-primary focus-within:outline-[1.5px]'>
                        <div className='grid justify-items-center text-center md:justify-items-start md:grid-flow-col md:text-start md:justify-start md:gap-[35px] md:items-center'>
                            <Image src="/ExtraConnections.svg" height="62" width='62' alt="Config Icon" className=" mb-[19px] md:mb-0" />
                            <div>
                                <p className="transition-[color] text-[22px] leading-[24px] text-webDarker font-medium mb-2 group-focus-within:text-primary">Extra simultaneous screens</p>
                                <p className="text-webDark/70 leading-[20px]">Want to share your subscription with your family or friends? Add as many simultaneous screens as you need.</p>
                            </div>
                        </div>
                        <div className="flex w-[236px] justify-between items-center mx-auto md:w-[222px] h-[60px]">
                            <p className="text-[20px] text-webDarker font-bold">€{Extras[0].price}</p>
                            <div className='border-2 py-3 px-3 text-xl font-semibold rounded-md border-inherit			'>
                                <button onClick={decrement} className='w-[20px]'>-</button>
                                <span className='mx-2 w-[39px] text-center'>{count}</span>
                                <button onClick={increment} className='w-[20px]'>+</button>
                            </div>
                            {`The total price is: €${count * parseFloat(Extras[0].price)}`}
                        </div>
                    </div>
                </Card>
            </div>
            <div>
                <Card className="w-[auto]">
                    <div className='transition-[outline] group box mx-1 px-[20px] grid gap-[33px] content-between pt-[26px] pb-[16px] md:grid-cols-[1fr_max-content] md:pb-[25px] md:pl-[23px] md:mx-[2px] focus-within:outline-primary focus-within:outline-[1.5px]'>
                        <div className='grid justify-items-center text-center md:justify-items-start md:grid-flow-col md:text-start md:justify-start md:gap-[35px] md:items-center'>
                            <Image src="/ProxyProtection.svg" height="62" width={62} alt="Config Icon" className="mb-[19px] md:mb-0" />
                            <div>
                                <p className="transition-[color] text-[22px] leading-[24px] text-webDarker font-medium mb-2 group-focus-within:text-primary">Proxy Protection</p>
                                <p className="text-webDark/70 leading-[20px]">Built-in proxy to hide your traffic and protect your privacy</p>
                            </div>
                        </div>
                        <div className="flex w-[236px] justify-between items-center mx-auto md:w-[222px] h-[60px]">
                            <p className="text-[20px] text-webDarker font-bold">€9.99</p>
                            <Checkbox style={{ width: "40px", height: "40px" }} id="terms"
                            onCheckedChange={handleCheckboxChange}
                             />

                        </div>
                        <p>Checkbox value: {checkboxValue}</p>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default Step2