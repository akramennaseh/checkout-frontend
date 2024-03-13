import Footer from '@/components/footer'
import Navigation from '@/components/navigation'
import React from 'react'

const Page = () => {
    return (
        <div className='flex-1'>
            <Navigation />
            <div className='container max-w-[1126px] pt-[30px] pb-[92px] px-[15px] md:px-4 md:pt-[55px]'>
                <div className="grid gap-2.5 md:gap-5 text-center max-w-[750px] mx-auto mb-[22px] md:mb-[36px]">
                    <p className="font-black text-[30px] leading-[34px] text-[#1e1e1e]">
                        Discover our vast and diverse channel selection
                    </p>
                    <p className="font-medium text-[20px] text-black/70">
                        Elevate your entertainment experience with our extensive selection of over 9,000 premium channels. From live sports and news to international programming and more, we offer a diverse range of high-quality content to cater to every interest
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Page