import Image from "next/image";
import Link from "next/link";

const BlogAside = ({ blogs }) => {
    return (
        <div className="">
            <div className="md:mt-0 mt-6 sticky top-[85px]">
                <div className="bg-gray-900 p-4 rounded shadow-md">
                    <h1 className="text-xl font-semibold">Latest Blogs</h1>

                    {
                        blogs?.slice(0, 5).map(blog => <Link
                            href={`/blog/${blog.id}`}
                            key={blog.id} className="flex duration-300 group items-start gap-2 py-2 border-b border-gray-800">
                            <Image
                                src={blog?.thumbnail}
                                width={500}
                                height={500}
                                className='w-16 h-16 rounded object-cover'
                                alt="blog"
                            />
                            <div>
                                <h1 className="lg:text-sm md:text-xs text-sm duration-300 font-semibold group-hover:text-light_primary">{blog.title}</h1>
                                <p className="text-xs mt-1 text-gray-400">{blog.category}</p>
                            </div>
                        </Link>)
                    }
                </div>

                <div className="bg-gray-900 mt-3 p-4 rounded shadow-md">
                    <h1 className="font-semibold border-b border-gray-700 mb-3 pb-2">Contact : </h1>
                    <ul>
                        <li className='mb-2'>
                            <span className="text-gray-400">Email : </span>
                            <a className="ml-2 text-blue-400 duration-300 hover:text-light_primary" href="mailto:2Yy0H@example.com">2Yy0H@example.com</a>
                        </li>
                        <li className='mb-2'>
                            <span className="text-gray-400">Phone : </span>
                            <a className="ml-2 text-blue-400 duration-300 hover:text-light_primary" href="mailto:2Yy0H@example.com">+1 234 567 890</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default BlogAside;