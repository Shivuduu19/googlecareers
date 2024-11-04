'use client'
import { SchibstedGroteskMedium } from '@/app/fonts/fonts'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {
    const navitems = [{
        navName: 'Social Proofs',
        path: '/social-proofs'
    },
    {
        navName: 'Jobs Intel',
        path: '/'
    }
        ,
    {
        navName: 'Work Ex Intel',
        path: '/'
    }
        ,
    {
        navName: 'Internshala Insights',
        path: '/'
    },
    {
        navName: 'Wisdom Watch',
        path: '/'
    },
    {
        navName: 'Wise Words',
        path: '/'
    },
    {
        navName: 'Interview Questions',
        path: '/interview-questions'
    }
    ]

    const path = usePathname()
    const parentPath = path.split('/')
    console.log(path.split('/'));
    // if(parentPath[1]===)

    return (
        <div className='w-[240px] h-screen sticky top-0 bg-[#2C2C2C]  opacity-[1] z-[5] '>
            <div className='mt-28 flex w-full items-start px-3 flex-col gap-6'>
                {
                    navitems.map((navitem, index) =>
                        <Link href={navitem.path} className={`${SchibstedGroteskMedium.className} font-normal text-[1.0625rem] leading-[1.5] ${'/' + parentPath[1] === navitem.path ? 'bg-[#83DCB6] text-[#242622]' : 'text-[#CFFAAB]'}   w-[209px] whitespace-pre`}>
                            <p className='pl-3 my-2'>
                                {navitem.navName}
                            </p>
                        </Link >
                    )
                }
            </div>
        </div>
    )
}

export default Sidebar
