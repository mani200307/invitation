import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const LocationPage = () => {
    return (
        <div id='LocationPage' className='flex flex-col pt-16 justify-center gap-4 items-center'>
            <h1 className='text-3xl text-[#2F3C7E] gap-3 flex items-center justify-center font-semibold mb-12'><LocationOnIcon className='w-8 h-8' /> Location</h1>
            <div className='flex bg-[#4731d4d3] w-fit rounded-lg shadow-md p-4'>
                <h1 className='text-center text-[#FFFFFF]'>Simbu Meera Mahal, Vedaranyam</h1>
            </div>
            <div className='flex flex-col w-fit bg-green-500 shadow-lg rounded-lg border-[1px] p-4 items-center gap-12'>
                <a href='https://maps.app.goo.gl/KtMDpWtgNChVwaSZA'><h1 className='text-xl gap-2 flex items-center justify-center text-[#FFFFFF] text-center'><LocationOnIcon />Open In Map</h1></a>
            </div>
            <div>
                <h1 className='text-center mt-10 flex gap-2 font-semibold text-base my-5'>Done by  <a className='text-[#4656a8]' href='https://www.linkedin.com/in/manikandan-t-1174a2223/'>Manikandan</a></h1>
            </div>
        </div>
    );
};

export default LocationPage;
