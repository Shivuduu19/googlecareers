import React from 'react'
import { DMSansReg, ProductSansReg, QuandoRegular, SchibstedGroteskMedium } from '../../fonts/fonts'
import Comment from '@/components/Comment';
import gotscammed from '@/public/got-scammed-by-tuf-disappointed-saw-a-lot-of-comments-like-v0-7h5u2bgnc0ld1.webp'
import Image from 'next/image';

const page = () => {


    const comments = [

        {
            id: 1,
            text: 'the course is available on utube for free...he is selling the SAME course for 7500 to students..on his platform which is cheappp version of leetcode and has no standing in the industry infront of recruiters..'
        },
        {
            id: 2,
            text: `It was overpriced and overhyped by other influencers. So much marketing and promotion only made me hate it`,

        },
        {
            id: 4,
            text: `TUF+ wasn't a good course to buy to begin with. I watched his video where he explains TUF+ I was like wtf this is so useless why would someone pay so much money YEARLY/MONTHLY when it's pretty much the same thing as TUF lmao. Ig i was right.`,
            //       
            //             },
            //             {
            //                 id: 5, text: `This is nothing new. I know of three other MBA colleges that did something similar with the '23 batch.  I was part of 
            // one. They make you sign a document before placements with unethical rules such as this. The worst thing is the 
            // faculties are in on it. When few students decided to speak up, a meeting was called with the placement faculty 
            // incharge who then proceeded to call the students on stage and humiliated them as well as threatened them of 
            // punishing them by not allowing them to appear for 3 dream companies. Tier 2 and below MBA colleges do anything 
            // to protect the 100% placement stat and also inflate their ctcs by any means necessary.` },
            //         ],
        },
        {
            id: 5,
            text: `
 You either die (stop posting) as a hero (LUV), or live long enough to see yourself become the villain`
        },
        {
            id: 6,
            text: `Honestly, if u got tricked by the (overused) ai doubt assistant and video meeting thing, u deserve to lose that money.`,
            children: [
                {
                    id: 7,
                    text: `what about striver scamming students ?? this is literally a scam.`
                }
            ]
        }
        //     {
        //         id: 6,
        //         text: `Indian colleges are all about placements, they will do anything to make their stats look good. `,
        //     },
        //     {
        //         id: 7,
        //         text: `This is great example that students, aspirants and parents should not blankly look at the brochure but take feedback from
        //  recent graduates as well to get the check of reality.

        // Further, some folks are asking why would students give such a certificate, it's simple when you are under placement 
        // pressure that too with MBA curriculum, you will agree to anything that institutes ask you to do specially regarding 
        // placements.`,
        //     },
        //     {
        //         id: 8,
        //         text: `How is this new? This is a well-known tactic used in all biz colleges across the country where placement isn't 100%, even 
        // the newer IIMs.`,
        //     },
        //     {
        //         id: 9,
        //         text: `MBA colleges have this thing from a long time. Just put “opted out of placements” for people who haven’t got placed. 
        // They have been doing these on their admission brochures. The placement team is formed in the first year itself and people 
        // who are close friends of the placement committee gets the best placement and their CVs are pushed. Similar with the 
        // placement committee. This is the sad reality.`,
        //     }


    ];
    return (
        <div className={`${DMSansReg.className} overflow-hidden `}>
            <div className='font-black text-[50px] min-h-[100px]  bg-inherit'></div>
            <div className='flex bg-inherit'>
                {/* <div className=' w-[200px] bg-inherit z-[1] '></div> */}
                <div className='flex  bg-[#f8f9fa] bg-inherit rounded-[12px] relative w-full '>
                    <main className=' h-full py-[1.5rem] '>
                        <div className='my-0 mx-auto py-0 px-[3rem] h-full max-w-[1000px] min-w-[900px]'>
                            <ul className='my-[-1.5rem] mx-0 flex flex-col gap-8'>

                                <li className='relative overflow-hidden min-w-[900px] max-w-[1000px] border-[2.5px] min-h-[320px] border-solid border-black   mx-0 '>
                                    <div className='flex-grow-0 flex-shrink-0 basis-auto bg-[#CEFFA5]  px-[2rem] pt-[1.5rem]  p-[.75rem] pb-0 border-b-[2.5px] border-solid border-black'>
                                        <h2 className={`${QuandoRegular.className} text-[#100C0ACC] text-start text-[1.4rem] leading-[2.75rem] font-normal tracking-tight my-5  `}>got scammed by TUF+ ..disappointed...saw a lot of comments like this</h2>
                                    </div>
                                    <div className='mx-auto pl-8 pr-20 h-full bg-[#FFFBF8] [&_p]:text-[1.125rem]  [&>*]:text-[#100C0ACC]/[.8] [&_p]:tracking-normal  pt-[1rem] px-[2rem] pb-[1.5rem]'>
                                        <div className='relative'>


                                            <Image src={gotscammed} alt='' width={900} height={500} />

                                            <div className='flex gap-4 mt-3'>

                                                <div className={`${DMSansReg.className} text-start text-[#CFFAAB] px-4 py-1 my-4 bg-[#2D2D2D] w-min whitespace-pre`}>
                                                    {/* <img src={corporateicon} alt='' className='inline-block' /> */}
                                                    bootcamp</div>
                                                <div className={`${DMSansReg.className} text-start text-[#CFFAAB] px-4 py-1 my-4 bg-[#2D2D2D] w-min whitespace-pre`}>
                                                    {/* <img src={corporateicon} alt='' className='inline-block' /> */}
                                                    reality</div>

                                            </div>
                                        </div>


                                    </div>
                                </li>

                                <li className='relative overflow-hidden min-w-[900px] max-w-[1000px] border-[2.5px] h-[320px] border-solid border-black   mx-0 my-2 bg-[#FFFBF8]'>

                                    <div className={`${DMSansReg.className} font-normal text-[20px] leading-[1.65rem] tracking-tight  mt-14 mx-4 h-[245px] bg-[#83DCB6] px-10 py-8 `}>
                                        <p className='w-[771px] tracking-[-.01em] text-[#102415] leading-[2.2]'>Seeing 100% placement reports from B-schools, you might assume that it’s worth
                                            pursuing MBA & you will definitely get placed at the end, but the reality is completely
                                            different. It’s time you start thinking and stop falling for not so true placement stats
                                            of B-schools </p></div>
                                </li>



                                <li className={`${QuandoRegular.className} font-normal text-[1.125rem] my-3 leading-[1.4rem] max-w-[1000px] tracking-tight`}>It’s time to understand & rethink by reading these comments</li>

                                {
                                    comments.map((comment) => (<Comment comment={comment} lastone={false} hascorner={false} />))
                                }

                            </ul>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default page
