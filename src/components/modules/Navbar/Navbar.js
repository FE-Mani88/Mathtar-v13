'use client'
import React, { useState, useEffect } from 'react'
import { LogIn, User, Telescope, Search, Flame, Timer, Brain, Wifi, AlignJustify, ChevronUp, ChevronLeft, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import SideBar from '@/components/modules/SideBar/SideBar'

export default function Header({ isUserRegistered, mainUser }) {
    const [isDark, setIsDark] = useState(true);
    const [isSideBarActive, setIsSideBarActive] = useState(false)

    console.log('NMQK *& => ', mainUser);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light')
        }
    }, [isDark]);


    const [mainUserDetails, setMainUserDetails] = useState(mainUser)


    return (
        <>
            <header className="c307p cvtc3 c0ayg" >
                <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
                <div className={`cbl28 c0g2c coaq6 cb0ik ${isUserRegistered ? ' flex justify-end items-center' : null}`}>
                    <div className={`chip0 cglp6 c4mnq cd10w cdoit fexample ${isUserRegistered ? ' flex justify-between gap-[800px]' : null}`}>
                        <div className="cosxg cveoo hidden ">
                            <Link className="cprq6 " href="/" aria-label="Cruip">
                                <svg className="cxofs cnujf" viewBox="0 0 32 32">
                                    <defs>
                                        <radialGradient cx="50%" cy="89.845%" fx="50%" fy="89.845%" r="108.567%"
                                            gradientTransform="matrix(-.00915 -.82755 .99996 -.00757 -.394 1.319)"
                                            id="logo1-b">
                                            <stop stopColor="#3B82F6" stopOpacity=".64" offset="0%"></stop>
                                            <stop stopColor="#F472B6" stopOpacity=".876" offset="100%"></stop>
                                        </radialGradient>
                                        <radialGradient cx="50%" cy="89.845%" fx="50%" fy="89.845%" r="108.567%"
                                            gradientTransform="matrix(-.00915 -.82755 .99996 -.00757 -.394 1.319)"
                                            id="logo1-d">
                                            <stop stopColor="#3B82F6" stopOpacity=".64" offset="0%"></stop>
                                            <stop stopColor="#D375C2" stopOpacity=".833" offset="50.358%"></stop>
                                            <stop stopColor="#FBCFE8" stopOpacity=".876" offset="100%"></stop>
                                        </radialGradient>
                                        <path
                                            d="M12 32c8-6.915 12-12.582 12-17 0-6.627-5.373-12-12-12S0 8.373 0 15c0 4.418 4 10.085 12 17Z"
                                            id="logo1-a"></path>
                                        <path
                                            d="M20 29c8-6.915 12-12.582 12-17 0-6.627-5.373-12-12-12S8 5.373 8 12c0 4.418 4 10.085 12 17Z"
                                            id="logo1-c"></path>
                                    </defs>
                                    <g fill="none" fillRule="evenodd">
                                        <use fill="url(#logo1-b)" opacity=".64" transform="matrix(1 0 0 -1 0 35)"
                                            href="#logo1-a"></use>
                                        <use fill="url(#logo1-d)" opacity=".961" href="#logo1-c"></use>
                                    </g>
                                </svg>
                            </Link>
                        </div>

                        <nav className="chip0 cxgjn flex items-center">
                            <ul className={`chip0 cxgjn cutr6 c4mnq cbv5p gap-x-3 ${isUserRegistered ? '!hidden sm:!flex' : null}`}>
                                {isUserRegistered ? (
                                    <>
                                        <li className='c8h5l text-lg border-bottom-1 text-black dark:text-gray-200 flex items-center cursor-pointer !transation-all duration-150 hover:text-gray-400'>
                                            <ChevronDown className='w-5 h-5' />
                                            <Link href='/dashboard'>
                                                <span>داشبورد</span>
                                            </Link>
                                        </li>
                                        <li className='c8h5l text-lg border-bottom-1 text-black dark:text-gray-200 flex items-center cursor-pointer !transation-all duration-150 hover:text-gray-400'>
                                            <ChevronDown className='w-5 h-5' />
                                            <Link href='/select'>
                                                <span>آزمون ها</span>
                                            </Link>
                                        </li>
                                        <li className='c8h5l text-lg border-bottom-1 text-black dark:text-gray-200 flex items-center cursor-pointer !transation-all duration-150 hover:text-gray-400'>
                                            <ChevronDown className='w-5 h-5' />
                                            <Link href='/'>
                                                <span>صفحه اصلی</span>
                                            </Link>
                                        </li>
                                        <li className='c8h5l'>
                                            <img className='w-28 sm:w-60 mt-2' src="/images/mathyarLogo.png" alt="#" />
                                        </li>
                                    </>

                                ) : (
                                    <>
                                        <li className='c8h5l'>
                                            <Link className="sm:!px-4 !px-2 chip0 c4mnq c5mpl chs2t cazq3 ckdyj cdm1x c6m7s ckwz7 cysah cua40 make-btn"
                                                href="/register">
                                                <p className='txt-margin !text-[11.1px] sm:!text-[18px] '> ساخت اکانت  </p>
                                                <User />
                                            </Link>
                                        </li>
                                        <li className="c8h5l">
                                            <Link className="sm:!px-4 !px-2 !text-[11.2px] sm:!text-[18px] c2pi2 c0ayg c4wey cl6ef cf4pm cqbpd cxmkl c4aul c76qn" href="login">
                                                ورود به اکانت <span className="cfe40 cr1tk c56im cv73b c6m7s ckwz7 ccx8x"><LogIn /></span>
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                            {isUserRegistered ? (
                                <div className='sm:hidden' onClick={() => {
                                    if (isSideBarActive) {
                                        setIsSideBarActive(false)
                                        console.log('CLOSE')
                                    } else {
                                        setIsSideBarActive(true)
                                        console.log('OPEN')
                                    }
                                }}>
                                    <AlignJustify id='navbar-menu-icon' style={{ color: '#838e9d', cursor: 'pointer' }} />
                                </div>
                            ) : null}
                        </nav>


                    </div>
                </div>

                {isSideBarActive ? <SideBar mainUser={mainUserDetails} /> : null}
            </header >
        </>
    )
}
