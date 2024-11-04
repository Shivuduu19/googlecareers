import React from 'react'
import { DMSansReg, QuandoRegular, SchibstedGroteskMedium, SchibstedGroteskregular } from '../fonts/fonts'
import Link from 'next/link'
import amazon from '@/public/interviewqstns/Amazon 1.png'
import google from '@/public/interviewqstns/Google 1.png'
import meta from '@/public/interviewqstns/Meta 1.png'
import Image from 'next/image'
const page = () => {
    return (
        <div className={`${DMSansReg.className}  `}>
            <div className='font-black text-[50px] h-[100px]  bg-inherit'></div>
            <div className='flex bg-inherit'>
                {/* <div className=' w-[200px] bg-inherit z-[1] '></div> */}
                <div className='flex  bg-[#f8f9fa] bg-inherit rounded-[12px] relative w-full '>
                    <main className=' h-full py-[1.5rem] '>
                        <div className='my-0 mx-auto py-0 px-[3rem] h-full max-w-[1000px] min-w-[900px]'>
                            <ul className='my-[-1.5rem] mx-0 flex flex-col gap-12 bg-[#FFFBF8]'>
                                {/* <Link href="/social-proofs/nmims" target='_blank' className='contents'> */}
                                <li className='relative border-2 min-w-[900px] max-w-[1000px] min-h-[320px] border-solid border-black  overflow-hidden  mx-0 '>
                                    <div className='flex-grow-0 flex-shrink-0 basis-auto bg-[#CEFFA5]  px-[2rem] py-[1.5rem]  p-[.75rem]  border-b-2 border-solid border-black'>

                                    </div>

                                    <div className='mx-auto  h-full bg-[#FFFBF8]  pt-[1rem] px-[2rem] pb-[2.5rem]'>
                                        <div className='px-1 flex flex-col gap-1'>
                                            <h2 className={`${SchibstedGroteskregular.className} text-[#242622]/[.9] text-start text-[1.5rem] leading-[1.5rem] font-semibold tracking-[-.005em] my-5 w-[513px] `}>In one minute, describe your work experience</h2>

                                            <div className=' gap-2'>
                                                <Image src={meta} alt='' className=' mx-1 inline-block' />
                                                <Image src={google} alt='' className=' mx-1 inline-block' />
                                                <Image src={amazon} alt='' width={30} height={30} className='inline-block ' />
                                            </div>
                                            <p className={`${SchibstedGroteskMedium.className} font-medium text-[1rem] text-[#0867DF] tracking-[-.02em] mt-6`}>This question has been asked at other companies in different words </p>
                                        </div>

                                        <div className={`${SchibstedGroteskregular.className} flex flex-col mt-3 text-[#242622] w-full gap-1`}>

                                            <div className='px-1 py-2 border-b w-full border-[#D7D7D7]'>
                                                <p className='text-[1.125rem] leading-[1.5] tracking-tight font-normal'>Give a brief description of your work experience</p>
                                            </div>
                                            <div className='px-1 py-4 border-b w-full border-[#D7D7D7]'>
                                                <p className='text-[1.125rem] leading-[1.5] tracking-tight font-normal w-[738px]'>How would you summarize your professional experience, and what would you highlight as
                                                    your most notable achievements?</p>
                                            </div>
                                            <div className='px-1 py-4 border-b w-full border-[#D7D7D7]'>
                                                <p className='text-[1.125rem] leading-[1.5] tracking-tight font-normal w-[801px]'>What have been your most impactful roles, and what skills have you developed in those positions?</p>
                                            </div>

                                        </div>



                                    </div>
                                    {/* <div className='absolute top-[40px] right-[62px]'>
                  <img src={bookmark} alt='' />
                </div> */}
                                </li>

                                {/* </Link> */}


                            </ul>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default page
