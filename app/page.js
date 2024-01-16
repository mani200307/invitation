import AboutPage from '@/app/components/AboutPage'
import NamePage from '@/app/components/NamePage'
import React from 'react'
import LocationPage from './components/LocationPage'

import dynamic from 'next/dynamic';

const CountdownPage = dynamic(() => import('./components/CountdownPage'), {
  loading: () => <p>Loading...</p>, // Optional loading component
  ssr: false, // Disable server-side rendering
});

const page = () => {
  return (
    <div className='w-screen'>
      <NamePage />
      <CountdownPage />
      <AboutPage />
      <LocationPage />
    </div>
  )
}

export default page