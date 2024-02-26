"use client"
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'


const Page = () => {
  const searchParams = useSearchParams()
  const token = searchParams.get("token")
  const paymentId = searchParams.get("paymentId")
  const PayerID = searchParams.get("PayerID")
  const [ownerInfo, setOwnerInfo] = useState(null)
  const [orderInfo, setOrderInfo] = useState(null)

  useEffect(() => {
    fetch('https://check-aax0.onrender.com/api/paymentUpdate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: token,
        paymentId: paymentId,
        PayerID: PayerID,
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      return fetch(`https://check-aax0.onrender.com/api/products/owner/${paymentId}`)
    })
    .then(response => response.json())
    .then(data => {
      setOwnerInfo(data)
      // Add another fetch request here
      return fetch(`https://check-aax0.onrender.com/api/orders/id/${paymentId}`)
    })
    .then(response => response.json())
    .then(data => {
      setOrderInfo(data)
      console.log(data) // Handle the data from the second request
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }, [paymentId, PayerID, token])

  return (
    <Suspense>
    <div>
      <div>token={token}</div>
      <div>paymentId={paymentId}</div>
      <div>PayerID={PayerID}</div>
      <div>Owner Info: {ownerInfo ? JSON.stringify(ownerInfo) : 'Loading...'}</div>
      <div>Owner Info: {orderInfo ? JSON.stringify(orderInfo) : 'Loading...'}</div>
    </div>
    </Suspense>
  )
}

export default Page