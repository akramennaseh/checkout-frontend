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
  

  useEffect(() => {
    fetch('https://api.bestertv.com/api/paymentUpdate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        paymentId: orderId,
        
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        return fetch(`https://api.bestertv.com/api/products/owner/${orderId}`)
      })
      .then(response => response.json())
      .then(data => {
        const extractedData = data.map((item: Item) => ({
          name1: item.name1,
          name2: item.name2,
          name3: item.name3,
        }));
        setOwnerInfo(extractedData);
        // Add another fetch request hereorderId
        return fetch(`https://api.bestertv.com/api/orders/id/${orderId}`)
      })
      .then(response => response.json())
      .then(data => {
        const { name, email, total, paymentGateway, orderId, paymentStatus, eventType, productName, productPrice, extras, proxy, discountCode, __v, PayerID, token } = data;
        setOrderInfo({ name, email, total, paymentGateway, orderId, paymentStatus, eventType, productName, productPrice, extras, proxy, discountCode, __v, PayerID, token });
        console.log(data) // Handle the data from the second request
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [paymentId, PayerID, orderId])
  
    return (
        <div>
            <Navigation />
            <div className='px-2 flex justify-center	py-[100px]'>
        <Tabs defaultValue="My Plans" className="w-[800px]">
          <TabsList className="grid w-full grid-cols-3  h-[auto]">
            <TabsTrigger value="My Plans"><Box className='mr-2 ' /> My Plans</TabsTrigger>
            <TabsTrigger value="Your Info">< CircleUser className='mr-2 ' />Your Info</TabsTrigger>
            <TabsTrigger value="Support"><Headset className='mr-2 '/>Support</TabsTrigger>
          </TabsList>
          
            <TabsContent id="contentToConvert" value="My Plans">
              <Card>
                <CardHeader>
                  <CardTitle>Your Subscriptions info</CardTitle>
                  <CardDescription>
                    Welcome <a className='text-blue-600'>{orderInfo.name || 'Loading...'}</a> these are your subscription info :
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Separator />
                  <div className=' flex flex-wrap items-center justify-between'>
                    <div className='pt-3 sm:pt-1'>
                      <CardTitle className='text-xl'>Subscription Type</CardTitle>
                      <CardDescription className='pt-2'>
                        {orderInfo.productName || 'Loading...'}
                      </CardDescription>
                    </div>
                    <div className='pt-3 sm:pt-1'>
                      <CardTitle className='text-xl'>Extra simultaneous</CardTitle>
                      <CardDescription className='pt-2'>
                        {orderInfo.extras || 'Loading...'} screens
                      </CardDescription>
                    </div>
                    <div className='pt-3 sm:pt-1'>
                      <CardTitle className='text-xl'>Proxy Protection</CardTitle>
                      <CardDescription className='pt-2'>
                        Proxy {orderInfo.proxy === '0' ? 'Disabled' : 'Enabled'}
                      </CardDescription>
                    </div>
                  </div>
                  <Separator />
                  {ownerInfo.map((item, index) => (
                    <div key={index}>
                      {ownerInfo.length === 1 ? (
                        <CardTitle className='text-xl pt-3 text-primary'>This is your subscription info</CardTitle>
                      ) : (
                        <CardTitle className='text-xl pt-3 text-primary'>Your {index + 1}{index === 0 ? 'st' : index === 1 ? 'nd' : index === 2 ? 'rd' : 'th'} subscription</CardTitle>
                      )}
                      <div className='flex flex-wrap pb-5 pt-2 justify-between'>
                        <div className="space-y-1">
                          <Label htmlFor="Username">Username</Label>
                          <CopyToClipboard text={item.name1}>
                            <Card className='w-[300px] sm:w-[350px] py-2 px-3'>
                              <p>{item.name1}</p>
                            </Card>
                          </CopyToClipboard>
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="password">Password</Label>
                          <CopyToClipboard text={item.name2}>
                          <Card className='w-[300px] sm:w-[350px] py-2 px-3'><p>{item.name2}</p></Card>
                          </CopyToClipboard>
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="Host">Host</Label>
                          <CopyToClipboard text={item.name3}>
                            <Card className='w-[300px] sm:w-[350px] py-2 px-3'><p>{item.name3}</p></Card>
                          </CopyToClipboard>
                        </div>
                        <div className="space-y-1 w-[300px] sm:w-[auto]">
                          <Label htmlFor="M3u">M3u</Label>
                          <CopyToClipboard text={`${item.name3}/get.php?username=${item.name1}&password=${item.name2}&type=m3u_plus&output=mpegts`}>
                            <Card className='py-2 px-3' style={{ overflowX: 'auto' }}>
                              <p>{`${item.name3}/get.php?username=${item.name1}&password=${item.name2}&type=m3u_plus&output=mpegts`}</p>
                            </Card>
                          </CopyToClipboard>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <div className='pb-3' style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button id='download' onClick={() => window.print()}>Download as PDF</Button>
                </div>
              </Card>

            </TabsContent>
          
          
          
          <TabsContent value="Your Info">
            <Card>
              <CardHeader>
                <CardTitle>Your Personel Info</CardTitle>
                <Separator />
              </CardHeader>
              <CardContent className=" flex flex-wrap justify-between ">
                <div className="pt-2 space-y-1">
                  <Label htmlFor="Name">Name</Label>
                  <Card className='w-[300px] sm:w-[350px] py-2 px-3'><p>{orderInfo.name || 'Loading...'}</p></Card>
                </div>
                <div className="pt-2 space-y-1">
                  <Label htmlFor="Email">Email</Label>
                  <Card className='w-[300px] sm:w-[350px] py-2 px-3'><p>{orderInfo.email || 'Loading...'}</p></Card>
                </div>
                <div className="pt-2 space-y-1">
                  <Label htmlFor="Total">Total</Label>
                  <Card className='w-[300px] sm:w-[350px] py-2 px-3'><p>{orderInfo.total || 'Loading...'}</p></Card>
                </div>
                <div className="pt-2 space-y-1">
                  <Label htmlFor="Payment Gateway">Payment Gateway</Label>
                  <Card className='w-[300px] sm:w-[350px] py-2 px-3'><p>{orderInfo.paymentGateway || 'Loading...'}</p></Card>
                </div>
                <div className="pt-2 space-y-1">
                  <Label htmlFor="Payment Status">Payment Status</Label>
                  <Card className='w-[300px] sm:w-[350px] py-2 px-3'>
                    <p>{orderInfo.name ? 'Paid' : 'Not Paid Yet'}</p></Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          < TabsContent value="Support" >
            <Card>
              <CardHeader>
              <CardTitle>You need help ? </CardTitle>
              <CardDescription>
              Contact us here!  We will be happy to assist you with any issue you may have.
              </CardDescription>
              <Separator/>
                <CardContent className='sm:px-4 px-0' >
                  <CardTitle className='text-xl pt-4'>Email</CardTitle>
                  <CardDescription className='pt-2'>
                    <CopyToClipboard text="Support@bestertv.com">
                      <div>
                        <Card className='w-[300px] sm:w-[350px] py-2 px-3'>
                          Support@bestertv.com
                        </Card>
                      </div>
                    </CopyToClipboard>
                  </CardDescription>
                  <CardTitle className='text-xl pt-4'>Whatsapp</CardTitle>
                  <CardDescription className='pt-2'>
                    <CopyToClipboard text="+44 123 456 789">
                      <div>
                        <Card className='w-[300px] sm:w-[350px] py-2 px-3'>
                          +44 123 456 789
                        </Card>
                      </div>
                    </CopyToClipboard>
                  </CardDescription>
                  <CardTitle className='text-xl pt-4'>Telegram</CardTitle>
                  <CardDescription className='pt-2'>
                    <CopyToClipboard text="Bestertv">
                      <div>
                        <Card className='w-[300px] sm:w-[350px] py-2 px-3'>
                          Bestertv Support
                        </Card>
                      </div>
                    </CopyToClipboard>
                  </CardDescription>
                  <CardTitle className='text-xl pt-4'>Facebook</CardTitle>
                  <CardDescription className='pt-2'>
                    <CopyToClipboard text="Bester Tv">
                      <div>
                        <Card className='w-[300px] sm:w-[350px] py-2 px-3'>
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
      <Footer />
            
    {/*<div>orderId={orderId}</div>
    <div className='pt-[200px]'>
              {ownerInfo.map((item, index) => (
                <div key={index}>
                  <p>Name 1: {item.name1}</p>
                  <p>Name 2: {item.name2}</p>
                  <p>Name 3: {item.name3}</p>
                </div>
              ))}
              <div>Owner Info: {ownerInfo ? JSON.stringify(ownerInfo) : 'Loading...'}</div>
              <div>--------------------------------------------------------------------------------------------------------------------------------------------------------</div>
              <div>Owner Info: {orderInfo ? JSON.stringify(orderInfo) : 'Loading...'}</div>
              </div>*/}
            
        </div>
    )
}

export default Page