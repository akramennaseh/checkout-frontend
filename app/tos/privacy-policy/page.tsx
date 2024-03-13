import Footer from '@/components/footer'
import Navigation from '@/components/navigation'
import React from 'react'

const Page = () => {
    return (
        <div className='flex-1'>
            <Navigation />
            <div className='max-w-[1280px] container py-12 text-dark'>
                <header className="mb-12 grid gap-5 text-center">
                    <h1 className="text-[30px] font-bold">
                        Privacy Policy
                    </h1>
                    <h2 className="text-[20px] font-medium">
                        When your purchase one of our products - you automatically accept these terms
                    </h2>
                </header>
                <div>
                    <a href="" className='text-[1.25rem] font-bold my-[2rem]'>
                        Privacy Policy for BesterTV
                    </a>
                    <p className='my-[1rem]'>
                        At BesterTV, accessible from https://BesterTV.com, we are committed to protecting the privacy of our visitors. This Privacy Policy document explains how we collect and use information about our users.
                    </p>
                    <p className='my-[1rem]'>
                        If you have any questions or concerns about this policy, please contact us by email at support@BesterTV.com.
                    </p>
                    <a href="" className='text-[1.25rem] font-bold my-[2rem]'>
                        Log Files
                    </a>
                    <p className='my-[1rem]'>
                        Like many other websites, BesterTV uses log files to collect information about visitors. These files record certain non-personal information about users, including their IP addresses, browser type, Internet Service Provider (ISP), date and time of visit, and pages viewed on our site. This information is used to analyze trends, administer the site, track user movements, and gather demographic information. It is not linked to any personally identifiable information.
                    </p>
                    <a href="" className='text-[1.25rem] font-bold my-[2rem]'>
                        Cookies and Web Beacons
                    </a>
                    <p className='my-[1rem]'>
                        BesterTV uses cookies to personalize and improve your browsing experience. Cookies are small text files that are stored on your device when you visit our site. They help us remember your preferences, such as your language and region, and allow us to deliver personalized content and advertisements.
                    </p>
                    <p className='my-[1rem]'>
                        We also use web beacons, which are small graphic images embedded in web pages or emails. Web beacons allow us to track how users interact with our site and emails, such as which pages are viewed and whether emails are opened or clicked.
                    </p>
                    <p className='my-[1rem]'>
                        You can choose to disable cookies through your browser settings, but please note that some features of the site may not function properly if you do so.
                    </p>
                    <a href="" className='text-[1.25rem] font-bold my-[2rem]'>
                        Privacy Policies of Third-Party Services
                    </a>
                    <p className='my-[1rem]'>
                        BesterTV may use third-party services, such as Google Analytics and advertising networks, to collect and analyze information about our users. These services may use cookies and other tracking technologies to collect information about your browsing habits and interests.
                    </p>
                    <p className='my-[1rem]'>
                        Please note that BesterTV has no control over the privacy policies or practices of these third-party services. We encourage you to review their privacy policies before using their services.
                    </p>
                    <a href="" className='text-[1.25rem] font-bold my-[2rem]'>
                        Children's Information
                    </a>
                    <p className='my-[1rem]'>
                        BesterTV is committed to protecting the privacy of children online. We do not knowingly collect any personal information from children under the age of 13. If you are a parent or guardian and you believe that your child has provided us with personal information, please contact us immediately and we will delete that information from our servers.
                    </p>
                    <a href="" className='text-[1.25rem] font-bold my-[2rem]'>
                        Online Privacy Policy Only
                    </a>
                    <p className='my-[1rem]'>
                        This privacy policy applies only to our online activities and is valid for visitors to our website with regards to the information that they share and/or collect on BesterTV. This policy is not applicable to any information collected offline or via channels other than this website.
                    </p>
                    <a href="" className='text-[1.25rem] font-bold my-[2rem]'>
                        Consent
                    </a>
                    <p className='my-[1rem]'>
                        By using our website, you consent to the terms of this privacy policy and agree to our collection, use, and disclosure of your personal information as described herein. If you do not agree to the terms of this policy, please do not use our site.
                    </p>


                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Page