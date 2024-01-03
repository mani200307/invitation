import React from 'react';

const AboutPage = () => {
    return (
        <div id='AboutPage' className='flex flex-col bg-[#e0bfbf] h-screen justify-center gap-10 items-center'>
            <h1 className='text-3xl text-[#6b4646] font-medium mb-8'>Events</h1>

            <div className='flex md:flex-row flex-col gap-8 md:gap-12'>
                <div className='flex flex-col w-fit border-[#dbb2b2] bg-[#dbb2b2] shadow-lg rounded-lg border-[1px] p-8 items-center gap-12'>
                    <h1 className='text-2xl text-[#6b4646] text-center'>Ponn Azhaipu</h1>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <div className='flex bg-[#f0cccc] rounded-lg shadow-md p-4'>
                            <h1 className='text-center text-[#6b4646]'>Saturday, 20th January</h1>
                        </div>
                        <div className='flex bg-[#f0cccc] w-fit rounded-lg shadow-md p-4'>
                            <h1 className='text-center text-[#6b4646]'>7 PM Onwards</h1>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-fit border-[#dbb2b2] bg-[#dbb2b2] shadow-lg rounded-lg border-[1px] p-8 items-center gap-12'>
                    <h1 className='text-2xl text-[#6b4646] text-center'>Muhurtham</h1>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <div className='flex bg-[#f0cccc] rounded-lg shadow-md p-4'>
                            <h1 className='text-center text-[#6b4646]'>Sunday, 21th January</h1>
                        </div>
                        <div className='flex bg-[#f0cccc] w-fit rounded-lg shadow-md p-4'>
                            <h1 className='text-center text-[#6b4646]'>8 AM Onwards</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
