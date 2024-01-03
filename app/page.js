import AboutPage from '@/app/components/AboutPage'
import NamePage from '@/app/components/NamePage'
import ProjectPage from '@/app/components/ProjectPage'
import React from 'react'
import LocationPage from './components/LocationPage'

const page = () => {
  return (
    <div className='w-screen'>
      <NamePage />
      <AboutPage />
      <LocationPage />
    </div>
  )
}

export default page