'use client'
import React, { useEffect, useState } from 'react'
import { DMSansReg, ProductSansReg, QuandoRegular, SchibstedGroteskMedium } from '../fonts/fonts'

import { Client, Databases, Query } from "appwrite";
import Comment from '@/components/Comment';
const page = () => {
    const [comments, setComments] = useState([])


    useEffect(() => {

        const client = new Client()
            .setEndpoint("https://cloud.appwrite.io/v1")
            .setProject("66be0cff00033a42cfc1")

        const databases = new Databases(client);

        let promise = databases.listDocuments(
            "66be3488001fe9cf9730",
            "66be34bb001404eb60c4",

        );

        promise.then(function (response) {
            const data = response.documents[0].comments
            // console.log(JSON.parse(data));
            setComments(JSON.parse(data))
        }, function (error) {
            console.log(error);
        });

    }, [])

    // console.log(comments);

    return (
        <div className={`${DMSansReg.className} overflow-hidden `}>
            <div className='font-black text-[50px] h-[100px]  bg-inherit'></div>
            <div className='flex bg-inherit'>
                <div className=' w-[200px] bg-inherit z-[1] '></div>
                <div className='flex ml-[200px] bg-[#f8f9fa] bg-inherit rounded-[12px] relative w-full '>
                    <main className=' h-full py-[1.5rem] '>
                        <div className='my-0 mx-auto py-0 px-[3rem] h-full max-w-[1280px] min-w-[900px]'>
                            <ul className='my-[-1.5rem] mx-0 flex flex-col gap-8'>

                                <li className='relative overflow-hidden min-w-[900px] max-w-[1280px] border-2 h-[320px] border-solid border-black   mx-0 '>
                                    <div className='flex-grow-0 flex-shrink-0 basis-auto bg-[#CEFFA5]  px-[2rem] py-[1.5rem]  p-[.75rem]  border-b border-solid border-black'>

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
                                </li>

                                <li className='relative overflow-hidden min-w-[900px] max-w-[1280px] border-2 h-[320px] border-solid border-black   mx-0 my-2 bg-[#FFFBF8]'>

                                    <div className={`${DMSansReg.className} font-normal text-[20px] leading-[1.65rem] tracking-tight  mt-14 mx-4 h-[245px] bg-[#83DCB6] px-10 py-8 `}>
                                        <p className='w-[771px] tracking-[-.01em] text-[#102415] leading-[2.2]'>Seeing 100% placement reports from B-schools, you might assume that it’s worth
                                            pursuing MBA & you will definitely get placed at the end, but the reality is completely
                                            different. It’s time you start thinking and stop falling for not so true placement stats
                                            of B-schools </p></div>
                                </li>

                                <li className={`${QuandoRegular.className} font-normal text-[1.125rem] my-3 leading-[1.4rem] tracking-tight`}>It’s time to understand & rethink by reading these comments</li>

                                {
                                    comments.map((comment) => (<Comment comment={comment} />))
                                }

                                {/* <li className='relative overflow-hidden min-w-[900px] max-w-[1280px] border-2 h-min border-solid border-black   mx-0 pb-3 pr-3  bg-[#FFFBF8]'>
                                    <p className={`${SchibstedGroteskMedium.className} font-normal text-[1.065rem] leading-[2] w-auto tracking-[-.005em] mx-8 py-6 text-[#100C0A]/[.9]`}>

                                        They make you sign a document before placements starts. Which basically says that the placement
                                        team can do whatever the f they want and you agree to it because without it you are debarred <br />
                                        from sitting for placements. Messed up system
                                    </p>
                                </li>
                                <li className='relative overflow-hidden min-w-[900px] max-w-[1280px] border-2 h-min border-solid border-black   mx-0 pb-3 pr-3 bg-[#FFFBF8] mb-6'>
                                    <p className={`${SchibstedGroteskMedium.className} font-normal text-[1.065rem] leading-[2] w-auto tracking-[-.005em] mx-8 py-6 text-[#100C0A]/[.9]`}>

                                        So I know from very close sources that the folks who generally are asked to opt out are those who have
                                        been unable to get any placements even after 2-3 months of attending interviews. These are the last
                                        30% students who cannot really get past the interviews due to skill mismatch or communication skills
                                        gap,  etc. So this kind of opt out message is not forced and is not a pressure tactic. It&apos;s the college saying
                                        I have tried my best to get companies to the college and give you enough opportunities to get through,
                                        but now even I can&apos;t help you since I cannot guarantee more companies in the future since it&apos;s already
                                        2-3 months past the placement start date.
                                    </p>
                                </li> */}

                            </ul>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default page
