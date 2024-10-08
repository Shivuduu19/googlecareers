import React from 'react'
import { DMSansReg, ProductSansReg, QuandoRegular, SchibstedGroteskMedium } from '../fonts/fonts'
import Image from 'next/image'

const page = () => {
    return (
        <div className={`${DMSansReg.className}  `}>
            <div className='font-black text-[50px] h-[100px]  bg-inherit'></div>
            <div className='flex bg-inherit'>
                <div className=' w-[200px] bg-inherit z-[1] '></div>
                <div className='flex ml-[200px] bg-[#f8f9fa] bg-inherit rounded-[12px] relative w-full '>
                    <main className=' h-full py-[1.5rem] '>
                        <div className='my-0 mx-auto py-0 px-[3rem] h-full max-w-[1280px] min-w-[900px]'>
                            <ul className='my-[-1.5rem] mx-0 flex flex-col gap-12'>
                                <a href="/virtusa">
                                    <li className='relative overflow-hidden min-w-[900px] max-w-[1280px] border-2 h-[320px] border-solid border-black  my-[1.5rem] mx-0 '>
                                        <div className='flex-grow-0 flex-shrink-0 basis-auto bg-[#A7F9A4]  px-[2rem] py-[1.5rem]  p-[.75rem]  border-b-2 border-solid border-black'>

                                        </div>
                                        <div className='mx-auto  h-full bg-[#FFFBF8]  pt-[1rem] px-[2rem] '>
                                            <div className=''>
                                                <h2 className={`${QuandoRegular.className} text-[#100C0ACC] text-start text-[1.5rem] leading-[2rem] font-normal tracking-tight my-5  `}>Virtusa&apos;s Broken Promises:Our Struggle and Plea for Justice</h2>
                                                <h3 className={`${DMSansReg.className} text-[#100C0ACC]/[.8] font-normal text-[1.3rem] leading-[2] tracking-tight w-[766px] `}>I&apos;m part of the 2023 batch that Virtusa hired during campus placements. They
                                                    recruited a ton of freshers from all over India, and like most colleges, once you&apos;re...</h3>
                                                <div className='flex gap-4'>

                                                    <div className={`${DMSansReg.className} text-start text-[#CFFAAB] px-4 py-1 my-4 bg-[#2D2D2D] w-min whitespace-pre`}>
                                                        {/* <img src={corporateicon} alt='' className='inline-block' /> */}
                                                        oncampus</div>
                                                    <div className={`${DMSansReg.className} text-start text-[#CFFAAB] px-4 py-1 my-4 bg-[#2D2D2D] w-min whitespace-pre`}>
                                                        {/* <img src={corporateicon} alt='' className='inline-block' /> */}
                                                        offer</div>
                                                    <div className={`${DMSansReg.className} text-start text-[#CFFAAB] px-4 py-1 my-4 bg-[#2D2D2D] w-min whitespace-pre`}>
                                                        {/* <img src={corporateicon} alt='' className='inline-block' /> */}
                                                        certification</div>
                                                </div>
                                            </div>


                                        </div>
                                        {/* <div className='absolute top-[40px] right-[62px]'>
                  <img src={bookmark} alt='' />
                </div> */}
                                    </li>

                                </a>


                                <a href="/nmims" target='_blank'>
                                    <li className='relative border-2 min-w-[900px] max-w-[1280px] h-[320px] border-solid border-black  overflow-hidden my-[1.5rem] mx-0 '>
                                        <div className='flex-grow-0 flex-shrink-0 basis-auto bg-[#CEFFA5]  px-[2rem] py-[1.5rem]  p-[.75rem]  border-b-2 border-solid border-black'>

                                        </div>
                                        <div className='mx-auto  h-full bg-[#FFFBF8]  pt-[1rem] px-[2rem] pb-[1.5rem]'>
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
                                        {/* <div className='absolute top-[40px] right-[62px]'>
                  <img src={bookmark} alt='' />
                </div> */}
                                    </li>

                                </a>


                                <a href="/no_coding_bootcamps_wont_place_you_at_a_10_lpa" target='_blank'>
                                    <li className='relative border-2 min-w-[900px] max-w-[1280px] h-[320px] border-solid border-black  overflow-hidden my-[1.5rem] mx-0 '>
                                        <div className='flex-grow-0 flex-shrink-0 basis-auto bg-[#CEFFA5]  px-[2rem] py-[1.5rem]  p-[.75rem]  border-b-2 border-solid border-black'>

                                        </div>
                                        <div className='mx-auto  h-full bg-[#FFFBF8]  pt-[1rem] px-[2rem] pb-[1.5rem]'>
                                            <div className=''>
                                                <h2 className={`${QuandoRegular.className} text-[#100C0ACC] text-start text-[1.5rem] leading-[2rem] font-normal tracking-tight my-5  `}>No, Coding Bootcamps won't place you at a 10 LPA package and...</h2>
                                                <h3 className={`${DMSansReg.className} text-[#100C0ACC]/[.8] font-normal text-[1.3rem] leading-[2] w-[799px] tracking-tight `}>I joined a coding bootcamp 1 year back as I was interested in big data, coding and well, money!

                                                    Here are the promises they made us:</h3>
                                                <div className='flex gap-4'>

                                                    <div className={`${DMSansReg.className} text-start text-[#CFFAAB] px-4 py-1 my-4 bg-[#2D2D2D] w-min whitespace-pre`}>
                                                        {/* <img src={corporateicon} alt='' className='inline-block' /> */}
                                                        bootcamp</div>
                                                    <div className={`${DMSansReg.className} text-start text-[#CFFAAB] px-4 py-1 my-4 bg-[#2D2D2D] w-min whitespace-pre`}>
                                                        {/* <img src={corporateicon} alt='' className='inline-block' /> */}
                                                        reality</div>

                                                </div>
                                            </div>


                                        </div>
                                        {/* <div className='absolute top-[40px] right-[62px]'>
                  <img src={bookmark} alt='' />
                </div> */}
                                    </li>

                                </a>

                                <a href="/this_guy_striver_has_scammed_so_many_people_with" target='_blank'>
                                    <li className='relative border-2 min-w-[900px] max-w-[1280px] h-[320px] border-solid border-black  overflow-hidden my-[1.5rem] mx-0 '>
                                        <div className='flex-grow-0 flex-shrink-0 basis-auto bg-[#CEFFA5]  px-[2rem] py-[1.5rem]  p-[.75rem]  border-b-2 border-solid border-black'>

                                        </div>
                                        <div className='mx-auto  h-full bg-[#FFFBF8]  pt-[1rem] px-[2rem] pb-[1.5rem]'>
                                            <div className=''>
                                                <h2 className={`${QuandoRegular.className} text-[#100C0ACC] text-start text-[1.5rem] leading-[2rem] font-normal tracking-tight my-5  `}>this guy striver has scammed so many people with TUF+...</h2>
                                                {/* <Image src={ } alt=''/> */}

                                                <h3 className={`${DMSansReg.className} text-[#100C0ACC]/[.8] font-normal text-[1.3rem] leading-[2] w-[799px] tracking-tight `}>i noticed that the problem sets and questions available in tuf+ are the same as his youtube free content...no videos explaining hashing and queues .</h3>
                                                <div className='flex gap-4'>

                                                    <div className={`${DMSansReg.className} text-start text-[#CFFAAB] px-4 py-1 my-4 bg-[#2D2D2D] w-min whitespace-pre`}>
                                                        {/* <img src={corporateicon} alt='' className='inline-block' /> */}
                                                        bootcamp</div>
                                                    <div className={`${DMSansReg.className} text-start text-[#CFFAAB] px-4 py-1 my-4 bg-[#2D2D2D] w-min whitespace-pre`}>
                                                        {/* <img src={corporateicon} alt='' className='inline-block' /> */}
                                                        reality
                                                    </div>

                                                </div>
                                            </div>


                                        </div>
                                        {/* <div className='absolute top-[40px] right-[62px]'>
                  <img src={bookmark} alt='' />
                </div> */}
                                    </li>

                                </a>



                                <a href="/got_scammed_by_tuf_disappointedsaw_a_lot_of" target='_blank'>
                                    <li className='relative border-2 min-w-[900px] max-w-[1280px] h-[320px] border-solid border-black  overflow-hidden my-[1.5rem] mx-0 '>
                                        <div className='flex-grow-0 flex-shrink-0 basis-auto bg-[#CEFFA5]  px-[2rem] py-[1.5rem]  p-[.75rem]  border-b-2 border-solid border-black'>

                                        </div>
                                        <div className='mx-auto  h-full bg-[#FFFBF8]  pt-[1rem] px-[2rem] pb-[1.5rem]'>
                                            <div className=''>
                                                <h2 className={`${QuandoRegular.className} text-[#100C0ACC] text-start text-[1.5rem] leading-[2rem] font-normal tracking-tight my-5  `}>got scammed by TUF+ ..disappointed...saw a lot of comments like this...</h2>
                                                {/* <Image src={ } alt=''/> */}

                                                {/* <h3 className={`${DMSansReg.className} text-[#100C0ACC]/[.8] font-normal text-[1.3rem] leading-[2] w-[799px] tracking-tight `}>i noticed that the problem sets and questions available in tuf+ are the same as his youtube free content...no videos explaining hashing and queues .</h3> */}
                                                <div className='flex gap-4'>

                                                    <div className={`${DMSansReg.className} text-start text-[#CFFAAB] px-4 py-1 my-4 bg-[#2D2D2D] w-min whitespace-pre`}>
                                                        {/* <img src={corporateicon} alt='' className='inline-block' /> */}
                                                        bootcamp</div>
                                                    <div className={`${DMSansReg.className} text-start text-[#CFFAAB] px-4 py-1 my-4 bg-[#2D2D2D] w-min whitespace-pre`}>
                                                        {/* <img src={corporateicon} alt='' className='inline-block' /> */}
                                                        reality
                                                    </div>

                                                </div>
                                            </div>


                                        </div>
                                        {/* <div className='absolute top-[40px] right-[62px]'>
                  <img src={bookmark} alt='' />
                </div> */}
                                    </li>

                                </a>

                            </ul>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default page
