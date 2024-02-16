import { ModeToggle } from "@/components/Toggle";
import CheckoutPage from "@/components/step1";

import CounterInput from "@/components/counterInput";
import Image from "next/image";
import Step2 from "@/components/step2";
import Step3 from "@/components/step3";

export default function Home() {
  return (
    <div>
      <ModeToggle />
      <div className="container xl:max-w-[1150px] px-[20px] pt-[38px] overflow-x-hidden">
        <section id="step1" className="[counter-increment:_checkout-counter] grid gap-[38px] pb-[46px] md:pb-[39px]">

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start'
          }}>
            <div className="text-white bg-primary" style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '10px',
              fontFamily: 'CircularStd,Arial,Helvetica,sans-serif',
              fontSize: '20px'
            }}>
              1
            </div>
            <h1 style={{
              fontFamily: 'CircularStd,Arial,Helvetica,sans-serif',
              fontSize: '24px',
              fontWeight: 500,
              lineHeight: '2rem',
            }}>Choose the subscription that suits you</h1>
          </div>
          <CheckoutPage />
        </section>
        <section id="step2" className="grid gap-7 pb-[36px] md:pb-[48px]">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start'
          }}>
            <div className="text-white bg-primary" style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '10px',
              fontFamily: 'CircularStd,Arial,Helvetica,sans-serif',
              fontSize: '20px'
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
          <Step2/>
          

        </section>
        <section id="step3" className="grid gap-7 pb-[36px] md:pb-[48px]">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start'
          }}>
            <div className="text-white bg-primary" style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '10px',
              fontFamily: 'CircularStd,Arial,Helvetica,sans-serif',
              fontSize: '20px'
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
          <Step3/>
          

        </section>
      </div>




    </div>
  );
}
