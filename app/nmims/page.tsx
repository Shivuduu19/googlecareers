import React from 'react'
import { DMSansReg, ProductSansReg, QuandoRegular, SchibstedGroteskMedium } from '../fonts/fonts'

const page = () => {
    return (
        <div className={`${DMSansReg.className}  `}>
            <div className='font-black text-[50px] h-[100px]  bg-inherit'></div>
            <div className='flex bg-inherit'>
                <div className=' w-[200px] bg-inherit z-[1] '></div>
                <div className='flex ml-[200px] bg-[#f8f9fa] bg-inherit rounded-[12px] relative w-full '>
                    <main className=' h-full py-[1.5rem] '>
                        <div className='my-0 mx-auto py-0 px-[3rem] h-full max-w-[1280px] min-w-[900px]'>
                            <ul className='my-[-1.5rem] mx-0 flex flex-col gap-8'>

                                <li className='relative overflow-hidden min-w-[900px] max-w-[1280px] border-2 h-[320px] border-solid border-black   mx-0 shadow-[0_1px_2px_0px_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,.15)]'>
                                    <div className='flex-grow-0 flex-shrink-0 basis-auto bg-[#A7F9A4]  px-[2rem] py-[1.5rem]  p-[.75rem]  border-b border-solid border-black'>

                                    </div>
                                    <div className='mx-auto  h-full bg-[#FFFFFF]  pt-[1rem] px-[2rem] pb-[1.5rem]'>
                                        <div className=''>
                                            <h2 className={`${QuandoRegular.className} text-[#100C0ACC] text-start text-[1.5rem] leading-[2rem] font-normal tracking-tight my-5  `}>NMIMS Hyderabad asks unplaced students to “opt out” of place...</h2>
                                            <h3 className={`${DMSansReg.className} text-[#100C0ACC]/[.8] font-normal text-[1.3rem] leading-[2] w-[799px] tracking-tight `}>Here’s a post to give you an idea about how many colleges manipulate their placement
                                                statistics to show 100% placements</h3>
                                            <div className='flex gap-4'>

                                                <div className={`${DMSansReg.className} text-start text-[#CFFAAB] px-4 py-1 my-4 bg-[#2D2D2D] w-min whitespace-pre`}>
                                                    {/* <img src={corporateicon} alt='' className='inline-block' /> */}
                                                    b-school</div>
                                                <div className={`${DMSansReg.className} text-start text-[#CFFAAB] px-4 py-1 my-4 bg-[#2D2D2D] w-min whitespace-pre`}>
                                                    {/* <img src={corporateicon} alt='' className='inline-block' /> */}
                                                    placement-stats</div>

                                            </div>
                                        </div>


                                    </div>
                                </li>

                                <li className='relative overflow-hidden min-w-[900px] max-w-[1280px] border-2 h-[320px] border-solid border-black   mx-0 shadow-[0_1px_2px_0px_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,.15)] bg-[#FFFBF8]'>

                                    <div className={`${DMSansReg.className} font-normal text-[20px]  tracking-[.005em] mt-14 mx-4 h-[245px] bg-[#83DCB6] px-8 py-8 leading-[2]`}>Seeing 100% placement reports from B-schools, you might assume that it’s worth
                                        pursuing MBA & you will definitely get placed at the end, but the reality is completely
                                        different. It’s time you start thinking and stop falling for not so true placement stats
                                        of B-schools </div>
                                </li>

                                <li className='bg-green-50 px-3'>It’s time to understand & rethink by reading these comments</li>

                                <li className='relative overflow-hidden min-w-[900px] max-w-[1280px] border-2 h-[168px] border-solid border-black   mx-0 shadow-[0_1px_2px_0px_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,.15)] bg-[#FFFBF8]'>
                                    <p className={`${SchibstedGroteskMedium.className} font-normal text-[1.1rem] leading-[2] w-[783px] tracking-tighter px-6 py-6 text-[#100C0A]`}>

                                        They make you sign a document before placements starts. Which basically says that the placement
                                        team can do whatever the f they want and you agree to it because without it you are debarred
                                        from sitting for placements. Messed up system
                                    </p>
                                </li>
                                <li className='relative overflow-hidden min-w-[900px] max-w-[1280px] border-2 h-[310px] border-solid border-black   mx-0 shadow-[0_1px_2px_0px_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,.15)] bg-[#FFFBF8] mb-6'>
                                    <p className={`${SchibstedGroteskMedium.className} font-normal text-[1.1rem] leading-[2] w-[823px] tracking-[-.045em] px-6 py-6 text-[#100C0A]/[.9]`}>

                                        So I know from very close sources that the folks who generally are asked to opt out are those who have
                                        been unable to get any placements even after 2-3 months of attending interviews. These are the last
                                        30% students who cannot really get past the interviews due to skill mismatch or communication skills
                                        gap,  etc. So this kind of opt out message is not forced and is not a pressure tactic. It&apos;s the college saying
                                        I have tried my best to get companies to the college and give you enough opportunities to get through,
                                        but now even I can&apos;t help you since I cannot guarantee more companies in the future since it&apos;s already
                                        2-3 months past the placement start date.
                                    </p>
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
