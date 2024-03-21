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
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import CopyToClipboard from '@/components/CopyToClipboard'
const html2canvas = require('html2canvas');
import { jsPDF } from "jspdf";
import { Button } from '@/components/ui/button'
import { AvatarIcon, CubeIcon, FaceIcon, ImageIcon, SunIcon } from '@radix-ui/react-icons'
import { Box, CircleUser, Headset } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

const Page = () => {
    interface ProductInfo {
        _id?: string;
        name?: string;
        email?: string;
        total?: string;
        paymentGateway?: string;
        orderId?: string;
        paymentStatus?: boolean;
        eventType?: string;
        productName?: string;
        productPrice?: string;
        extras?: string;
        proxy?: string;
        discountCode?: string;
        __v?: number;
        PayerID?: string;
        token?: string;
      }
      interface Item {
        name1: string;
        name2: string;
        name3: string;
      }
      const [orderInfo, setOrderInfo] = useState<ProductInfo>({})
    const searchParams = useSearchParams()
  const session_id = searchParams.get("session_id")
  const NP_id = searchParams.get("NP_id")
  const orderId = searchParams.get("orderId")
  const paymentId = searchParams.get("paymentId")
  const PayerID = searchParams.get("PayerID")
  const [ownerInfo, setOwnerInfo] = useState<Item[]>([]);
  

  
    return (
        <div>
            <Navigation />
            
    <div>token={orderId}</div>
    <div className='pt-[200px]'>
              {ownerInfo.map((item, index) => (
                <div key={index}>
                  <p>Name 1: {item.name1}</p>
                  <p>Name 2: {item.name2}</p>
                  <p>Name 3: {item.name3}</p>
                </div>
              ))}
              <div>token={orderId}</div>
              <div>paymentId={NP_id}</div>
              <div>PayerID={orderId}</div>
              <div>Owner Info: {ownerInfo ? JSON.stringify(ownerInfo) : 'Loading...'}</div>
              <div>--------------------------------------------------------------------------------------------------------------------------------------------------------</div>
              <div>Owner Info: {orderInfo ? JSON.stringify(orderInfo) : 'Loading...'}</div>
      </div>
            <Footer />
        </div>
    )
}

export default Page