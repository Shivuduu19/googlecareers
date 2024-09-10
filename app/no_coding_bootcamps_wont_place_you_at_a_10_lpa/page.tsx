'use client'
import React, { useEffect, useState } from 'react'
import { DMSansReg, ProductSansReg, QuandoRegular, SchibstedGroteskMedium } from '../fonts/fonts'

import { Client, Databases, Query } from "appwrite";
import Comment from '@/components/Comment';
const page = () => {
    // const [comments, setComments] = useState([])


    // useEffect(() => {

    //     const client = new Client()
    //         .setEndpoint("https://cloud.appwrite.io/v1")
    //         .setProject("66be0cff00033a42cfc1")

    //     const databases = new Databases(client);

    //     let promise = databases.listDocuments(
    //         "66be3488001fe9cf9730",
    //         "66be34bb001404eb60c4",

    //     );

    //     promise.then(function (response) {
    //         const data = response.documents[0].comments
    //         // console.log(JSON.parse(data));
    //         setComments(JSON.parse(data))
    //     }, function (error) {
    //         console.log(error);
    //     });

    // }, [])


    const comments = [
        {
            id: 1,
            text: `These newton school, Coding ninja, Coding blocks, Scaler, Masai School, Upgrad, Bhaiyas and Didis ke course boot camps are the biggest scammers. Never fall for them.`,
            children: [
                {
                    id: 2,
                    text: 'I think Masai and one more company has some pay after placement things they have copied from US startup where they place you first and then ask you to pay, but it still has all the issues mentioned above (same for Newton and Scaler, have contacted all students of these schools on linked in).'
                },
                {
                    id: 3,
                    text: 'Cuvette Guaranteed Placements Program - A complete scam, Stay away from it - I lost my parents hard earned money 😶'
                }
            ]
        },
        {
            id: 4,
            text: `i have seen 100+ user profiles on LinkedIn of 'aspiring data analysts' who have done bootcamp from scalar, codebasics, odin school etc`,
            //         children: [
            //             {
            //                 id: 3,
            //                 text: `Agree to everything. But then that clearly means that they don't/can't provide 100% placements.  Which is the 
            // primary reason this "opt-out" scheme is being implemented in the first place`,
            //                 children: [
            //                     {
            //                         id: 4,
            //                         text: `Oh yes that's true. They take in a lot of people but do not have true 100% placements. 100%  is only after 
            // the optouts.`,
            //                     },
            //                 ],
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
Wish people bashed colleges and schools also the same way you do coding bootcamps. Bootcamps came into existence as a problem created by the prior ones`
        },
        {
            id: 6,
            text: `<p>The problem is people don't do enough research before getting into these scams. Obviously bootcamps are at fault but as potential consumers of the product we are equally responsible for this.</p><p>A scaler saleswoman called me once. She started by telling me about their testimonials and about their teachers and mentors. Then she slowly shifted to telling me how I don't know anything and how I will be irrelevant in a few years. She told me I can even get an offer from Amazon and the thing is I was already working at Amazon but again I played along. I understood how she was trying to cut an angle here by playing on the fear of students. After some time I asked her if there is so much money in the tech industry and if it is this easy to get into software engineering then why is she not leveraging the amazing course / track that Scaler is providing 😂😂. This really pissed her off and then she turned too unprofessional.</p><p>So my point is do your research guys, it is your / your parents hard earned money. If you are planning to enter into the software industry you are expected to be book smart and street smart at the same time.</p>`
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

    // console.log(comments);

    return (
        <div className={`${DMSansReg.className} overflow-hidden `}>
            <div className='font-black text-[50px] min-h-[100px]  bg-inherit'></div>
            <div className='flex bg-inherit'>
                <div className=' w-[200px] bg-inherit z-[1] '></div>
                <div className='flex ml-[200px] bg-[#f8f9fa] bg-inherit rounded-[12px] relative w-full '>
                    <main className=' h-full py-[1.5rem] '>
                        <div className='my-0 mx-auto py-0 px-[3rem] h-full max-w-[1000px] min-w-[900px]'>
                            <ul className='my-[-1.5rem] mx-0 flex flex-col gap-8'>

                                <li className='relative overflow-hidden min-w-[900px] max-w-[1000px] border-[2.5px] min-h-[320px] border-solid border-black   mx-0 '>
                                    <div className='flex-grow-0 flex-shrink-0 basis-auto bg-[#CEFFA5]  px-[2rem] pt-[1.5rem]  p-[.75rem] pb-0 border-b-[2.5px] border-solid border-black'>
                                        <h2 className={`${QuandoRegular.className} text-[#100C0ACC] text-start text-[1.4rem] leading-[2.75rem] font-normal tracking-tight my-5  `}>No, Coding Bootcamps won't place you at a 10 LPA package and the placements ARE NOT GUARANTEED, here are the things you should know</h2>
                                    </div>
                                    <div className='mx-auto pl-8 pr-20 h-full bg-[#FFFBF8] [&_p]:text-[1.125rem]  [&>*]:text-[#100C0ACC]/[.8] [&_p]:tracking-normal  pt-[1rem] px-[2rem] pb-[1.5rem]'>
                                        <div className=''>

                                            {/* <h3 className={`${DMSansReg.className} text-[#100C0ACC]/[.8] font-normal text-[1.3rem] leading-[2] w-[799px] tracking-tight `}>I joined a coding bootcamp 1 year back as I was interested in big data, coding and well, money!

                                                Here are the promises they made us:</h3> */}
                                            <div className='flex flex-col gap-3'>
                                                <p className={`${DMSansReg.className} text-[#100C0ACC]/[.8] font-normal text-[1.125rem]  leading-[2] w-[799px] mt-[12px] `}>I joined a coding bootcamp 1 year back as I was interested in big data, coding and well, money!</p><p>Here are the promises they made us:</p>
                                                <ol className='list-decimal flex flex-col gap-[2px] pl-2 mt-3 ml-7 text-[#100C0ACC]/[.8]'>
                                                    <li className=''>
                                                        <p>The Average package is 10 LPA</p>
                                                    </li>
                                                    <li><p>Markets are picking up and more offers are available in the market now than there were 2023/2022</p></li><li><p>You will be placed in a startup (Zomato, Swiggy, CoinSwitch, Ola, etc.,), I remember seeing some images of tech giants too</p></li><li><p>No Coding background required</p></li><li><p>Many more dreams of how you can travel to USA after 2-3 years in the Industry, settle there, etc, etc.</p></li><li><p>You will be taught by Industry experts in the field &amp; your education would be parallel to that of IIT students</p></li>
                                                </ol>
                                                <p>Now, I did not fall for most of the false promises mentioned above, but I did fall for 1, 2 &amp; 3</p><p>They were lying so flamboyantly that I thought, well there might be some truth to it and I joined, 1 year later, here is the reality.</p>

                                                <ol className='list-decimal pl-2 flex flex-col gap-[2px]  mt-3 ml-7'>
                                                    <li><p>The average package they mentioned is far lower than the highest packages we are getting now, highest package hovers somewhere around 3-4 LPA and the packages which are mentioned as 5-6 LPA's are internships, where you have to work for 6-9 months at 10k-15k and they can fire you right after your internship ends. Now, that's ok if you are incompetent, but it feels more like a way of cost cutting from what I hear. And most importantly, we were told we would be job ready by now, we are not. More abt this below.</p></li><li><p>Markets aren't picking up, that was a lie so bold, that I am surprised they claimed it is.</p></li><li><p>The companies which are hiring are indeed startups but they aren't Zomato, Swiggy or any companies which have some name recognition, few of my friends digged a little bit and these are poorly funded startups where you might not be paid for extended periods of time.</p></li><li><p>Well, coding background helps a lot, people who are not from a coding background won't be job ready by the end of the course. Of course there are outliers (whom they advertise), but the rule is, you likely won't be job ready by the end of the course.</p></li><li><p>The education is substandard. You can get better education and resources on Youtube for free or on Udemy for a fraction of the amount you are paying the bootcamp, take this to the bank. Again, the tutors are usually graduates of colleges or past students of the bootcamp itself. It's a very common practice for all bootcamps to hire it's own graduates, the graduates however lack any experience and the education is substandard as it would be if I imparted it to you. I don't know enough to teach you. Good teachers are an outlier, bad ones are the rule.</p></li>
                                                </ol>
                                                <p>So, in the end, the idea of bootcamp loses all it's allure, you likely won't be placed at a good package if you are placed at all. It's not uncommon for graduates to go 5-6 months without getting a job. You will be charged extremely high amounts of money for a substandard education which is far inferior to content available for free on the internet. Any promises they make and any dreams they carefully curate to you are the exception, not the rule.</p><p>And don't think you will be an exception, I thought this too, but I am not. Life gets to you.</p>
                                            </div>

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
                                    comments.map((comment) => (<Comment comment={comment} />))
                                }
                                {/* <li className='relative overflow-hidden min-w-[900px] max-w-[1280px] border-2 h-[320px] border-solid border-black   mx-0 my-2 bg-[#FFFBF8]'>

                                    <div className={`${DMSansReg.className} font-normal text-[20px] leading-[1.65rem] tracking-tight  mt-14 mx-4 h-[245px] bg-[#83DCB6] px-10 py-8 `}>
                                        <p className='w-[771px] tracking-[-.01em] text-[#102415] leading-[2.2]'>Seeing 100% placement reports from B-schools, you might assume that it’s worth
                                            pursuing MBA & you will definitely get placed at the end, but the reality is completely
                                            different. It’s time you start thinking and stop falling for not so true placement stats
                                            of B-schools </p></div>
                                </li>

                                <li className={`${QuandoRegular.className} font-normal text-[1.125rem] my-3 leading-[1.4rem] tracking-tight`}>It’s time to understand & rethink by reading these comments</li>

                                {
                                    comments.map((comment) => (<Comment comment={comment} />))
                                } */}

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
