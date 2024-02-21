"use client"
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import Image from 'next/image'

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

let selectedPlanId: number | null = 1;

export default function Example() {
    const [selected, setSelected] = useState(plans[0])

    function selectPlan(id: number) {
        selectedPlanId = id;
    }

    return (
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
                                    `${checked ? 'ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300 bg-sky-900/75 text-white' : 'bg-white'}
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
                                                        className={`font-medium  ${checked ? 'text-white' : 'text-gray-900'}`}
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
                <p>Selected plan ID: {selectedPlanId}</p>
            </div>
        </div>
    )
}

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