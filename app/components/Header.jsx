"use client"

import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import { Tangerine } from 'next/font/google';

const tangerine = Tangerine({
  weight: '400',
  subsets: ['latin']
})

const Header = () => {

  return (
    <div className='top-0'>
      <div className="navbar w-screen bg-[#ca8d8d]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#633535"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link
                  activeClass="active"
                  to="AboutPage"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className='text-[#633535]'
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="ProjectPage"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className='text-[#633535]'
                >
                  Location
                </Link>
              </li>
            </ul>
          </div>
          <Link
            activeClass="active"
            to="HomePage"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <h1 className='text-3xl font-medium cursor-pointer ml-4 text-[#633535]'><span className={tangerine.className} >SD</span></h1>
          </Link>
        </div>
        <div className="navbar-end me-5 hidden lg:flex">
          <ul className="flex gap-3 px-1">
            <li>
              <Link
                activeClass="active"
                to="AboutPage"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='text-xl btn btn-ghost capitalize text-[#633535] font-normal hover:bg-inherit'
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="LocationPage"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='text-xl btn btn-ghost capitalize text-[#633535] font-normal hover:bg-inherit'
              >
                Location
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header