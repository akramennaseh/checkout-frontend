import React from 'react'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Example from './selectepayment'


const Step3 = () => {
  return (
    <div className='box mx-1 grid md:grid-cols-[63fr_45fr] md:box-unset md:gap-[30px]'>
      <Card className='pt-[17px] pb-[20px] md:box h-max md:pt-[24px] md:pb-[27px] [grid-row:2] md:[grid-row:_unset]'>
        <div className="px-5 pb-5 grid w-full  items-center gap-4">
          <Label htmlFor="Name" style={{
            fontFamily: "CircularStd,Arial,Helvetica,sans-serif",
            fontSize: "18px",
            fontWeight: 500,
          }}>Name</Label>
          <Input className='' type="name" placeholder="name" />
        </div>
        <div className="px-5 pb-5 grid w-full  items-center gap-4">
          <Label htmlFor="Email" style={{
            fontFamily: "CircularStd,Arial,Helvetica,sans-serif",
            fontSize: "18px",
            fontWeight: 500,
          }}>Email</Label>
          <Input className='' type="email" placeholder="Email" />
        </div>
        <div className="px-5 pb-5 grid w-full  items-center gap-4">
          <Label htmlFor="Select your preferred payment method" style={{
            fontFamily: "CircularStd,Arial,Helvetica,sans-serif",
            fontSize: "18px",
            fontWeight: 500,
          }}>Select your preferred payment method</Label>
          <Example />
        </div>
      </Card>
      <Card className='md:box h-max md:px-[19px] [grid-row:1] md:[grid-row:_unset]'>
        <div className='px-[27px] pt-[25px] pb-[21px] md:pt[30px] md:pr-0 md:pl-[6px] md:pb-6'>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="name" placeholder="Discount code" />
            <Button type="submit">Apply</Button>
          </div>
        </div>
        <div className='text-dark px-[18px] pb-[21px] md:pb-7 md:pt-[14px] md:border-t md:border-dark/10 md:px-0 md:pl-[9px]'>
          <p className="font-medium text-[22px] mb-[18px] leading-[24px]">Order Summary</p>
          <div className="grid gap-[14px]">
            <div className="grid grid-flow-col justify-between font-medium text-lg opacity-70 leading-[24px]" >
              <p>12 Month Pass</p>
              <p>€47.88</p>
            </div>
          </div>
          <ul className="grid gap-[11px] opacity-70 leading-[20px] mt-[14px]">
            <li className="relative pl-7 before:absolute before:inset-0 before:[background:url('/check.svg')_no-repeat_center_left]">
              Access over 9,000 channels
            </li>
            <li className="relative pl-7 before:absolute before:inset-0 before:[background:url('/check.svg')_no-repeat_center_left]">
              Thousands of VODs available
            </li>
            <li className="relative pl-7 before:absolute before:inset-0 before:[background:url('/check.svg')_no-repeat_center_left]">
              Enjoy premium HD channels 24/7
            </li>
            <li className="relative pl-7 before:absolute before:inset-0 before:[background:url('/check.svg')_no-repeat_center_left]">
              Automatic channel updates
            </li>
            <li className="relative pl-7 before:absolute before:inset-0 before:[background:url('/check.svg')_no-repeat_center_left]">
              Compatible with all your devices
            </li>
            <li className="relative pl-7 before:absolute before:inset-0 before:[background:url('/check.svg')_no-repeat_center_left]">
              Works seamlessly with all IPTV apps
            </li>
          </ul>
          <div>
            <div className='grid gap-[14px] pt-[25px]'>
              <div className='grid grid-flow-col justify-between font-medium text-lg opacity-70 leading-[24px]'>
              <p>2 Extra Connections</p>
              <p>€39.98</p>
              </div>
            </div>
            <div className='grid gap-[14px] pt-[25px]'>
              <div className='grid grid-flow-col justify-between font-medium text-lg opacity-70 leading-[24px]'>
              <p>1 Proxy Protection</p>
              <p>€9.99</p>
              </div>
            </div>
          </div>
        </div>
        <div className='px-[18px] pt-[21px] pb-[25px] border-t border-b border-dark/10 md:border-b-0 md:pt-[34px] md:px-0 md:pl-[9px] md:pb-[35px]'>
          <div className='grid grid-flow-col justify-between font-medium text-[22px] leading-[24px] text-dark'>
          <p>Total</p>
          <p>€97.85</p>
          </div>
        </div>
      </Card>
    </div>

  )
}

export default Step3