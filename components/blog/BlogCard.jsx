import { getBluerDate } from "@/utils/blur-genarator";
import Image from "next/image";
import Link from "next/link";

const BlogCard = async ({ blog }) => {
    const { base64 } = await getBluerDate(blog?.thumbnail);
    return (
        <div
            data-aos='fade-up'
            className=" group duration-300 rounded-lg overflow-hidden border-primary">
            <header className="overflow-hidden relative">
                <Image
                    src={blog?.thumbnail}
                    width={500}
                    height={500}
                    alt="blog"
                    placeholder="blur"
                    blurDataURL={base64}
                    className="w-full h-full object-cover"
                />
                <div className="bg-[#00000070] group-hover:bg-primary backdrop-blur-sm flex flex-col gap-1 items-center duration-300 justify-center absolute top-4 left-4 right-0 bottom-0 w-[85px] h-[85px] overflow-hidden rounded-full">
                    <p className="font-bold text-3xl">2</p>
                    <p className="text-light text-xs">December</p>
                </div>
            </header>
            <figure className="md:p-6 p-2 bg-[#181624]">
                <p className="text-muted text-sm pb-2">
                    {blog?.category}
                </p>
                <Link href={`/blog/${blog?.id}`} className="md:text-2xl text-light hover:text-light_primary duration-300 md:font-bold text-lg font-semibold">{blog?.title}</Link>
                <br /><br />
                <Link
                    href={`/blog/${blog?.id}`}
                    className=" px-4 py-2 duration-300 rounded bg-[#2f344ab6] hover:bg-dark_primary backdrop-blur-md"
                >
                    Read more
                </Link>
            </figure>
        </div>
    );
};

export default BlogCard;