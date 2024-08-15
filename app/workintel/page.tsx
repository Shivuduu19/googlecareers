import React from 'react'
import { DMSansReg, QuandoRegular } from '../fonts/fonts'

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
                                <li className='relative border border-solid border-black  my-[1.5rem] mx-0 shadow-[0_1px_2px_0px_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,.15)]'>
                                    {/* <div className='grid grid-rows-[repeat(3,min-content)] grid-cols-[repeat(3,min-content)]'>
                  <div></div>
                </div> */}
                                    <div className='flex flex-col pt-10  text-[#100C0A] px-10 bg-[#FFFFFF] h-[800px]' >
                                        <div className='flex   '>
                                            <div className='w-[400px] flex self-start pb-6'>

                                                <div className={` ${QuandoRegular.className} text-[#100C0A] font-normal text-[1rem] leading-[1.3rem] py-4`}>SDE I - Python Developer</div>
                                            </div>
                                            <div className='self-start flex py-4 text-[18px] leading-[1.45rem] w-[243px]'>Panasonic</div>

                                            <div className='bg-[#ACFAA8] self-center h-[45px] w-[105px] px-2 py-2 flex justify-center'>0-3 yoe</div>
                                        </div>

                                        <div className='flex  '>
                                            <div className='w-[400px] flex justify-start pb-6'>
                                                <div className={` ${QuandoRegular.className} w-[331px] px-0   text-[#100C0A] font-normal text-[1rem] leading-[1.3rem] py-4`}>Junior Merchandise Designer(Fashion
                                                    Designer)</div>
                                            </div>
                                            <div className=' flex self-center py-4 text-[18px] leading-[1.45rem] w-[243px]'>K.S.E. INC</div>
                                            <div className='bg-[#ACFAA8] flex justify-center self-center h-[45px] w-[105px] px-2 py-2'>1-4 yoe</div>

                                        </div>


                                        <div className='flex  '>
                                            <div className='w-[400px] flex pb-6'>
                                                <div className={` ${QuandoRegular.className} text-[1rem] leading-[1.3rem] w-[307px] py-4`}>Customer Service Process Associate
                                                    (Voice-English)</div>
                                            </div>
                                            <div className=' flex py-4 self-center text-[18px] leading-[1.45rem] text-[#100C0A] font-normal w-[243px]'>Genpact India Private Limited</div>
                                            <div className='bg-[#ACFAA8] self-center h-[45px] w-[105px] px-2 py-2 flex justify-center'>0-1 yoe</div>

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
