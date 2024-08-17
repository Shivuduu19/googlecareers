import React from 'react'
import { DMSansMed, DMSansReg, QuandoRegular } from '../fonts/fonts'

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
                                <li className='relative border-2 border-solid border-black  my-[1.5rem] mx-0 '>
                                    {/* <div className='grid grid-rows-[repeat(3,min-content)] grid-cols-[repeat(3,min-content)]'>
                  <div></div>
                </div> */}
                                    <div className='flex flex-col pt-24 gap-6 text-[#100C0A] px-10 bg-[#FFFBF8] h-[800px]' >
                                        <div className='flex  gap-5 '>
                                            <div className='w-[350px] flex self-start '>

                                                <div className={` ${QuandoRegular.className} text-[#100C0A] font-normal text-[1rem] tracking-tight leading-[2rem] py-4`}>SDE I - Python Developer</div>
                                            </div>
                                            <div className='self-center flex py-4 text-[18px] text-[#141417E5]/[.9] leading-[1.45rem] w-[243px]'>Panasonic</div>

                                            <div className={`${DMSansMed.className} bg-[#ACFAA8] text-[1.25rem] font-medium tracking-tight leading-[1.65rem] self-center h-[45px] w-[102px] px-2 py-2 flex justify-center items-center`}>0-3 yoe</div>
                                        </div>

                                        <div className='flex gap-5 '>
                                            <div className='w-[350px] flex justify-start '>
                                                <div className={` ${QuandoRegular.className} w-[331px] px-0   text-[#100C0A] font-normal tracking-tight text-[1rem] leading-[2rem] py-4`}>Junior Merchandise Designer(Fashion
                                                    Designer)</div>
                                            </div>
                                            <div className=' flex self-center text-[#141417E5]/[.9] py-4 text-[18px] leading-[1.45rem] w-[243px]'>K.S.E. INC</div>
                                            <div className={`${DMSansMed.className} bg-[#ACFAA8]  text-[1.25rem] font-medium tracking-tight leading-[1.65rem] flex justify-center self-center items-center h-[45px] w-[102px] px-2 py-2`}>1-4 yoe</div>

                                        </div>


                                        <div className='flex gap-5 '>
                                            <div className='w-[350px] self-center flex '>
                                                <div className={` ${QuandoRegular.className} text-[1rem] leading-[2rem] w-[307px] tracking-tight py-4`}>Customer Service Process Associate
                                                    (Voice-English)</div>
                                            </div>
                                            <div className=' flex  self-center text-[#141417E5]/[.9] text-[1.125rem] whitespace-pre-wrap leading-[1.45rem] text-[#100C0A] font-normal tracking-tight w-[243px]'>Genpact India Private Limited</div>
                                            <div className={`${DMSansMed.className} bg-[#ACFAA8]  text-[1.25rem] font-medium tracking-tight leading-[1.65rem] self-center h-[45px] w-[102px] px-2 py-2 flex justify-center items-center`}>0-1 yoe</div>

                                        </div>
                                    </div>
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
