import ContainerWrapper from "@/components/shared/ContainerWrapper";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const ProjectPage = ({ params: { id } }) => {
    const projects = [
        {
            id: 1,
            imageHref: "https://i.ibb.co/64WfFPt/image-01.jpg",
            category: "branding",
            title: "Creative Agency asdfas asdf asdfasdf sdafasdfasdf asdf asd fasd fasd fasdf asfasd",
            button: "View Details",
            buttonHref: "#",
            details: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga adipisci, voluptatibus veritatis officia in esse totam unde maxime cum nisi libero. Ex illo voluptatibus alias quas tenetur tempore nisi ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas esse deleniti amet eaque dignissimos exercitationem nobis ipsam blanditiis pariatur ad, vero illum doloribus deserunt nihil quasi repudiandae illo omnis aliquid! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est reiciendis in, fugiat laboriosam asperiores recusandae qui sunt iusto eaque eligendi veritatis dicta minus, repellendus omnis unde ut nostrum repellat voluptates! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo provident natus perferendis molestias! Dolores ex iste distinctio suscipit, quis recusandae, quibusdam earum tenetur laudantium delectus beatae molestiae animi aliquid exercitationem!",
            technology: ["react", "nextjs", "tailwindcss", "typescript"],
            startDate: "2025-01-01",
            endDate: "2025-03-14"
        },
        {
            id: 2,
            imageHref: "https://i.ibb.co/PT7ghRs/image-06.jpg",
            category: "marketing",
            title: "Creative Agency",
            button: "View Details",
            buttonHref: "#",
            details: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga adipisci, voluptatibus veritatis officia in esse totam unde maxime cum nisi libero. Ex illo voluptatibus alias quas tenetur tempore nisi ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas esse deleniti amet eaque dignissimos exercitationem nobis ipsam blanditiis pariatur ad, vero illum doloribus deserunt nihil quasi repudiandae illo omnis aliquid! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est reiciendis in, fugiat laboriosam asperiores recusandae qui sunt iusto eaque eligendi veritatis dicta minus, repellendus omnis unde ut nostrum repellat voluptates! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo provident natus perferendis molestias! Dolores ex iste distinctio suscipit, quis recusandae, quibusdam earum tenetur laudantium delectus beatae molestiae animi aliquid exercitationem!",
            technology: ["react", "nextjs", "tailwindcss", "typescript"],
            startDate: "2023-01-01",
            endDate: "2025-01-01"
        },
        {
            id: 3,
            imageHref: "https://i.ibb.co/vkt8C1P/image-02.jpg",
            category: "marketing",
            title: "Creative Agency",
            button: "View Details",
            buttonHref: "#",
            details: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga adipisci, voluptatibus veritatis officia in esse totam unde maxime cum nisi libero. Ex illo voluptatibus alias quas tenetur tempore nisi ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas esse deleniti amet eaque dignissimos exercitationem nobis ipsam blanditiis pariatur ad, vero illum doloribus deserunt nihil quasi repudiandae illo omnis aliquid! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est reiciendis in, fugiat laboriosam asperiores recusandae qui sunt iusto eaque eligendi veritatis dicta minus, repellendus omnis unde ut nostrum repellat voluptates! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo provident natus perferendis molestias! Dolores ex iste distinctio suscipit, quis recusandae, quibusdam earum tenetur laudantium delectus beatae molestiae animi aliquid exercitationem!",
            technology: ["react", "nextjs", "tailwindcss", "typescript"],
            startDate: "2023-01-01",
            endDate: "2025-01-01"
        },
        {
            id: 4,
            imageHref: "https://i.ibb.co/3FKqS1G/image-03.jpg",
            category: "development",
            title: "Creative Agency",
            button: "View Details",
            buttonHref: "#",
            details: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga adipisci, voluptatibus veritatis officia in esse totam unde maxime cum nisi libero. Ex illo voluptatibus alias quas tenetur tempore nisi ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas esse deleniti amet eaque dignissimos exercitationem nobis ipsam blanditiis pariatur ad, vero illum doloribus deserunt nihil quasi repudiandae illo omnis aliquid! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est reiciendis in, fugiat laboriosam asperiores recusandae qui sunt iusto eaque eligendi veritatis dicta minus, repellendus omnis unde ut nostrum repellat voluptates! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo provident natus perferendis molestias! Dolores ex iste distinctio suscipit, quis recusandae, quibusdam earum tenetur laudantium delectus beatae molestiae animi aliquid exercitationem!",
            technology: ["react", "nextjs", "tailwindcss", "typescript"],
            startDate: "2023-01-01",
            endDate: "2025-01-01"
        },
        {
            id: 5,
            imageHref: "https://i.ibb.co/m6dq2fX/image-04.jpg",
            category: "design",
            title: "Creative Agency",
            button: "View Details",
            buttonHref: "#",
            details: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga adipisci, voluptatibus veritatis officia in esse totam unde maxime cum nisi libero. Ex illo voluptatibus alias quas tenetur tempore nisi ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas esse deleniti amet eaque dignissimos exercitationem nobis ipsam blanditiis pariatur ad, vero illum doloribus deserunt nihil quasi repudiandae illo omnis aliquid! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est reiciendis in, fugiat laboriosam asperiores recusandae qui sunt iusto eaque eligendi veritatis dicta minus, repellendus omnis unde ut nostrum repellat voluptates! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo provident natus perferendis molestias! Dolores ex iste distinctio suscipit, quis recusandae, quibusdam earum tenetur laudantium delectus beatae molestiae animi aliquid exercitationem!",
            technology: ["react", "nextjs", "tailwindcss", "typescript"],
            startDate: "2023-01-01",
            endDate: "2025-01-01"
        },
        {
            id: 6,
            imageHref: "https://i.ibb.co/mCPjBsH/image-05.jpg",
            category: "marketing",
            title: "Creative Agency",
            button: "View Details",
            buttonHref: "#",
            details: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga adipisci, voluptatibus veritatis officia in esse totam unde maxime cum nisi libero. Ex illo voluptatibus alias quas tenetur tempore nisi ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas esse deleniti amet eaque dignissimos exercitationem nobis ipsam blanditiis pariatur ad, vero illum doloribus deserunt nihil quasi repudiandae illo omnis aliquid! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est reiciendis in, fugiat laboriosam asperiores recusandae qui sunt iusto eaque eligendi veritatis dicta minus, repellendus omnis unde ut nostrum repellat voluptates! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo provident natus perferendis molestias! Dolores ex iste distinctio suscipit, quis recusandae, quibusdam earum tenetur laudantium delectus beatae molestiae animi aliquid exercitationem!",
            technology: ["react", "nextjs", "tailwindcss", "typescript"],
            startDate: "2023-01-01",
            endDate: "2025-01-01"
        }
    ];

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

                        <div className="">
                            <Image
                                src={findProject?.imageHref}
                                alt={findProject?.title}
                                width={500}
                                height={500}
                                className="w-full border rounded-xl border-gray-700 md:h-[500px] h-[300px] object-cover" />
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
        </div>
    );
};

export default ProjectPage;