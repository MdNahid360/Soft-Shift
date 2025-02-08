import Contact from "@/components/Contact";
import ContainerWrapper from "@/components/shared/ContainerWrapper";
import { projects } from "@/data/projects";
import { ArrowLeft, ArrowRight, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectPage = ({ params: { id } }) => {

    const findProject = projects.find((project) => project.id === parseInt(id));

    const getDuration = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);

        const diffInMilliseconds = end.getTime() - start.getTime();
        const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);

        const totalYears = Math.floor(diffInDays / 365);
        if (totalYears >= 1) return { value: totalYears, unit: "Years" };

        const totalMonths = Math.floor(diffInDays / 30);
        if (totalMonths >= 1) return { value: totalMonths, unit: "Months" };

        const totalWeeks = Math.floor(diffInDays / 7);
        return { value: totalWeeks, unit: "Weeks" };
    };

    const { value, unit } = getDuration(findProject?.startDate, findProject?.endDate);

    const formatedDate = (data) => {
        const date = new Date(data);
        const day = date.toLocaleString("default", { day: "numeric" });
        const month = date.toLocaleString("default", { month: "short" });
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    }

    console.log(findProject);
    return (
        <div className="text-white">
            <header
                style={{
                    backgroundImage: `linear-gradient(#000000ba, #020234), url("/assets/banner2.jpg")`,
                }}
                className="bg-fixed bg-cover md:h-[500px] h-[360px] overflow-hidden flex items-center justify-center">
                <ContainerWrapper>
                    <h1 className="lg:text-6xl text-[#fff] md:text-5xl text-3xl lg:w-[900px] md:w-[650px] w-auto m-auto text-center font-bold animate__animated animate__rubberBand">
                        Our Portfolio
                    </h1>
                </ContainerWrapper>
            </header>

            <figure className="py-12">
                <ContainerWrapper>
                    <div className="grid md:grid-cols-2 md:gap-12 gap-4">

                        <div className="group relative rounded-xl overflow-hidden md:h-[500px] h-[300px]">
                            <Image
                                src={findProject?.imageHref}
                                alt={findProject?.title}
                                width={500}
                                height={500}
                                className="w-full border duration-300 rounded-xl border-gray-700 h-full object-cover" />
                            
                            <div className="absolute opacity-0 group-hover:opacity-100 duration-300 top-0 left-0 right-0 bottom-0 backdrop-blur-sm bg-[#00000060] flex items-center justify-center">
                                 <a
                                target="_blank"
                                className="px-2 cursor-pointer hover:bg-primary py-1 duration-300 w-[110px] text-sm border backdrop-blur-lg rounded-full flex items-center gap-2 justify-center border-primary mt-2 text-light" href={findProject?.url}>
                                <Eye strokeWidth={1} /> Preview
                            </a>
                            </div>
                        </div>
                        <div className="md:col-span-1">
                            <h1 className="text-3xl font-bold">{findProject?.title.slice(0, 73)} {findProject?.title.length > 73 ? "..." : ""} </h1>
                            <br />
                            <p className="text-muted">
                                {findProject?.details}
                            </p>

                            <div className="border-[2px] bg-[#2c3a4f54] border-[#1e293a] backdrop-blur-lg mt-4 ">
                                <div className="grid grid-cols-3">
                                    <div className="p-4">
                                        <p className="text-muted">Duration :</p>
                                        <div className="flex items-end">
                                            <h1 className="text-6xl text-[#80808046] font-black">{value} </h1> <span className="">{unit}</span>
                                        </div>

                                        <div className="mt-2 flex items-center md:text-xs text-[10px] text-muted">
                                            <span>{formatedDate(findProject?.startDate)} - {formatedDate(findProject?.endDate)}</span>
                                        </div>
                                    </div>
                                    <div className="p-4 border-l-[2px] border-[#1e293a] col-span-2">
                                        <p className="text-muted">Technology :</p>

                                        <ul className="mt-2 flex gap-2 flex-wrap">
                                            {
                                                findProject?.technology.map((item, index) => (
                                                    <li key={index} className="bg-[#80808046] px-2 py-1 rounded text-sm">{item}</li>
                                                ))
                                           }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContainerWrapper>
            </figure>

            <br /><br /><br />
            <Contact />
        </div>
    );
};

export default ProjectPage;