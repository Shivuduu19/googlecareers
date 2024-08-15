import React from 'react'
import { DMSansReg, ProductSansMed, ProductSansReg, QuandoRegular, SchibstedGroteskMedium } from '@/app/fonts/fonts'

const page = () => {
    const cards = [
        {
            "id": 1,
            "Job Title": "SDE 1- Growth",
            "Company Name": "Urban Company",
            "Job Intel": "<h4>Requirements:</h4><ul><li><p>0-2 years of experience in the industry <strong><em>solving complex problems</em></strong> from scratch</p></li><li><p>Ability to build scalable, sustainable, reliable and secure products based on <strong>past experience</strong></p></li><li><p>Ability to bring new practices, architectural choices and new initiatives onto the table to make the overall tech stack more robust</p></li><li><p>Ability to own the technical road map for systems/components</p></li></ul><p></p>"
        },
        {
            "id": 2,
            "Job Title": "AI/ML Research Intern",
            "Company Name": "SuperKalam",
            "Job Intel": "<h4>Requirements:</h4><ul><li><p><strong>Prior Internship</strong> in AI/ML or <strong>quality projects</strong> done in AI/ML using Python/NodeJS</p></li><li><p>Working knowledge of - LLMs, RAG, vector DBs, etc.</p></li><li><p>Basic software engineering - relational database, understanding of rate limiting, basics of security.</p></li></ul><h4>Responsibilities:</h4><ul><li><p>Running AI experiments, fine tuning</p></li><li><p>Research and implement appropriate approaches from research papers/blogs.</p></li></ul><h4>About the interview:</h4><p>You resume will be shortlisted as per your projects or <strong>prior internship experience</strong>.</p>"
        },
        {
            "id": 3,
            "Job Title": "AI Research Intern",
            "Company Name": "2070 Health",
            "Job Intel": "<p>The AI Research Intern will contribute to our ongoing projects by applying AI &amp; ML algorithms to solve challenging problems in healthcare.</p><h4>Key Responsibilities:</h4><ul><li><p>Assist in designing and implementing machine learning models to analyse large datasets in healthcare, such as electronic health records, imaging data, and genomics.</p></li><li><p>Participate in research to explore new AI techniques and methodologies that can be applied to healthcare challenges.</p></li><li><p>Collaborate with the team to improve existing AI models, enhancing their accuracy, efficiency, and clinical relevance.</p></li><li><p>Help in conducting rigorous evaluations of AI models, including statistical analysis and validation against clinical outcomes.</p></li><li><p>Contribute to writing research papers, reports, and proposals for new projects or funding opportunities.</p></li></ul><h4>Requirements:</h4><ul><li><p>Currently pursuing or recently completed a master’s or PhD in Computer Science or a related field with a focus on artificial intelligence or machine learning.</p></li><li><p><strong>Demonstrated experience</strong> in machine learning, deep learning, natural language processing, or computer vision.</p></li><li><p>Familiarity with platforms like HuggingFace, AWS and GCP.</p></li><li><p>Proficiency in programming languages such as Python and experience with AI frameworks (e.g., TensorFlow, PyTorch).</p></li></ul><h4>Here's    startup before. Can you give us a few examples, if yes?</p><p></p>"
        },
        {
            "id": 4,
            "Job Title": "AI Threat Modeling Intern",
            "Company Name": "Aristiun",
            "Job Intel": "<h4>Your Mission:</h4><p><strong>Develop AI-Powered Threat Models:</strong></p><ul><li><p>Work with our AI engineers to develop and refine AI models that can automatically generate threat models for software systems, applications, and networks.</p></li><li><p>Explore and implement advanced machine learning techniques to identify potential attack vectors and predict vulnerabilities.</p></li><li><p>Assist in creating and curating datasets for training and evaluating AI threat modeling models.</p></li></ul><p><strong>Enhance Threat Modeling Tools and Processes:</strong></p><ul><li><p>Help&nbsp;to improve our existing threat modeling tools and workflows, integrating AI capabilities for greater efficiency and accuracy.</p></li><li><p>Contribute to developing visualizations and dashboards that make threat modeling insights easily accessible to security teams.</p></li></ul><p><strong>Research and Explore Emerging Threats</strong></p><ul><li><p>Stay up-to-date with the latest cybersecurity threats and vulnerabilities.</p></li><li><p>Research and evaluate new AI techniques and technologies that enhance threat modeling capabilities.</p></li><li><p>Contribute to developing and publishing thought leadership content related to AI threat modeling.</p></li></ul><h4>Ideal Candidate:</h4><p><strong>Experience with Machine Learning (Desired):</strong>&nbsp;Experience with supervised learning, unsupervised learning, or other relevant AI techniques.</p>"
        },
        {
            "id": 5,
            "Job Title": "AI Engineer",
            "Company Name": "Simbian",
            "Job Intel": "<h4>What you'll do:</h4><ul><li><p>Develop state-of-the-art AI agents and systems aimed at revolutionizing how security teams detect, triage, and respond to incidents, using models such as LLama, Claude, and GPT-4.</p></li><li><p>Create prototypes and Minimum Viable Products (MVPs) to showcase new AI capabilities in the context of security, focusing on the integration of diverse security tools and data.</p></li><li><p>Design and implement advanced internal agent-based systems for security operations, including anomaly detection, threat intelligence correlation, and automated incident prioritization.</p></li><li><p>Prototype and innovate AI solutions that streamline security processes, enhance detection accuracy, and improve response times.</p></li><li><p>Work closely with product and engineering teams to integrate AI technologies into our security solutions, ensuring they meet high-performance standards and contribute to user-centric outcomes.</p></li></ul><h4>Requirements</h4><ul><li><p>You are a <strong>hands-on builder </strong>with <strong>experience</strong> in developing AI-driven solutions, proficient in programming with Python and its ecosystem, including AI tools.</p></li><li><p>You have a <strong>strong background in building</strong> applications based on Large Language Models (LLMs) and are familiar with leveraging models like LLama, Claude, and GPT-4 for innovative applications.</p></li><li><p>Your expertise includes working with leading AI technologies and frameworks, such as TensorFlow and PyTorch, with a deep understanding of deep learning principles.</p></li></ul><h4>Here are questions asked in the job application:</h4><ol><li><p>Explain an LLM app that you have put together on your own. Describe its overall context management strategy in less than 200 words.</p></li><li><p>Have you ever fine-tuned an LLM? If so, what are some best practices you have picked up for it?</p></li></ol><p></p>"
        }
    ]

    return (
        <div className='bg-transparent relative  '>
            {/* <div className='absolute grid w-full h-full z-[-1]'></div> */}
            <div className='font-black text-[50px] h-[100px]  bg-inherit'></div>
            <div className='flex bg-inherit'>
                <div className=' w-[200px] bg-inherit z-[1] '></div>
                <div className='flex ml-[200px] bg-[#f8f9fa] bg-inherit rounded-[12px] relative w-full '>
                    <main className=' h-full py-[1.5rem] '>
                        <div className='my-0 mx-auto py-0 px-[3rem] h-full max-w-[1280px] min-w-[900px]'>
                            <ul className='my-[-1.5rem] mx-0'>
                                <li className='relative border border-solid border-black  my-[1.5rem] mx-0 shadow-[0_1px_2px_0px_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,.15)]'>
                                    <div className='flex-grow-0 flex-shrink-0 basis-auto bg-[#A7F9A4]  px-[2rem] py-[1.5rem]  p-[.75rem]  border-b border-solid border-black'>
                                        <h2 className={`${QuandoRegular.className} text-[#100C0ACC] text-start text-[1.5rem] leading-[2rem] font-normal  `}>SDE 1 - Growth</h2>
                                    </div>
                                    <div className='mx-auto  h-full bg-[#FFFFFF]  pt-[1rem] px-[2rem] pb-[1.5rem]'>
                                        <div className=''>

                                            <div className={`${DMSansReg.className} text-start text-[#CFFAAB] px-4 py-2 my-4 bg-[#2D2D2D] w-min whitespace-pre`}>
                                                {/* <img src={corporateicon} alt='' className='inline-block' /> */}
                                                Urban Company</div>
                                        </div>
                                        <div className={`${SchibstedGroteskMedium.className} text-[#100C0ACC]/[.8] text-start  py-[1rem] px-[2rem] mt-[1rem] mx-[-2rem] mb-0 text-[#202124] `}>
                                            <h4 className={`${ProductSansReg.className} text-[1rem] leading-[1.5rem] font-semibold text-[#202124] tracking-[.00625em] mb-[.5rem]`}>Requirements:</h4>
                                            <ul className={`${SchibstedGroteskMedium.className} text-[#100C0ACC]/[.8] pl-[40px]`} >
                                                <li className='list-disc my-1 leading-[1.5rem] text-[1rem] tracking-[.00625em] font-normal '>
                                                    <p>0-2 years of experience in the industry <strong><em>solving complex problems</em></strong> from scratch</p></li>
                                                <li className='list-disc my-1 leading-[1.5rem] text-[1rem] tracking-[.00625em] font-normal'><p>Ability to build scalable, sustainable, reliable and secure products based on <strong>past experience</strong></p></li>
                                                <li className='list-disc my-1 leading-[1.5rem] text-[1rem] tracking-[.00625em] font-normal'><p>Ability to bring new practices, architectural choices and new initiatives onto the table to make the overall tech stack more robust</p></li>
                                                <li className='list-disc my-1 leading-[1.5rem] text-[1rem] tracking-[.00625em] font-normal'><p>Ability to own the technical road map for systems/components</p></li>
                                            </ul><p></p>
                                        </div>

                                        <div className='inline  '>
                                            <div className='border-[#dadce0] text-[#1a73e8] px-[23px] border font-Google-Sans text-[.875rem] tracking-[.010732657635em] font-medium transition-all duration-[.28s] [transiton-timing-function:cubic-bezier(.4,0,.2,1)] border-solid h-[36px] rounded-[4px] my-[6px] relative inline-flex items-center justify-center min-w-[64px] border-[none] outline-[none] bg-transparent '>
                                                <div className='absolute overflow-hidden h-full -top-[1px] -left-[1px] -right-[1px] -bottom-[1px] w-full z-0 rounded-[4px] border-solid border border-transparent'>

                                                </div>
                                                <span className='relative'>Learn more</span>
                                                <a href="" className='left[-1px] w-[calc(100%+2px)] absolute top-[50%] h-[48px] right-0 translate-y-[-50%] text-[#2962ff]  '></a>
                                            </div>
                                        </div>

                                    </div>
                                    {/* <div className='absolute top-[40px] right-[62px]'>
                  <img src={bookmark} alt='' />
                </div> */}
                                </li>

                                <li className='relative border border-solid border-black  my-[1.5rem] mx-0 shadow-[0_1px_2px_0px_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,.15)]'>
                                    <div className='flex-grow-0 flex-shrink-0 basis-auto bg-[#A7F9A4]  px-[2rem] py-[1.5rem]  p-[.75rem]  border-b border-solid border-black'>
                                        <h2 className={`${QuandoRegular.className} text-[#100C0ACC]  text-start text-[1.5rem] leading-[2rem] font-normal  `}>AI/ML Research Intern</h2>
                                    </div>
                                    <div className='mx-auto  h-full bg-[#FFFFFF] pt-[1rem] px-[2rem] pb-[1.5rem]'>
                                        <div className=''>

                                            <div className={`${DMSansReg.className} text-start text-[#CFFAAB] px-4 py-2 my-4 bg-[#2D2D2D] w-min whitespace-pre`}>
                                                {/* <img src={corporateicon} alt='' className='inline-block' /> */}
                                                SuperKalam </div>
                                        </div>
                                        <div className={` ${SchibstedGroteskMedium.className} text-[#100C0ACC]/[.8] text-start  py-[1rem] px-[2rem] mt-[1rem] mx-[-2rem] mb-0 text-[#202124] `}>
                                            <h4 className={`${ProductSansReg.className}  text-[1rem] leading-[1.5rem] font-semibold text-[#202124] tracking-[.00625em] mb-[.5rem]`}>Requirements:</h4>
                                            <ul className='pl-[40px] [&>*]:list-disc my-1 leading-[1.5rem] text-[1rem] tracking-[.00625em] font-normal' >
                                                <li><p><strong>Prior Internship</strong> in AI/ML or <strong>quality projects</strong> done in AI/ML using Python/NodeJS</p></li><li><p>Working knowledge of - LLMs, RAG, vector DBs, etc.</p></li><li><p>Basic software engineering - relational database, understanding of rate limiting, basics of security.</p></li>
                                            </ul><p></p>
                                            <h4 className={`${ProductSansReg.className}  text-[1rem] leading-[1.5rem] font-semibold text-[#202124] tracking-[.00625em] mb-[.5rem]`}>Responsibilities:</h4>
                                            <ul className='pl-[40px] [&>*]:list-disc my-1 leading-[1.5rem] text-[1rem] tracking-[.00625em] font-normal' >
                                                <li><p>Running AI experiments, fine tuning</p></li><li><p>Research and implement appropriate approaches from research papers/blogs.</p></li>
                                            </ul>
                                            <h4 className={`${ProductSansReg.className}  text-[1rem] leading-[1.5rem] font-semibold text-[#202124] tracking-[.00625em] mb-[.5rem]`}>About the interview:</h4>
                                            <p>You resume will be shortlisted as per your projects or <strong>prior internship experience</strong>.</p>
                                        </div>

                                        <div className='inline '>
                                            <div className='border-[#dadce0] text-[#1a73e8] px-[23px] border font-Google-Sans text-[.875rem] tracking-[.010732657635em] font-medium transition-all duration-[.28s] [transiton-timing-function:cubic-bezier(.4,0,.2,1)] border-solid h-[36px] rounded-[4px] my-[6px] relative inline-flex items-center justify-center min-w-[64px] border-[none] outline-[none] bg-transparent '>
                                                <div className='absolute overflow-hidden h-full -top-[1px] -left-[1px] -right-[1px] -bottom-[1px] w-full z-0 rounded-[4px] border-solid border border-transparent'>

                                                </div>
                                                <span className='relative'>Learn more</span>
                                                <a href="" className='left[-1px] w-[calc(100%+2px)] absolute top-[50%] h-[48px] right-0 translate-y-[-50%] text-[#2962ff]  '></a>
                                            </div>
                                        </div>

                                    </div>
                                    {/* <div className='absolute top-[40px] right-[62px]'>
                  <img src={bookmark} alt='' />
                </div> */}
                                </li>

                                {/* <li className='border relative border-solid border-[#dadce0] rounded-[12px] my-[1.5rem] mx-0 shadow-[0_1px_2px_0px_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,.15)]'>
                <div className='mx-auto  h-full  pt-[1rem] px-[2rem] pb-[1.5rem]'>
                  <div className=''>
                    <div className='flex-grow-0 flex-shrink-0 basis-auto pl-0 p-[.75rem] w-[75%]'>
                      <h2 className='font-Google-Sans text-start text-[1.5rem] leading-[2rem] font-normal text-[#202124] '>AI/ML Research Intern</h2>
                    </div>
                    <div className='text-start'> <img src={corporateicon} alt='' className='inline-block' /> SuperKalam</div>
                  </div>
                  <div className='text-start border-t border-solid border-[#dadce0] py-[1rem] px-[2rem] mt-[1rem] mx-[-2rem] mb-0 font-SchibstedGroteskMedium'>
                    <h4 className={`${ProductSansReg.className}  text-[1rem] leading-[1.5rem] font-semibold text-[#202124] tracking-[.00625em] mb-[.5rem]'>Requirements:</h4>
    `}              <ul className='pl-[40px] [&>*]:list-disc my-1 leading-[1.5rem] text-[1rem] tracking-[.00625em] font-normal' >
                      <li><p><strong>Prior Internship</strong> in AI/ML or <strong>quality projects</strong> done in AI/ML using Python/NodeJS</p></li><li><p>Working knowledge of - LLMs, RAG, vector DBs, etc.</p></li><li><p>Basic software engineering - relational database, understanding of rate limiting, basics of security.</p></li>
                    </ul><p></p>
                    <h4 className={`${ProductSansReg.className}  text-[1rem] leading-[1.5rem] font-semibold text-[#202124] tracking-[.00625em] mb-[.5rem]'>Responsibilities:</h4>
`}                  <ul className='pl-[40px] [&>*]:list-disc my-1 leading-[1.5rem] text-[1rem] tracking-[.00625em] font-normal' >
                      <li><p>Running AI experiments, fine tuning</p></li><li><p>Research and implement appropriate approaches from research papers/blogs.</p></li>
                    </ul>
                    <h4 className={`${ProductSansReg.className}  text-[1rem] leading-[1.5rem] font-semibold text-[#202124] tracking-[.00625em] mb-[.5rem]'>About the interview:</h4`}
                    <p>You resume will be shortlisted as per your projects or <strong>prior internship experience</strong>.</p>

                  </div>

                  <div className='inline '>
                    <div className='border-[#dadce0] text-[#1a73e8] px-[23px] border font-Google-Sans text-[.875rem] tracking-[.010732657635em] font-medium transition-all duration-[.28s] [transiton-timing-function:cubic-bezier(.4,0,.2,1)] border-solid h-[36px] rounded-[4px] my-[6px] relative inline-flex items-center justify-center min-w-[64px] border-[none] outline-[none] bg-transparent '>
                      <div className='absolute overflow-hidden h-full -top-[1px] -left-[1px] -right-[1px] -bottom-[1px] w-full z-0 rounded-[4px] border-solid border border-transparent'>

                      </div>
                      <span className='relative'>Learn more</span>
                      <a href="" className='left[-1px] w-[calc(100%+2px)] absolute top-[50%] h-[48px] right-0 translate-y-[-50%] text-[#2962ff]  '></a>
                    </div>
                  </div>

                </div>
                <div className='absolute top-[40px] right-[62px]'>
                  <img src={bookmark} alt='' />
                </div>
              </li>  */}


                                <li className='relative border border-solid border-black  my-[1.5rem] mx-0 shadow-[0_1px_2px_0px_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,.15)]'>
                                    <div className='flex-grow-0 flex-shrink-0 basis-auto bg-[#A7F9A4]  px-[2rem] py-[1.5rem]  p-[.75rem]  border-b border-solid border-black'>
                                        <h2 className={`${QuandoRegular.className} text-[#100C0ACC] text-start text-[1.5rem] leading-[2rem] font-normal  `}>AI Research Intern</h2>
                                    </div>
                                    <div className='mx-auto bg-[#FFFFFF] h-full  pt-[1rem] px-[2rem] pb-[1.5rem]'>
                                        <div className=''>

                                            <div className={`${DMSansReg.className} text-start text-[#CFFAAB] px-4 py-2 my-4 bg-[#2D2D2D] w-min whitespace-pre`}>
                                                {/* <img src={corporateicon} alt='' className='inline-block' /> */}
                                                2070 Health </div>
                                        </div>
                                        <div className={` ${SchibstedGroteskMedium.className} text-[#100C0ACC]/[.8] text-start  py-[1rem] px-[2rem] mt-[1rem] mx-[-2rem] mb-0 text-[#202124] `}>
                                            <p>The AI Research Intern will contribute to our ongoing projects by applying AI &amp; ML algorithms to solve challenging problems in healthcare.</p>
                                            <h4 className={`${ProductSansReg.className}  text-[1rem] leading-[1.5rem] font-semibold text-[#202124] tracking-[.00625em] mb-[.5rem]`}>Requirements:</h4>
                                            <ul className='pl-[40px] [&>*]:list-disc my-1 leading-[1.5rem] text-[1rem] tracking-[.00625em] font-normal' >
                                                <li><p>Currently pursuing or recently completed a master’s or PhD in Computer Science or a related field with a focus on artificial intelligence or machine learning.</p></li><li><p><strong>Demonstrated experience</strong> in machine learning, deep learning, natural language processing, or computer vision.</p></li><li><p>Familiarity with platforms like HuggingFace, AWS and GCP.</p></li><li><p>Proficiency in programming languages such as Python and experience with AI frameworks (e.g., TensorFlow, PyTorch).</p></li>
                                            </ul>
                                            <h4 className={`${ProductSansReg.className}  text-[1rem] leading-[1.5rem] font-semibold text-[#202124] tracking-[.00625em] mb-[.5rem]`}>Responsibilities:</h4>
                                            <ul className='pl-[40px] [&>*]:list-disc my-1 leading-[1.5rem] text-[1rem] tracking-[.00625em] font-normal' >
                                                <li><p>Assist in designing and implementing machine learning models to analyse large datasets in healthcare, such as electronic health records, imaging data, and genomics.</p></li><li><p>Participate in research to explore new AI techniques and methodologies that can be applied to healthcare challenges.</p></li><li><p>Collaborate with the team to improve existing AI models, enhancing their accuracy, efficiency, and clinical relevance.</p></li><li><p>Help in conducting rigorous evaluations of AI models, including statistical analysis and validation against clinical outcomes.</p></li><li><p>Contribute to writing research papers, reports, and proposals for new projects or funding opportunities.</p></li>
                                            </ul>
                                            <h4>Here's    startup before. Can you give us a few examples, if yes?</h4>
                                        </div>

                                        <div className='inline '>
                                            <div className='border-[#dadce0] text-[#1a73e8] px-[23px] border font-Google-Sans text-[.875rem] tracking-[.010732657635em] font-medium transition-all duration-[.28s] [transiton-timing-function:cubic-bezier(.4,0,.2,1)] border-solid h-[36px] rounded-[4px] my-[6px] relative inline-flex items-center justify-center min-w-[64px] border-[none] outline-[none] bg-transparent '>
                                                <div className='absolute overflow-hidden h-full -top-[1px] -left-[1px] -right-[1px] -bottom-[1px] w-full z-0 rounded-[4px] border-solid border border-transparent'>

                                                </div>
                                                <span className='relative'>Learn more</span>
                                                <a href="" className='left[-1px] w-[calc(100%+2px)] absolute top-[50%] h-[48px] right-0 translate-y-[-50%] text-[#2962ff]  '></a>
                                            </div>
                                        </div>

                                    </div>
                                    {/* <div className='absolute top-[40px] right-[62px]'>
                  <img src={bookmark} alt='' />
                </div> */}
                                </li>

                                {/* <li className='border relative border-solid border-[#dadce0] rounded-[12px] my-[1.5rem] mx-0 shadow-[0_1px_2px_0px_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,.15)]'>
                <div className='mx-auto  h-full  pt-[1rem] px-[2rem] pb-[1.5rem]'>
                  <div className=''>
                    <div className='flex-grow-0 flex-shrink-0 basis-auto pl-0 p-[.75rem] w-[75%]'>
                      <h2 className='font-Google-Sans text-start text-[1.5rem] leading-[2rem] font-normal text-[#202124] '>AI Research Intern</h2>
                    </div>
                    <div className='text-start'> <img src={corporateicon} alt='' className='inline-block' /> 2070 Health</div>
                  </div>
                  <div className='text-start border-t border-solid border-[#dadce0] py-[1rem] px-[2rem] mt-[1rem] mx-[-2rem] mb-0 font-SchibstedGroteskMedium'>
                    <p>The AI Research Intern will contribute to our ongoing projects by applying AI &amp; ML algorithms to solve challenging problems in healthcare.</p>
                    <h4 className={`${ProductSansReg.className}  text-[1rem] leading-[1.5rem] font-semibold text-[#202124] tracking-[.00625em] mb-[.5rem]'>Requirements:</h4>
    `}              <ul className='pl-[40px] [&>*]:list-disc my-1 leading-[1.5rem] text-[1rem] tracking-[.00625em] font-normal' >
                      <li><p>Currently pursuing or recently completed a master’s or PhD in Computer Science or a related field with a focus on artificial intelligence or machine learning.</p></li><li><p><strong>Demonstrated experience</strong> in machine learning, deep learning, natural language processing, or computer vision.</p></li><li><p>Familiarity with platforms like HuggingFace, AWS and GCP.</p></li><li><p>Proficiency in programming languages such as Python and experience with AI frameworks (e.g., TensorFlow, PyTorch).</p></li>
                    </ul>
                    <h4 className={`${ProductSansReg.className}  text-[1rem] leading-[1.5rem] font-semibold text-[#202124] tracking-[.00625em] mb-[.5rem]'>Responsibilities:</h4>
`}                  <ul className='pl-[40px] [&>*]:list-disc my-1 leading-[1.5rem] text-[1rem] tracking-[.00625em] font-normal' >
                      <li><p>Assist in designing and implementing machine learning models to analyse large datasets in healthcare, such as electronic health records, imaging data, and genomics.</p></li><li><p>Participate in research to explore new AI techniques and methodologies that can be applied to healthcare challenges.</p></li><li><p>Collaborate with the team to improve existing AI models, enhancing their accuracy, efficiency, and clinical relevance.</p></li><li><p>Help in conducting rigorous evaluations of AI models, including statistical analysis and validation against clinical outcomes.</p></li><li><p>Contribute to writing research papers, reports, and proposals for new projects or funding opportunities.</p></li>
                    </ul>
                    <h4>Here's    startup before. Can you give us a few examples, if yes?</h4>
                  </div>

                  <div className='inline '>
                    <div className='border-[#dadce0] text-[#1a73e8] px-[23px] border font-Google-Sans text-[.875rem] tracking-[.010732657635em] font-medium transition-all duration-[.28s] [transiton-timing-function:cubic-bezier(.4,0,.2,1)] border-solid h-[36px] rounded-[4px] my-[6px] relative inline-flex items-center justify-center min-w-[64px] border-[none] outline-[none] bg-transparent '>
                      <div className='absolute overflow-hidden h-full -top-[1px] -left-[1px] -right-[1px] -bottom-[1px] w-full z-0 rounded-[4px] border-solid border border-transparent'>

                      </div>
                      <span className='relative'>Learn more</span>
                      <a href="" className='left[-1px] w-[calc(100%+2px)] absolute top-[50%] h-[48px] right-0 translate-y-[-50%] text-[#2962ff]  '></a>
                    </div>
                  </div>

                </div>
                <div className='absolute top-[40px] right-[62px]'>
                  <img src={bookmark} alt='' />
                </div>
              </li> */}

                                <li className='relative border border-solid border-black  my-[1.5rem] mx-0 shadow-[0_1px_2px_0px_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,.15)]'>
                                    <div className='flex-grow-0 flex-shrink-0 basis-auto bg-[#A7F9A4]  px-[2rem] py-[1.5rem]  p-[.75rem]  border-b border-solid border-black'>
                                        <h2 className={`${QuandoRegular.className} text-[#100C0ACC] text-start text-[1.5rem] leading-[2rem] font-normal  `}>AI Threat Modeling Intern</h2>
                                    </div>
                                    <div className='mx-auto  h-full bg-[#FFFFFF] pt-[1rem] px-[2rem] pb-[1.5rem]'>
                                        <div className=''>

                                            <div className={`${DMSansReg.className} text-start text-[#CFFAAB] px-4 py-2 my-4 bg-[#2D2D2D] w-min whitespace-pre`}>
                                                {/* <img src={corporateicon} alt='' className='inline-block' /> */}
                                                Aristiun </div>
                                        </div>
                                        <div className={` ${SchibstedGroteskMedium.className} text-[#100C0ACC]/[.8] text-start  py-[1rem] px-[2rem] mt-[1rem] mx-[-2rem] mb-0 text-[#202124] `}>
                                            <h4 className={`${ProductSansReg.className}  text-[1rem] leading-[1.5rem] font-semibold text-[#202124] tracking-[.00625em] mb-[.5rem]`}>Your Mission:</h4>
                                            <p><strong>Develop AI-Powered Threat Models:</strong></p>
                                            <ul className='pl-[40px] [&>*]:list-disc my-1 leading-[1.5rem] text-[1rem] tracking-[.00625em] font-normal' >
                                                <li><p>Work with our AI engineers to develop and refine AI models that can automatically generate threat models for software systems, applications, and networks.</p></li><li><p>Explore and implement advanced machine learning techniques to identify potential attack vectors and predict vulnerabilities.</p></li><li><p>Assist in creating and curating datasets for training and evaluating AI threat modeling models.</p></li>
                                            </ul>
                                            <p><strong>Enhance Threat Modeling Tools and Processes:</strong></p>
                                            {/* <h4 className={`${ProductSansReg.className}  text-[1rem] leading-[1.5rem] font-semibold text-[#202124] tracking-[.00625em] mb-[.5rem]'>Re`}ponsibilities:</h4> */}
                                            <ul className='pl-[40px] [&>*]:list-disc my-1 leading-[1.5rem] text-[1rem] tracking-[.00625em] font-normal' >
                                                <li><p>Help&nbsp;to improve our existing threat modeling tools and workflows, integrating AI capabilities for greater efficiency and accuracy.</p></li><li><p>Contribute to developing visualizations and dashboards that make threat modeling insights easily accessible to security teams.</p></li>
                                            </ul>
                                            <p><strong>Research and Explore Emerging Threats</strong></p>
                                            <ul className='pl-[40px] [&>*]:list-disc my-1 leading-[1.5rem] text-[1rem] tracking-[.00625em] font-normal' >
                                                <li><p>Stay up-to-date with the latest cybersecurity threats and vulnerabilities.</p></li><li><p>Research and evaluate new AI techniques and technologies that enhance threat modeling capabilities.</p></li><li><p>Contribute to developing and publishing thought leadership content related to AI threat modeling.</p></li>
                                            </ul>


                                            <h4 className={`${ProductSansReg.className}  text-[1rem] leading-[1.5rem] font-semibold text-[#202124] tracking-[.00625em] mb-[.5rem]`}>Ideal Candidate:</h4>
                                            <p><strong>Experience with Machine Learning (Desired):</strong>&nbsp;Experience with supervised learning, unsupervised learning, or other relevant AI techniques.</p>
                                        </div>

                                        <div className='inline '>
                                            <div className='border-[#dadce0] text-[#1a73e8] px-[23px] border font-Google-Sans text-[.875rem] tracking-[.010732657635em] font-medium transition-all duration-[.28s] [transiton-timing-function:cubic-bezier(.4,0,.2,1)] border-solid h-[36px] rounded-[4px] my-[6px] relative inline-flex items-center justify-center min-w-[64px] border-[none] outline-[none] bg-transparent '>
                                                <div className='absolute overflow-hidden h-full -top-[1px] -left-[1px] -right-[1px] -bottom-[1px] w-full z-0 rounded-[4px] border-solid border border-transparent'>

                                                </div>
                                                <span className='relative'>Learn more</span>
                                                <a href="" className='left[-1px] w-[calc(100%+2px)] absolute top-[50%] h-[48px] right-0 translate-y-[-50%] text-[#2962ff]  '></a>
                                            </div>
                                        </div>

                                    </div>
                                    {/* <div className='absolute top-[40px] right-[62px]'>
                  <img src={bookmark} alt='' />
                </div> */}
                                </li>

                                <li className='relative border border-solid border-black  my-[1.5rem] mx-0 shadow-[0_1px_2px_0px_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,.15)]'>
                                    <div className='flex-grow-0 flex-shrink-0 basis-auto bg-[#A7F9A4]  px-[2rem] py-[1.5rem]  p-[.75rem]  border-b border-solid border-black'>
                                        <h2 className={`${QuandoRegular.className} text-[#100C0ACC] text-start text-[1.5rem] leading-[2rem] font-normal  `}>AI Engineer</h2>
                                    </div>
                                    <div className='mx-auto  h-full bg-[#FFFFFF] pt-[1rem] px-[2rem] pb-[1.5rem]'>
                                        <div className=''>

                                            <div className={`${DMSansReg.className} text-start text-[#CFFAAB] px-4 py-2 my-4 bg-[#2D2D2D] w-min whitespace-pre`}>
                                                {/* <img src={corporateicon} alt='' className='inline-block' /> */}
                                                Simbian </div>
                                        </div>
                                        <div className={` ${SchibstedGroteskMedium.className} text-[#100C0ACC]/[.8] text-start  py-[1rem] px-[2rem] mt-[1rem] mx-[-2rem] mb-0 text-[#202124] `}>
                                            <h4 className={`${ProductSansReg.className}  text-[1rem] leading-[1.5rem] font-semibold text-[#202124] tracking-[.00625em] mb-[.5rem]`}>What you'll do:</h4>
                                            <ul className='pl-[40px] [&>*]:list-disc my-1 leading-[1.5rem] text-[1rem] tracking-[.00625em] font-normal' >
                                                <li><p>Develop state-of-the-art AI agents and systems aimed at revolutionizing how security teams detect, triage, and respond to incidents, using models such as LLama, Claude, and GPT-4.</p></li><li><p>Create prototypes and Minimum Viable Products (MVPs) to showcase new AI capabilities in the context of security, focusing on the integration of diverse security tools and data.</p></li><li><p>Design and implement advanced internal agent-based systems for security operations, including anomaly detection, threat intelligence correlation, and automated incident prioritization.</p></li><li><p>Prototype and innovate AI solutions that streamline security processes, enhance detection accuracy, and improve response times.</p></li><li><p>Work closely with product and engineering teams to integrate AI technologies into our security solutions, ensuring they meet high-performance standards and contribute to user-centric outcomes.</p></li>
                                            </ul><p></p>
                                            <h4 className={`${ProductSansReg.className}  text-[1rem] leading-[1.5rem] font-semibold text-[#202124] tracking-[.00625em] mb-[.5rem]`}>Requirements:</h4>
                                            <ul className='pl-[40px] [&>*]:list-disc my-1 leading-[1.5rem] text-[1rem] tracking-[.00625em] font-normal' >
                                                <li><p>You are a <strong>hands-on builder </strong>with <strong>experience</strong> in developing AI-driven solutions, proficient in programming with Python and its ecosystem, including AI tools.</p></li><li><p>You have a <strong>strong background in building</strong> applications based on Large Language Models (LLMs) and are familiar with leveraging models like LLama, Claude, and GPT-4 for innovative applications.</p></li><li><p>Your expertise includes working with leading AI technologies and frameworks, such as TensorFlow and PyTorch, with a deep understanding of deep learning principles.</p></li>
                                            </ul>
                                            <h4 className={`${ProductSansReg.className}  text-[1rem] leading-[1.5rem] font-semibold text-[#202124] tracking-[.00625em] mb-[.5rem]`}>Here are questions asked in the job application:</h4>
                                            <ol className='pl-[40px] [&>*]:list-decimal my-1 leading-[1.5rem] text-[1rem] tracking-[.00625em] font-normal'><li><p>Explain an LLM app that you have put together on your own. Describe its overall context management strategy in less than 200 words.</p></li><li><p>Have you ever fine-tuned an LLM? If so, what are some best practices you have picked up for it?</p></li></ol>
                                        </div>

                                        <div className='inline '>
                                            <div className='border-[#dadce0] text-[#1a73e8] px-[23px] border font-Google-Sans text-[.875rem] tracking-[.010732657635em] font-medium transition-all duration-[.28s] [transiton-timing-function:cubic-bezier(.4,0,.2,1)] border-solid h-[36px] rounded-[4px] my-[6px] relative inline-flex items-center justify-center min-w-[64px] border-[none] outline-[none] bg-transparent '>
                                                <div className='absolute overflow-hidden h-full -top-[1px] -left-[1px] -right-[1px] -bottom-[1px] w-full z-0 rounded-[4px] border-solid border border-transparent'>

                                                </div>
                                                <span className='relative'>Learn more</span>
                                                <a href="" className='left[-1px] w-[calc(100%+2px)] absolute top-[50%] h-[48px] right-0 translate-y-[-50%] text-[#2962ff]  '></a>
                                            </div>
                                        </div>

                                    </div>
                                    {/* <div className='absolute top-[40px] right-[62px]'>
                  <img src={bookmark} alt='' />
                </div> */}
                                </li>



                                {/* <li className='relative border border-solid border-[#dadce0] rounded-[12px] my-[1.5rem] mx-0 shadow-[0_1px_2px_0px_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,.15)]'>
                <div className='mx-auto  h-full  pt-[1rem] px-[2rem] pb-[1.5rem]'>
                  <div className=''>
                    <div className='flex-grow-0 flex-shrink-0 basis-auto pl-0 p-[.75rem] w-[75%]'>
                      <h2 className='font-Google-Sans text-start text-[1.5rem] leading-[2rem] font-normal text-[#202124] '>AI Engineer</h2>
                    </div>
                    <div className='text-start'> <img src={corporateicon} alt='' className='inline-block' />Simbian</div>
                  </div>
                  <div className='text-start border-t border-solid border-[#dadce0] py-[1rem] px-[2rem] mt-[1rem] mx-[-2rem] mb-0 font-SchibstedGroteskMedium'>
                    <h4 className={`${ProductSansReg.className}  text-[1rem] leading-[1.5rem] font-semibold text-[#202124] tracking-[.00625em] mb-[.5rem]'>What you'll do:</h4>
`}                <ul className='pl-[40px] [&>*]:list-disc my-1 leading-[1.5rem] text-[1rem] tracking-[.00625em] font-normal' >
                      <li><p>Develop state-of-the-art AI agents and systems aimed at revolutionizing how security teams detect, triage, and respond to incidents, using models such as LLama, Claude, and GPT-4.</p></li><li><p>Create prototypes and Minimum Viable Products (MVPs) to showcase new AI capabilities in the context of security, focusing on the integration of diverse security tools and data.</p></li><li><p>Design and implement advanced internal agent-based systems for security operations, including anomaly detection, threat intelligence correlation, and automated incident prioritization.</p></li><li><p>Prototype and innovate AI solutions that streamline security processes, enhance detection accuracy, and improve response times.</p></li><li><p>Work closely with product and engineering teams to integrate AI technologies into our security solutions, ensuring they meet high-performance standards and contribute to user-centric outcomes.</p></li>
                    </ul><p></p>
                    <h4 className={`${ProductSansReg.className}  text-[1rem] leading-[1.5rem] font-semibold text-[#202124] tracking-[.00625em] mb-[.5rem]'>Requirements:</h4>
    `}              <ul className='pl-[40px] [&>*]:list-disc my-1 leading-[1.5rem] text-[1rem] tracking-[.00625em] font-normal' >
                      <li><p>You are a <strong>hands-on builder </strong>with <strong>experience</strong> in developing AI-driven solutions, proficient in programming with Python and its ecosystem, including AI tools.</p></li><li><p>You have a <strong>strong background in building</strong> applications based on Large Language Models (LLMs) and are familiar with leveraging models like LLama, Claude, and GPT-4 for innovative applications.</p></li><li><p>Your expertise includes working with leading AI technologies and frameworks, such as TensorFlow and PyTorch, with a deep understanding of deep learning principles.</p></li>
                    </ul>
                    <h4 className={`${ProductSansReg.className}  text-[1rem] leading-[1.5rem] font-semibold text-[#202124] tracking-[.00625em] mb-[.5rem]'>Here are questions asked`}in the job application:</h4>
                    <ol className='pl-[40px] [&>*]:list-decimal my-1 leading-[1.5rem] text-[1rem] tracking-[.00625em] font-normal'><li><p>Explain an LLM app that you have put together on your own. Describe its overall context management strategy in less than 200 words.</p></li><li><p>Have you ever fine-tuned an LLM? If so, what are some best practices you have picked up for it?</p></li></ol>
                  </div>

                  <div className='inline '>
                    <div className='border-[#dadce0] text-[#1a73e8] px-[23px] border font-Google-Sans text-[.875rem] tracking-[.010732657635em] font-medium transition-all duration-[.28s] [transiton-timing-function:cubic-bezier(.4,0,.2,1)] border-solid h-[36px] rounded-[4px] my-[6px] relative inline-flex items-center justify-center min-w-[64px] border-[none] outline-[none] bg-transparent '>
                      <div className='absolute overflow-hidden h-full -top-[1px] -left-[1px] -right-[1px] -bottom-[1px] w-full z-0 rounded-[4px] border-solid border border-transparent'>

                      </div>
                      <span className='relative'>Learn more</span>
                      <a href="" className='left[-1px] w-[calc(100%+2px)] absolute top-[50%] h-[48px] right-0 translate-y-[-50%] text-[#2962ff]  '></a>
                    </div>
                  </div>

                </div>
                <div className='absolute top-[40px] right-[62px]'>
                  <img src={bookmark} alt='' />
                </div>
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
