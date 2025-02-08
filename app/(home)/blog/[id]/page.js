import BlogAside from '@/components/blog/BlogAside';
import BlogComments from '@/components/blog/BlogComments';
import BlogInfo from '@/components/blog/BlogInfo';
import CommonHeader from '@/components/shared/CommonHeader';
import ContainerWrapper from '@/components/shared/ContainerWrapper';
import { blogs } from '@/data/blogs';
import { formateDate } from '@/utils/dateFormater';
import { Empty } from 'antd';
import { Heart, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogDetailPage = ({ params: { id } }) => {
    const findBlog = blogs.find(blog => blog.id === Number(id));

    return (
        <div className='py-12 mt-8'>
            <CommonHeader
                title={findBlog?.title}
                banner="/assets/banner4.jpg"
                pathTrack={true}
            />
            <ContainerWrapper>
                 <div className="mt-6 grid md:grid-cols-3 gap-2">
                    <div className="md:col-span-2 ">
                      <BlogInfo findBlog={findBlog} id={id} />
                       <BlogComments findBlog={findBlog} id={id} />
                    </div>
                  <BlogAside blogs={blogs} />
            </div>
           </ContainerWrapper>
        </div>
    );
};

export default BlogDetailPage;