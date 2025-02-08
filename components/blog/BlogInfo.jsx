import { formateDate } from '@/utils/dateFormater';
import { Heart, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const BlogInfo = ({ findBlog, id }) => {
    return (
        <div className="border p-4 border-gray-800 rounded-lg">
            <header className=' md:border-b mb-3 md:pb-6 border-gray-800'>
                <div className="flex items-center justify-between">
                    <div className=' md:w-[250px] group py-2 flex items-center gap-4'>
                        <Image
                            src={`https://randomuser.me/api/portraits/men/${id}.jpg`}
                            width={500}
                            height={500}
                            alt="blog"
                            className="w-14 h-14 object-cover rounded-full border border-primary p-1"
                        />
                        <div className="">
                            <h1 className="group-hover:text-light_primary duration-300 font-bold text-lg">{findBlog?.author?.name}</h1>
                            <p className="text-sm text-gray-400">{formateDate(findBlog?.date)}</p>
                        </div>
                    </div>

                    <ul className="md:flex hidden items-center gap-2">
                        <li className="border-r border-muted text-muted pr-2">
                            {findBlog?.category}
                        </li>
                        <li className="text-primary border-r border-muted text-muted pr-2 flex items-center gap-2">
                            <Heart strokeWidth={1.5} />
                            {findBlog?.reactions.length}
                        </li>
                        <li className=" text-primary pr-2 flex items-center gap-2">
                            <MessageCircle strokeWidth={1.5} />
                            {findBlog?.comments.length}
                        </li>
                    </ul>
                </div>
                <br />
                <Image
                    className="w-full h-full object-cover rounded-lg"
                    src={findBlog?.thumbnail}
                    width={500}
                    height={500}
                    alt="blog"
                />
            </header>
            <ul className="md:hidden border-b border-gray-800 pb-3 mb-3 flex mt-3 items-center gap-2">
                <li className="border-r border-muted text-muted pr-2">
                    {findBlog?.category}
                </li>
                <li className="text-primary border-r border-muted  pr-2 flex items-center gap-2">
                    <Heart strokeWidth={1.5} />
                    {findBlog?.reactions.length}
                </li>
                <li className=" text-primary pr-2 flex items-center gap-2">
                    <MessageCircle strokeWidth={1.5} />
                    {findBlog?.comments.length}
                </li>
            </ul>
            <figure>
                <p className="text-muted">{findBlog?.description}</p>
            </figure>
        </div>
    );
};

export default BlogInfo;