"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Example from './selectepayment'


type Extra = {
  id: number;
  price: string;
};
type Proxy = {
  id: number;
  price: string;
};


type Product = {
  id: number;
  name: string;
  price: string;
  Instead: string;
  UseToo: string;
  periode: string;
};


type DiscountCodes = {
  [key: string]: number;
};

const getDiscountPercentage = (code: string): number => {
  const discounts: DiscountCodes = {
    'CODE10': 10,
    'CODE20': 20,
    'CODE30': 30,
  };

  return discounts[code.toUpperCase()] || 0;
};


const Step3 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('https://check-aax0.onrender.com/api/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  const [discount, setDiscount] = useState({ code: '', percentage: 0 });
const [inputValue, setInputValue] = useState('');

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
};
const handleApplyClick = () => {
    const percentage = getDiscountPercentage(inputValue);
    setDiscount({ code: inputValue, percentage });
};

const products: Product[] = [
    { id: 1, name: '6 Month Pass', price: '30', Instead: 'Instead of €9.99 per month', UseToo: '40', periode: '6Mon' },
    { id: 2, name: '12 Month Pass', price: '70', Instead: 'Instead of €9.99 per month', UseToo: '40', periode: '6Mon' },
];
const Extras: Extra[] = [
    { id: 1, price: '19.99' },

];

const Proxys: Proxy[] = [
    { id: 1, price: '9.99' },

];


const [selectedProduct, setSelectedProduct] = useState(products.find(product => product.id === 2));
const [selectedProductPrice, setSelectedProductPrice] = useState(selectedProduct?.price);
const [selectedProductName, setSelectedProductName] = useState(selectedProduct?.name);
const [count, setCount] = useState(0);
const increment = () => setCount(count + 1);
const decrement = () => setCount(count > 0 ? count - 1 : 0);
const [checkboxValue, setCheckboxValue] = useState(0);
const handleCheckboxChange = (checked: boolean | string) => {
    setCheckboxValue(checked === true ? 1 : 0);
};

const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setSelectedProductPrice(product.price);
    setSelectedProductName(product.name);
};





  return (
    <div className='box mx-1 grid md:grid-cols-[63fr_45fr] md:box-unset md:gap-[30px]'>
                        <Card className='pt-[17px] pb-[20px] md:box h-max md:pt-[24px] md:pb-[27px] [grid-row:2] md:[grid-row:_unset]'>
                        <form onSubmit={handleSubmit}>
      <div className="px-5 pb-5 grid w-full items-center gap-4">
        <Label htmlFor="Name" style={{
          fontFamily: "CircularStd,Arial,Helvetica,sans-serif",
          fontSize: "18px",
          fontWeight: 500,
        }}>Name</Label>
        <Input className='' type="name" placeholder="name" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div className="px-5 pb-5 grid w-full items-center gap-4">
        <Label htmlFor="Email" style={{
          fontFamily: "CircularStd,Arial,Helvetica,sans-serif",
          fontSize: "18px",
          fontWeight: 500,
        }}>Email</Label>
        <Input className='' type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div className="px-5 pb-5 grid w-full items-center gap-4">
        <Button className='h-[50px]' type="submit">Continue</Button>
      </div>
    </form>

                        </Card>
                        <Card className='md:box h-max md:px-[19px] [grid-row:1] md:[grid-row:_unset]'>
                            <div className='px-[27px] pt-[25px] pb-[21px] md:pt[30px] md:pr-0 md:pl-[6px] md:pb-6'>
                                <div className="flex w-full max-w-sm items-center space-x-2">
                                    <Input type="name" placeholder="Discount code" value={inputValue}
                                        onChange={handleInputChange}
                                    />
                                    <Button type="submit" onClick={handleApplyClick}>Apply</Button>
                                    
                                </div>
                            </div>
                            <div className='text-dark px-[18px] pb-[21px] md:pb-7 md:pt-[14px] md:border-t md:border-dark/10 md:px-0 md:pl-[9px]'>
                                <p className="font-medium text-[22px] mb-[18px] leading-[24px]">Order Summary</p>
                                <div className="grid gap-[14px]">
                                    <div className="grid grid-flow-col justify-between font-medium text-lg opacity-70 leading-[24px]" >
                                        <p>{selectedProductName}</p>
                                        <p>€{selectedProductPrice}</p>
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
                                    {count !== 0 && (
                                        <div className='grid gap-[14px] pt-[25px]'>

                                            <div className='grid grid-flow-col justify-between font-medium text-lg opacity-70 leading-[24px]'>
                                                <p>{count} Extra Connections</p>
                                                <p>€ {`${count * parseFloat(Extras[0].price)}`}</p>
                                            </div>

                                        </div>
                                    )}
                                    {checkboxValue !== 0 && (
                                        <div className='grid gap-[14px] pt-[25px]'>
                                            <div className='grid grid-flow-col justify-between font-medium text-lg opacity-70 leading-[24px]'>
                                                <p>{checkboxValue} Proxy Protection</p>
                                                <p>€{Proxys[0].price}</p>
                                            </div>
                                        </div>
                                    )}
                                    {discount.percentage > 0 && (
                                        <div className='grid gap-[14px] pt-[25px]'>
                                            <div className='grid grid-flow-col justify-between font-medium text-lg opacity-70 leading-[24px]'>
                                                <p>Discount:</p>
                                                <p>{`-${discount.percentage}%`}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='px-[18px] pt-[21px] pb-[25px] border-t border-b border-dark/10 md:border-b-0 md:pt-[34px] md:px-0 md:pl-[9px] md:pb-[35px]'>
                                <div className='grid grid-flow-col justify-between font-medium text-[22px] leading-[24px] text-dark'>
                                    <p>Total</p>
                                    <p>€{`${(count * Number(Extras[0].price) + checkboxValue * Number(Proxys[0].price) + Number(selectedProductPrice || "0") - ((count * Number(Extras[0].price) + checkboxValue * Number(Proxys[0].price) + Number(selectedProductPrice || "0") ) * Number(discount.percentage)/100)).toFixed(2)}`}</p>
                                    
                                </div>
                            </div>
                        </Card>
                    </div>

  )
}

export default Step3