"use client"
import React, { useEffect, useState } from 'react'
import { ModeToggle } from "@/components/Toggle";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Example from '@/components/selectepayment';
import { Button } from '@/components/ui/button';
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { RadioGroup } from '@headlessui/react'
import { Badge } from "@/components/ui/badge"
import Navigation from '@/components/navigation';
import { ArrowRight } from 'lucide-react';
import Footer from '@/components/footer';



const plans = [
    {
        id: 1,
        name: 'Paypal',
        image: '/payp.png'
    },
    {
        id: 2,
        name: 'Credit or Debit Card',
        image: '/CreditCard.svg'
    },
    {
        id: 3,
        name: 'Crypto Currencies -20%',
        image: '/Cryptocurrency.svg'
    },
]




type DiscountCodes = {
    [key: string]: number;
};

const getDiscountPercentage = (code: string): number => {
    const discounts: DiscountCodes = {
        'CODE10': 10,
        'CODE20': 20,
        'CODE30': 30,
        'yassine': 99.99,
    };

    return discounts[code.toUpperCase()] || 0;
};

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
    sale: string;
    UseToo: string;
    periode: string;
};

let selectedPlanId: number | null = 1;


const Page = () => {

    const [selected, setSelected] = useState(plans[0])

    function selectPlan(id: number) {
        selectedPlanId = id;
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [total, setTotal] = useState('0');
    const [paymentGateway, setPaymentGateway] = useState('');
    const [productName, setProductName] = useState('0');
    const [productPrice, setProductPrice] = useState('0');
    const [extras, setExtras] = useState('0');
    const [proxy, setProxy] = useState('0');
    const [discountCode, setDiscountCode] = useState('0');



    const { toast } = useToast();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            toast({ description: "Invalid email format.", variant: "destructive" });
            return;
        }

        try {
            const response = await fetch('https://check-aax0.onrender.com/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, total, paymentGateway, productName, productPrice, extras, proxy, discountCode }),
            });

            const data = await response.json();
            console.log(data);
            console.log("Received data from API:", data);
            console.log("Received sessionId from API:", data.sessionurl);
            toast({ description: "Data submitted successfully." });



            if (paymentGateway === 'Credit or Debit Card') {
                window.location.href = data.sessionurl;
            } else if (paymentGateway === 'Paypal') {
                const approvalUrl = data.approvalUrl;
                window.location.href = approvalUrl;
                // Redirect to the URL provided by the API
            }else if (paymentGateway === 'Crypto Currencies -20%') {
                const invoiceUrl = data.invoiceUrl;
                window.location.href = invoiceUrl;

            }


            // Redirect to the URL provided by the second API


        } catch (error) {
            console.error('Error:', error);
            toast({ description: "An error occurred while submitting data.", variant: "destructive" });
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
        { id: 1, name: '6 Month Pass', price: '35.99', sale: "", Instead: 'Instead of €9.99 per month', UseToo: '40', periode: '6 Month' },
        { id: 2, name: '12 Month Pass', price: '47.99', sale: "60% SALE", Instead: 'Instead of €9.99 per month', UseToo: '40', periode: ' Year' },
        { id: 3, name: '24 Month Pass', price: '70.99', sale: "70% SALE", Instead: 'Instead of €9.99 per month', UseToo: '40', periode: ' 2Year' },
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
    useEffect(() => {
        const newTotal = (count * Number(Extras[0].price) + checkboxValue * Number(Proxys[0].price) + Number(selectedProductPrice || "0") - ((count * Number(Extras[0].price) + checkboxValue * Number(Proxys[0].price) + Number(selectedProductPrice || "0")) * Number(discount.percentage) / 100)).toFixed(2);
        setTotal(newTotal);
    }, [count, Extras, checkboxValue, Proxys, selectedProductPrice, discount.percentage]);
    useEffect(() => {
        setProductName(selectedProductName || "");
    }, [selectedProductName]);
    useEffect(() => {
        setProductPrice(selectedProductPrice || "");
    }, [selectedProductPrice]);
    setExtras
    useEffect(() => {
        const newExtras = count.toString();
        setExtras(newExtras);
    }, [count]);
    useEffect(() => {
        const newProxy = checkboxValue.toString();
        setProxy(newProxy);
    }, [checkboxValue]);
    useEffect(() => {
        const newDiscountCode = Number(discount.percentage).toString();
        setDiscountCode(newDiscountCode);
    }, [discount.percentage]);
    useEffect(() => {
        setPaymentGateway(selected.name);
    }, [selected]);



    return (
        <div>
            <Navigation />
             {/*<div className='hidden sm:flex text-white container px-[100px] py-[38px] overflow-x-hidden bg-primary'>
              <h1 className='text-xl mb-2'>Embark on Your Unforgettable Television Adventure Today, Filled with Endless Entertainment and Exciting Discoveries</h1>
    </div>*/}

            <div className="container xl:max-w-[1150px] px-[20px] pt-[38px] overflow-x-hidden">
                
                <section id="step1" className="[counter-increment:_checkout-counter] grid gap-[10px] pb-[46px] md:pb-[39px]">
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row', // Change this line
                        justifyContent: 'start'
                    }}>
                        <div className="text-white bg-primary" style={{
                            width: '40px',
                            minWidth: '40px',
                            maxWidth: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '10px',
                            fontFamily: 'CircularStd,Arial,Helvetica,sans-serif',
                            fontSize: '20px',
                            flexWrap: 'nowrap' // Add this line
                        }}>
                            1
                        </div>
                        <h1 style={{
                            fontFamily: 'CircularStd,Arial,Helvetica,sans-serif',
                            fontSize: '24px',
                            fontWeight: 500,
                            lineHeight: '2rem',
                        }}>
                        Choose the plan that suits you
                        </h1>
                    </div>
                    <div className='flex flex-col text-center flex-wrap items-center sm:flex-row'>  {products.map((product) => (
                        <div
                            className='flex-1 sm:mx-5 sm:my-8 mx-1 my-5'
                            key={product.id}
                            onClick={() => handleProductClick(product)}
                            style={{

                                borderRadius: 'var(--radius)',
                                cursor: 'pointer',
                            }}
                        >

                            <Card className={`card ${selectedProduct?.id === product.id ? 'card-selected' : ''}`}>
                                {product.sale && <Badge className='mt-2 text-[18px] place-content-center w-[auto] -translate-y-[25px] mb-0'>{product.sale}</Badge>}
                                <CardHeader className={`${!product.sale ? '' : 'pt-0'}`}>
                                    <CardTitle className='p-[0px] '>{product.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <h1 style={{ display: "inline-block" }} className="text-4xl font-bold text-blue-700">{product.price}€</h1>
                                    <h1 className=" ml-2" style={{ display: "inline-block" }}>/{product.periode}</h1>
                                    <h1 className="line-through ml-2 text-instant">{product.Instead}</h1>
                                </CardContent>
                                <CardFooter className="flex justify-center">
                                    <CardDescription>30-day money-back guarantee</CardDescription>
                                </CardFooter>
                            </Card>
                        </div>
                    ))}
                    </div>
                </section>
                <section id="step2" className="grid gap-7 pb-[36px] md:pb-[48px]">
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'start'
                    }}>
                        <div className="text-white bg-primary" style={{
                            width: '40px',
                            minWidth: '40px',
                            maxWidth: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '10px',
                            fontFamily: 'CircularStd,Arial,Helvetica,sans-serif',
                            fontSize: '20px',
                            flexWrap: 'nowrap' // Add this line
                        }}>
                            2
                        </div>
                        <h1 style={{
                            fontFamily: 'CircularStd,Arial,Helvetica,sans-serif',
                            fontSize: '24px',
                            fontWeight: 500,
                            lineHeight: '2rem',
                        }}>Select your options
                        </h1>
                    </div>
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
                                        <p className="text-[20px] text-webDarker font-bold">€{Proxys[0].price}</p>
                                        <Checkbox style={{ width: "40px", height: "40px" }} id="terms"
                                            onCheckedChange={handleCheckboxChange}
                                        />
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </>
                </section>
                <section id="step3" className="grid gap-7 pb-[36px] md:pb-[48px]">
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'start'
                    }}>
                        <div className="text-white bg-primary" style={{
                            width: '40px',
                            minWidth: '40px',
                            maxWidth: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '10px',
                            fontFamily: 'CircularStd,Arial,Helvetica,sans-serif',
                            fontSize: '20px',
                            flexWrap: 'nowrap' // Add this line
                        }}>
                            3
                        </div>
                        <h1 style={{
                            fontFamily: 'CircularStd,Arial,Helvetica,sans-serif',
                            fontSize: '24px',
                            fontWeight: 500,
                            lineHeight: '2rem',
                        }}>Select your preferred payment method
                        </h1>
                    </div>
                    <div className='box mx-1 grid md:grid-cols-[63fr_45fr] md:box-unset md:gap-[30px]'>
                        <Card className='pt-[17px] pb-[20px] md:box h-max md:pt-[24px] md:pb-[27px] [grid-row:2] md:[grid-row:_unset]'>
                            <form onSubmit={handleSubmit}>
                                <div className="px-5 pb-5 grid w-full items-center gap-4">
                                    <Label htmlFor="Name" style={{
                                        fontFamily: "CircularStd,Arial,Helvetica,sans-serif",
                                        fontSize: "18px",
                                        fontWeight: 500,
                                    }}>Name</Label>
                                    <Input className='' type="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                                </div>
                                <div className="px-5 pb-5 grid w-full items-center gap-4">
                                    <Label htmlFor="Email" style={{
                                        fontFamily: "CircularStd,Arial,Helvetica,sans-serif",
                                        fontSize: "18px",
                                        fontWeight: 500,
                                    }}>Email</Label>
                                    <Input className='' type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div style={{ display: 'none' }} className="px-5 pb-5 grid w-full items-center gap-4">
                                    <Label htmlFor="total" style={{
                                        fontFamily: "CircularStd,Arial,Helvetica,sans-serif",
                                        fontSize: "18px",
                                        fontWeight: 500,
                                    }}>total</Label>
                                    <Input type="total" placeholder="total" value={total} readOnly />
                                </div>

                                <div className="px-5 pb-5 grid w-full  items-center gap-4">
                                    <Label htmlFor="Select your preferred payment method" style={{
                                        fontFamily: "CircularStd,Arial,Helvetica,sans-serif",
                                        fontSize: "18px",
                                        fontWeight: 500,
                                    }}>Select your preferred payment method</Label>
                                    <div className="w-full px-4 py-4">
                                        <div className="mx-auto w-full ">
                                            <RadioGroup value={selected} onChange={(plan) => { setSelected(plan); selectPlan(plan.id); }}>
                                                <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
                                                <div className="space-y-2">
                                                    {plans.map((plan) => (
                                                        <RadioGroup.Option
                                                            key={plan.name}
                                                            value={plan}
                                                            className={({ checked }) =>
                                                                `${checked ? 'ring-2 ring-white/60 ring-offset-2 ring-offset-primary bg-white text-white' : 'bg-white/60 ring-2 ring-white/60 ring-offset-1 ring-offset-black/10'}
                            relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                                                            }
                                                        >
                                                            {({ checked }) => (
                                                                <>
                                                                    <div className="flex w-full items-center justify-between">
                                                                        <div className="flex items-center">
                                                                            <div className="text-sm">
                                                                                <RadioGroup.Label
                                                                                    as="p"
                                                                                    className={`font-medium  ${checked ? 'text-black' : 'text-gray-900'}`}
                                                                                >
                                                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                                                        <span>{plan.name}</span>
                                                                                        <Image className='pl-3' height={30} width={153} src={plan.image} alt="" />
                                                                                    </div>
                                                                                </RadioGroup.Label>
                                                                                <RadioGroup.Description
                                                                                    as="span"
                                                                                    className={`inline ${checked ? 'text-sky-100' : 'text-gray-500'
                                                                                        }`}
                                                                                >
                                                                                </RadioGroup.Description>
                                                                            </div>
                                                                        </div>
                                                                        {checked && (
                                                                            <div className="shrink-0 text-white">
                                                                                <CheckIcon className="h-6 w-6" />
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </>
                                                            )}
                                                        </RadioGroup.Option>
                                                    ))}
                                                </div>
                                            </RadioGroup>

                                        </div>
                                    </div>
                                </div>
                                <div className="px-5 pb-5 grid w-full items-center gap-4">
                                    <Button className='text-lg h-[50px] relative flex items-center justify-center' type="submit">
                                    Continue to payment 
                                        <ArrowRight className='absolute right-5'/> 
                                    </Button>
                                </div>
                                <div className='px-5 mb-[10px] gap-5 md:flex'>
                                    <p className="mb-[10px] flex items-center justify-center gap-2.5 font-medium">
                                        <img src="/secure.svg" alt="secure icon" /> Secure SSL Encrypted Payment</p>
                                    <p className="mb-[13px] flex items-center justify-center gap-2.5 font-medium">
                                        <img src="/money-back.svg" alt="money back icon" />
                                        30-day money-back guarantee</p>
                                </div>
                                <p className="px-5 text-slate-500	 opacity-70">These do not entail memberships or subscriptions, nor do they involve automatic rebilling or renewal. Upon reaching the end of your allocated days, the decision to purchase additional days rests entirely with you, with no obligation to do so.</p>
                                                                            
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
                                    <p>€{`${(count * Number(Extras[0].price) + checkboxValue * Number(Proxys[0].price) + Number(selectedProductPrice || "0") - ((count * Number(Extras[0].price) + checkboxValue * Number(Proxys[0].price) + Number(selectedProductPrice || "0")) * Number(discount.percentage) / 100)).toFixed(2)}`}</p>

                                </div>
                            </div>
                        </Card>
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    )
}
export default Page



function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
            <path
                d="M7 13l3 3 7-7"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}