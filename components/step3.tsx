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
          <Example/>
          <Card></Card>
          
        </div>

      </Card>
      <Button className='bg-primary'>hello</Button>
    </div>
  )
}

export default Step3