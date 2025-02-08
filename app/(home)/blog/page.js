import BlogCard from "@/components/blog/BlogCard";
import Contact from "@/components/Contact";
import CommonHeader from "@/components/shared/CommonHeader";
import ContainerWrapper from "@/components/shared/ContainerWrapper";
import { blogs } from "@/data/blogs";
import { Search } from "lucide-react";

const BlogPage = () => {
    return (
        <div className="team-bg">
            <CommonHeader
                title="Latest News Blog & Article."
                banner="/assets/banner4.jpg"
                pathTrack={true}
            />
            <div className="py-12">
                <ContainerWrapper>
                    <div className="flex pb-6 border-b border-gray-800 items-center justify-between">
                        <h1 className="text-2xl font-bold">Blog</h1>

                        <div className="flex items-center gap-2 border border-gray-600 rounded-lg h-[40px] px-2">
                            <input placeholder="Search" type="text" className=" focus-within:outline-none focus:outline-none bg-transparent w-full h-full" />
                            <span className="text-gray-600">
                                <Search />
                            </span>
                        </div>
                    </div>

                    <div className="mt-12 grid md:grid-cols-3 md:gap-8 gap-2">
                        {
                            blogs?.map(itm => <BlogCard key={itm.id} blog={itm} />)
                       }
                    </div>
                </ContainerWrapper>
            </div>
            <br /><br /><br />
            <Contact />
        </div>
    );
};

export default BlogPage;