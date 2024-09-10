// 'use client'
import { DMSansMed, DMSansReg, QuandoRegular, SchibstedGroteskMedium } from "@/app/fonts/fonts";
import React, { useState } from "react";
import parse from 'html-react-parser';

export interface CommentProps {
  id: number;
  text: string;
  children?: CommentProps[];

}

const Comment: React.FC<{ comment: CommentProps }> = ({ comment }) => {

  // const [connectionLength, setConnectionLength] = useState(0)
  // if (comment?.children?.length === 1) {
  //   setConnectionLength(90)
  // } else { 
  //   comment.children
  // }


  return (
    <div>
      <li className='relative overflow-hidden min-w-[900px] p-1 my-1 max-w-[1000px] border-2 h-min border-solid border-black   mx-0    bg-[#FFFBF8]'>
        <p className={`${DMSansReg.className} font-normal [&>ol]:list-decimal [&>ol]:ml-8 text-[1.065rem] leading-[1.7] w-auto tracking-[-.005em] mx-5 my-[15px] mr-8 py-1 text-[#100C0A]/[.9]`}>
          {parse(comment.text)}
        </p>
      </li>
      {comment.children && (
        <div className="flex flex-col mt-8  w-full">
          {comment.children.map((child, index) => {
            let count = 1
            if (comment.children) {
              if (comment.children[index - 1]) {
                const prevcommle = comment.children[index - 1]
                let changcomm = { ...comment.children[index - 1] }
                // console.log(prevcommle);

                while (changcomm.children) {
                  // console.log(changcomm.children);
                  ++count
                  if (changcomm.children) {

                    changcomm = changcomm.children[0]
                  }
                  if (!changcomm.children) {
                    const height = (count + 1) * 130
                    // console.log(height);

                    return <div key={child.id} className="relative w-full h-full pl-[40px]">
                      <div style={{ height: height }}
                        className={`absolute -top-[80%] left-4 aspect-square w-[24px] border-l-2 border-b-2 rounded-bl-xl border-black `}
                      ></div>
                      <Comment comment={child} />
                    </div>
                  }

                }
              }
            }

            // console.log(count);

            return <div key={child.id} className="relative w-full h-full max-w-[1000px] pl-[40px]">
              <div
                className={`absolute bottom-12 left-4 aspect-square w-[24px] border-l-2 border-b-2 rounded-bl-xl border-black h-[130px]`}
              ></div>
              <Comment comment={child} />
            </div>
          })}
        </div>
      )}
    </div>
  );
};

export default Comment;
