import React from 'react';

const LocationPage = () => {
    return (
        <div id='LocationPage' className='flex flex-col -mt-1 bg-gradient-to-b to-[#2F3C7E] from-[#4831D4] py-10 justify-center gap-4 items-center'>
            <h1 className='text-3xl text-[#FBEAEB] font-medium mb-12'>Location</h1>
            <div className='flex flex-col w-fit border-[#4831D4] bg-[#4831D4] shadow-lg rounded-lg border-[1px] p-4 items-center gap-12'>
                <h1 className='text-xl text-[#FFFFFF] text-center'>Simbu Meera Mahal</h1>
            </div>
            <div className='flex bg-[#4831D4] w-fit rounded-lg shadow-md p-4'>
                <h1 className='text-center text-[#FFFFFF]'>Vedaranyam</h1>
            </div>
        </div>
    );
};

export default LocationPage;
