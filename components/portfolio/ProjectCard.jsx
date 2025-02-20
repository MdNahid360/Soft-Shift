import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PortfolioCard = ({
    id = 0,
    showCard,
    url,
    category,
    ImageHref,
    title,
}) => {
    return (
        <>
            <div
                className={`w-full group px-4 md:w-1/2 xl:w-1/3 ${showCard === "all" || showCard === category.toLowerCase()
                    ? "block"
                    : "hidden"
                    }`}
            >
                <div className="relative overflow-hidden mb-12">
                    <div className="overflow-hidden rounded-[16px] bg-[#353a3b]">
                        <Image
                            src={ImageHref}
                            alt="portfolio"
                            width={500}
                            height={500}
                            className="w-full border border-gray-500 h-full object-cover" />
                    </div>
                    <div className="absolute h-full flex items-end translate-y-[60%] duration-300 group-hover:translate-y-0 left-0 right-0 bottom-0  p-4 bg-gradient-to-t from-[#000000] to-[#00000000]">
                        <div>
                            <Link href={`/project/${id}`}>
                                <h1 className="text-2xl duration-300 hover:text-primary mb-3 font-bold">{title}</h1>
                            </Link>
                            <Link
                                href={`${url}`}
                                target="_blank"
                                className="px-2 cursor-pointer hover:bg-primary py-1 duration-300 w-[110px] text-sm border backdrop-blur-lg rounded-full flex items-center gap-2 justify-center border-primary mt-2 text-light">
                                <Eye strokeWidth={1} /> Preview
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioCard;