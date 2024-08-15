import React from 'react'
import Comment, { CommentProps } from "@/components/Comment";
import Image from "next/image";


const commnets: CommentProps[] = [
    {
        id: 1,
        text: "Main comment",
        children: [
            {
                id: 2,
                text: "Nested Comment",
                children: [
                    {
                        id: 3,
                        text: "Much Nested Comment",
                        children: [
                            {
                                id: 4,
                                text: "Much More Nested",
                                children: [
                                    {
                                        id: 5,
                                        text: "Much Much Much Nested",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 6,
                        text: "Comment",
                        children: [
                            {
                                id: 5,
                                text: "Much Much Much Nested",
                            },
                        ],
                    },
                ],
            },
        ],
    },
    { id: 7, text: "New Comment" },
];
const page = () => {
    return (
        <div className="bg-white text-black h-full w-full p-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
            {commnets.map((comment, index) => (
                <Comment comment={comment} key={comment.id} indexed={index} />
            ))}
        </div>
    )
}

export default page
