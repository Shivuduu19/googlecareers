// 'use client'
import { SchibstedGroteskMedium } from "@/app/fonts/fonts";
import React, { useState } from "react";

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
      <li className='relative overflow-hidden min-w-[900px] p-4 my-3 max-w-[1280px] border-2 h-min border-solid border-black   mx-0 pb-3 pr-3 rounded-[10px]  bg-[#FFFBF8]'>
        <p className={`${SchibstedGroteskMedium.className} font-normal text-[1.065rem] leading-[2] w-auto tracking-[-.005em] mx-8 py-6 text-[#100C0A]/[.9]`}>
          {comment.text}
        </p>
      </li>
      {comment.children && (
        <div className="flex flex-col w-full">
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

            return <div key={child.id} className="relative w-full h-full pl-[40px]">
              <div
                className={`absolute -top-3 left-4 aspect-square w-[24px] border-l-2 border-b-2 rounded-bl-xl border-black h-[90px]`}
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
