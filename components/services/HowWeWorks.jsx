import { Edit, FileCheck2, LayoutDashboard, Rocket } from "lucide-react";
import Image from "next/image";


const HowWeWorks = ({ data }) => {

    return (
        <section className="text-light py-16 mt-6">
            <div className="">
                <div className="text-center">
                    <p className="text-sm font-bold uppercase tracking-widest text-gray-700">
                        How We Works
                    </p>
                    <h2 className="mt-6 text-3xl font-bold tracking-tight text-light sm:text-4xl lg:text-5xl">
                        We deliver simple and efficient solutions.
                    </h2>
                </div>

                <ul
                    className="mx-auto mt-12 grid grid-cols-1 gap-4 sm:mt-16 lg:mt-20 lg:grid-cols-3">

                    {
                        data?.map((step, index) => <li

                            key={step?.id} className="flex-start bg-[#0a091e] group relative block md:flex lg:flex-col p-8 rounded-lg">
                            <div className="absolute right-6 top-1 opacity-[0.1] text-[#62718ce2] text-8xl font-bold">{index + 1}</div>

                            <div className="md:flex gap-4">
                                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-gray-300  transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                                    <Image
                                        src={step?.icon}
                                        width={500}
                                        height={500}
                                        alt="icon"
                                        className="w-8 h-8 object-cover rounded-md"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-light before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                                    {step?.title}
                                </h3>
                            </div>
                            <div className="md:ml-6 lg:ml-0 lg:mt-10">
                                <h4 className="mt-2 text-base text-gray-500">
                                    {step?.description}
                                </h4>
                            </div>
                        </li>)
                    }
                </ul>
            </div>
        </section>

    );
};

export default HowWeWorks;