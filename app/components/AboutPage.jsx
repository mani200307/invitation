import React from 'react';

const AboutPage = () => {
    return (
        <div id='AboutPage' className='flex flex-col -mt-1 bg-gradient-to-b from-[#2F3C7E] to-[#4831D4] h-screen justify-center gap-10 items-center'>
            <h1 className='text-3xl text-[#FBEAEB] font-medium mb-8'>Events</h1>
            <div className='flex md:flex-row flex-col justify-center items-center gap-8 md:gap-12'>
                <div className='flex flex-col w-fit border-[#4831D4] bg-[#4831D4] shadow-lg rounded-lg border-[1px] p-8 items-center gap-12'>
                    <h1 className='text-2xl text-[#FFFFFF] text-center'>Penn Azhaipu</h1>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <div className='flex bg-[#3a22d8] rounded-lg shadow-md p-4'>
                            <h1 className='text-center text-[#FFFFFF]'>Saturday, 20th January</h1>
                        </div>
                        <div className='flex bg-[#3a22d8] w-fit rounded-lg shadow-md p-4'>
                            <h1 className='text-center text-[#FFFFFF]'>7 PM Onwards</h1>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-fit border-[#4831D4] bg-[#4831D4] shadow-lg rounded-lg border-[1px] p-8 items-center gap-12'>
                    <h1 className='text-2xl text-[#FFFFFF] text-center'>Muhurtham</h1>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <div className='flex bg-[#3a22d8] rounded-lg shadow-md p-4'>
                            <h1 className='text-center text-[#FFFFFF]'>Sunday, 21th January</h1>
                        </div>
                        <div className='flex bg-[#3a22d8] w-fit rounded-lg shadow-md p-4'>
                            <h1 className='text-center text-[#FFFFFF]'>8 AM Onwards</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
