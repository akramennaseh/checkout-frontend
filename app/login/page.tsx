"use client"
import Footer from '@/components/footer'
import Navigation from '@/components/navigation'
import React, { useState, ChangeEvent, FormEvent } from 'react'

const Page = () => {
    const [email, setEmail] = useState('');
    const [response, setResponse] = useState<React.ReactNode>('');
    const [orderId, setOrderId] = useState('');
    const [paymentGateway, setPaymentGateway] = useState('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const res = await fetch(`https://check-aax0.onrender.com/emailOrder?email=${email}`);
            if (!res.ok) {
                throw new Error('API request failed');
            }
            const data = await res.json();
            const { orderId, paymentGateway } = data;
            setOrderId(orderId);
            setPaymentGateway(paymentGateway);
            setResponse(<><p>Order ID: {orderId}</p><p>Payment Gateway: {paymentGateway}</p></>);
            window.location.href = renderUrl(orderId, paymentGateway); // Redirect to the URL
        } catch (error) {
            setResponse('Order not found, try again');
        }
    }
    
    const renderUrl = (orderId: string, paymentGateway: string) => {
        if (paymentGateway === 'Paypal') {
            return 'https://checkout-frontend-one.vercel.app/success?paymentId=' + orderId;
        } else if (paymentGateway === 'Credit or Debit Card') {
            return 'https://checkout-frontend-one.vercel.app/successs?session_id=' + orderId;
        } else if (paymentGateway === 'Crypto Currencies -20%'){
            return 'https://checkout-frontend-one.vercel.app/cryptosuccess?orderId=' + orderId;
        } else {
            return '';
        }
    }
  return (
    <div>
        <Navigation />
        <div className='container py-12'>
            <div className='max-w-[743px] mx-auto bg-white rounded-base shadow-base px-4 py-10 my-5 md:pt-[54px] md:pb-[61px] md:my-10 md:px-20 inner-border inner-border-black/10'>
                <img src="/logo-light.png" alt="Logo" className="mx-auto mb-2 h-[34px]" />
                <div>
                    <p className="text-center text-lg px-4 mb-[52px] text-black/80">Simply provide your email address, and you will promptly receive a passwordless login code</p>
                    <form className="formkit-form" id="input_0" name="form_1" data-auto-animate="true" style={{ position: 'relative' }} onSubmit={handleSubmit}>
                        <div className="formkit-outer mb-4" data-family="text" data-type="email" data-empty="true" data-auto-animate="true" style={{ position: 'relative' }}>
                            <div className="formkit-wrapper grid gap-1">
                                <label className="formkit-label block font-medium text-black/60 text-lg text-black leading-[30px]" htmlFor="input_1">
                                    Email Address
                                </label>
                                <div className="formkit-inner h-[52px]" data-auto-animate="true" style={{ position: 'relative' }}>
                                    <input placeholder="email@example.com" className="formkit-input transition-[box-shadow] bg-[#f9f6ff] w-full rounded-lg inner-border inner-border-1 inner-border-black/10 focus-within:inner-border-primary focus-within:inner-border-[1.5px] h-full px-4 border-none box-border text-lg" type="email" name="email" id="input_1" aria-required="true" value={email} onChange={handleInputChange} />
                                </div>
                            </div>
                        </div>
                        <div className="formkit-outer" data-family="button" data-type="submit" data-empty="true" data-auto-animate="true" style={{ position: 'relative' }}>
                            <div className="formkit-wrapper">
                                <button className="formkit-input transition-[box-shadow,_transform,_opacity] bg-primary text-white font-medium px-8 py-3.5 rounded-full flex shadow-btn focus-visible:shadow-none hover:shadow-none focus-visible:[&amp;:not(:disabled)]:scale-[.98] active:[&amp;:not(:disabled)]:scale-[.98] focus-visible:inner-border-2 focus-visible:inner-border focus-visible:inner-border-offset-4 inner-border-primary disabled:opacity-80 w-full justify-center !rounded-base mt-[17px] items-center text-lg" type="submit" name="submit_2" id="input_2">
                                    Login
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Page