// 'use client'
import React, { useState } from "react";

export interface CommentProps {
  id: number;
  text: string;
  children?: CommentProps[];
  indexed?: number
}

const Comment: React.FC<{ comment: CommentProps, indexed: number }> = ({ comment, indexed }) => {

  // const [connectionLength, setConnectionLength] = useState(0)
  // if (comment?.children?.length === 1) {
  //   setConnectionLength(90)
  // } else { 
  //   comment.children
  // }
  return (
    <div>
      <div className="p-4 border-2 rounded-xl shadow-lg my-8 bg-white border-black">
        <p>{comment.text}</p>
      </div>
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
                    const height = count * 130
                    // console.log(height);

                    return <div key={child.id} className="relative w-full h-full pl-[40px]">
                      <div style={{ height: height }}
                        className={`absolute -top-[130%] left-4 aspect-square w-[24px] border-l-2 border-b-2 rounded-bl-xl border-black `}
                      ></div>
                      <Comment comment={child} indexed={index} />
                    </div>
                  }

                }
              }
            }

            // console.log(count);

            return <div key={child.id} className="relative w-full h-full pl-[40px]">
              <div
                className={`absolute -top-8 left-4 aspect-square w-[24px] border-l-2 border-b-2 rounded-bl-xl border-black h-[90px]`}
              ></div>
              <Comment comment={child} indexed={index} />
            </div>
          })}
        </div>
      )}
    </div>
  );
};

export default Comment;
