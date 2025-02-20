import { formateDate } from "@/utils/dateFormater";
import { Empty } from "antd";
import Image from "next/image";

const BlogComments = ({ findBlog, id }) => {
    console.log("Comments : ", findBlog);
    return (
        <div className=" mt-4 border p-4 border-gray-800 rounded-lg">
            <h1 className="text-xl border-b border-gray-800 pb-2 mb-3 font-semibold">Comments :</h1>

            <ul>
                {!findBlog?.comments.length > 0
                    ? <div>
                        <li className="py-4">
                            <Empty
                                className="text-white"
                                description={<span className="text-white">No Project Found</span>}
                                imageSize="large"

                            />
                        </li>
                    </div>
                    : findBlog?.comments?.map(comment => <li key={comment?.id} className="mb-4">
                        <header className="flex items-center gap-2">
                            <Image
                                className="w-10 h-10 object-cover rounded-full"
                                src={`https://randomuser.me/api/portraits/men/${id}.jpg`}
                                width={500}
                                height={500}
                                alt="blog"
                            />
                            <div className="ml-3">
                                <h1 className="font-semibold">{comment?.username}</h1>
                                <p className="text-xs text-gray-400">{formateDate(comment?.date)}</p>
                            </div>
                        </header>
                        <figure className="py-3">
                            <p className="text-muted">{comment?.comment}</p>
                        </figure>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default BlogComments;