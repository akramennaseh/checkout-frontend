"use client"
import React, { useState } from 'react'
import channelData from '@/public/channels/channelData.json';
import { ScrollArea } from "@/components/ui/scroll-area"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';


const StyledTabs = styled(Tabs)({
    '& .MuiTabs-indicator': {
        backgroundColor: '#511cc4',
    },
    '& .Mui-selected': {
        color: '#511cc4', // replace 'yourColor' with the color you want
    },

});


// Define interface for the channel object
interface Channel {
    flag: string;
    name: string;
    country: string;

    // Add more properties if needed
}

const Page = () => {

    const [selectedCountry, setSelectedCountry] = useState<string>('');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredData, setFilteredData] = useState<Channel[]>(channelData.channels);

    const handleCountryChange = (event: React.SyntheticEvent, newValue: string) => {
        setSelectedCountry(newValue);
        filterData(newValue, searchTerm);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const search = e.target.value;
        setSearchTerm(search);
        filterData(selectedCountry, search);
    };

    const filterData = (country: string, search: string) => {
        let filteredResult = channelData.channels;

        if (country) {
            filteredResult = filteredResult.filter(obj => obj.country === country);
        }

        if (search) {
            const lowercasedSearch = search.toLowerCase();
            filteredResult = filteredResult.filter(obj => obj.name.toLowerCase().includes(lowercasedSearch));
        }

        setFilteredData(filteredResult);
    };

    const uniqueCountries = Array.from(new Set(channelData.channels.map((channel: Channel) => channel.country)));
    return (
        <div className='flex-1'>
            <Navigation/>
            <div className='container max-w-[1126px] pt-[30px] pb-[92px] px-[15px] md:px-4 md:pt-[55px]'>
                <div className="grid gap-2.5 md:gap-5 text-center max-w-[750px] mx-auto mb-[22px] md:mb-[36px]">
                    <p className="font-black text-[30px] leading-[34px] text-[#1e1e1e]">
                        Discover our vast and diverse channel selection
                    </p>
                    <p className="font-medium text-[20px] text-black/70">
                        Elevate your entertainment experience with our extensive selection of over 9,000 premium channels. From live sports and news to international programming and more, we offer a diverse range of high-quality content to cater to every interest
                    </p>
                </div>
                <div className=" pr-[52px] flex  bg-white rounded-[10px] bg-[url('/search.svg')] bg-[calc(100%_-_28px)_center] bg-no-repeat focus-within:outline-primary ">
                    <input value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Search Channels, Country..."
                        type="text"
                        className="h-[62px] w-full pl-[20px] text-black placeholder:opacity-70"
                    />
                </div>
                <div className='pt-[10px] pb-[14px] '>
                    <StyledTabs
                        value={selectedCountry}
                        onChange={handleCountryChange}
                        textColor="secondary"
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        <Tab className='mr-[14px] relative h-full text-[#37363e] bg-white flex items-center border border-black/70 rounded-[10px] pl-[15px] isolate ' label="Select all Countries" value="" />
                        {uniqueCountries.map((country: string, index: number) => {
                            const channel = channelData.channels.find((channel: Channel) => channel.country === country);
                            return (
                                <Tab
                                    className='mr-[14px] relative h-full text-[#37363e] bg-white flex items-center border border-black/70 rounded-[10px] pl-[15px] isolate '
                                    label={
                                        <div className="flex items-center">
                                            <img className='pr-2' src={channel?.flag} alt={`${country} flag`} width="24" height="18" />
                                            <span>{country}</span>
                                        </div>
                                    }
                                    key={index}
                                    value={country}
                                />
                            )
                        })}
                    </StyledTabs>
                </div>

                <div>
                    {/*{filteredData.map((obj, index) => (
                            <tr key={index}>
                                <td><img width="24" height="18" src={obj.flag} /></td>
                                <td>{obj.name}</td>
                            </tr>
                        ))}*/}
                    <ScrollArea className="h-[500px] w-full  bg-white border border-black/10 rounded-[10px] shadow-base pr-[4px] md:pl-[30px] pt-[24px] pb-[21px] bg-[size:1px_100%] bg-no-repeat md:bg-[center] md:bg-[linear-gradient(rgba(0,0,0,.1),_rgba(0,0,0,.1))] lg:bg-[position:33%_center,66%_center] lg:bg-[linear-gradient(rgba(0,0,0,.1),_rgba(0,0,0,.1)),_linear-gradient(rgba(0,0,0,.1),_rgba(0,0,0,.1))]  ">
                        <div className="grid sm:grid-cols-3 gap-4 px-5">
                            {filteredData.map((obj: Channel, index: number) => (
                                <div key={index} className="text-sm">
                                    <div className="flex items-center">
                                        <img width="24" height="18"src={obj.flag} />
                                        <span className="ml-2">{obj.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Page