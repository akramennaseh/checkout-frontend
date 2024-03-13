"use client"
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Separator } from '@/components/ui/separator'
import CopyToClipboard from '@/components/CopyToClipboard'

import { Box, CircleUser, Headset } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'


const page = () => {
  return (
    <div>
    <Navigation />
    <div className='flex justify-center	py-[100px]'>
      
        <Tabs defaultValue="Support" className="w-[800px]">
          <TabsList className="grid w-full grid-cols-1  h-[auto]">
            <TabsTrigger className="bg-primary " value="Support"><Headset className='mr-2 '/>Support</TabsTrigger>
          </TabsList>
          < TabsContent value="Support" >
            <Card>
              <CardHeader>
              <CardTitle>You need help ? </CardTitle>
              <CardDescription>
              Contact us here!  We will be happy to assist you with any issue you may have.
              </CardDescription>
              <Separator/>
                <CardContent>
                  <CardTitle className='text-xl pt-4'>Email</CardTitle>
                  <CardDescription className='pt-2'>
                    <CopyToClipboard text="Support@bestertv.com">
                      <div>
                        <Card className='w-[auto] py-2 px-3'>
                          Support@bestertv.com
                        </Card>
                      </div>
                    </CopyToClipboard>
                  </CardDescription>
                  <CardTitle className='text-xl pt-4'>Whatsapp</CardTitle>
                  <CardDescription className='pt-2'>
                    <CopyToClipboard text="+44 123 456 789">
                      <div>
                        <Card className='w-[auto] py-2 px-3'>
                          +44 123 456 789
                        </Card>
                      </div>
                    </CopyToClipboard>
                  </CardDescription>
                  <CardTitle className='text-xl pt-4'>Telegram</CardTitle>
                  <CardDescription className='pt-2'>
                    <CopyToClipboard text="Bestertv">
                      <div>
                        <Card className='w-[auto] py-2 px-3'>
                          Bestertv Support
                        </Card>
                      </div>
                    </CopyToClipboard>
                  </CardDescription>
                  <CardTitle className='text-xl pt-4'>Facebook</CardTitle>
                  <CardDescription className='pt-2'>
                    <CopyToClipboard text="Bester Tv">
                      <div>
                        <Card className='w-[auto] py-2 px-3'>
                        Bester Tv
                        </Card>
                      </div>
                    </CopyToClipboard>
                  </CardDescription>
                </CardContent>
              </CardHeader>
            </Card>  
          </TabsContent>
        </Tabs>
        
    </div>
    <Footer/>
    </div>
  )
}

export default page