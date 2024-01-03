import React from 'react';

const LocationPage = () => {
    return (
        <div id='LocationPage' className='flex flex-col bg-[#e0bfbf] py-10 justify-center gap-4 items-center'>
            <h1 className='text-3xl text-[#6b4646] font-medium mb-12'>Location</h1>
            <div className='flex flex-col w-fit border-[#dbb2b2] bg-[#dbb2b2] shadow-lg rounded-lg border-[1px] p-4 items-center gap-12'>
                <h1 className='text-xl text-[#6b4646] text-center'>Simbu Meera Thirumana Arangam</h1>
            </div>
            <div className='flex bg-[#f0cccc] w-fit rounded-lg shadow-md p-4'>
                <h1 className='text-center text-[#6b4646]'>Vedaranyam</h1>
            </div>
        </div>
    );
};

export default LocationPage;
