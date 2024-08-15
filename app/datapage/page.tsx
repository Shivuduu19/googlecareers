import React from 'react'
import { DMSansReg, ProductSansMed, QuandoRegular, SchibstedGroteskMedium } from '../fonts/fonts'

const page = () => {
    return (
        <div className={`${DMSansReg.className}  `}>
            <div className='font-black text-[50px] h-[100px]  bg-inherit'></div>
            <div className='flex bg-inherit'>
                <div className=' w-[200px] bg-inherit z-[1] '></div>
                <div className='flex ml-[200px] bg-[#f8f9fa] bg-inherit rounded-[12px] relative w-full '>
                    <main className=' h-full py-[1.5rem] '>
                        <div className='my-0 mx-auto py-0 px-[3rem] h-full max-w-[1280px] min-w-[900px]'>
                            <ul className='my-[-1.5rem] mx-0'>
                                <li className='relative border border-solid bg-[#FFFFFF] border-black  my-[1.5rem] mx-0 shadow-[0_1px_2px_0px_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,.15)]'>
                                    <div className='flex-grow-0  flex-shrink-0 basis-auto   px-[2rem] py-[1.5rem]  p-[.75rem]  '>
                                        <h2 className={`${QuandoRegular.className} text-start leading-[2rem] font-normal text-[#202124] text-[1.3rem] `}>Why Studying In America Will Kill Your Career | H1B Trap: Explained ...</h2>
                                    </div>
                                    <div className='mx-auto  h-full   px-[2rem] pb-[1.5rem]'>
                                        <div className=''>

                                            <div className={`font-DmSans text-start text-[#CFFAAB] px-4 py-1  bg-[#2D2D2D] w-min whitespace-pre`}>
                                                {/* <img src={corporateicon} alt='' className='inline-block' /> */}
                                                Aevy Tv</div>
                                        </div>
                                        <div className={` ${SchibstedGroteskMedium.className} text-[#100C0ACC]/[.8] text-start text-[1.1rem] leading-[2rem] tracking-tight py-[1rem] px-[2rem] mt-[1rem] mx-[-2rem] mb-0 text-[#202124] `}>
                                            <p>If you're thinking of going to America for work or a master's degree, here's why you might want to
                                                think again. This video explains the risks of pursuing a ....</p>
                                        </div>



                                    </div>
                                    {/* <div className='absolute top-[40px] right-[62px]'>
                  <img src={bookmark} alt='' />
                </div> */}
                                </li>
                            </ul>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default page
