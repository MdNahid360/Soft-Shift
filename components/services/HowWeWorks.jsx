import { Edit, FileCheck2, LayoutDashboard, Rocket } from "lucide-react";

const HowWeWorks = () => {
    const steps = [
        {
            id: 1,
            icon: <Edit size={30} />,
            title: "Create an Account",
            description: "Sign up and set up your profile to start your blogging journey."
        },
        {
            id: 2,
            icon: <LayoutDashboard size={30} />,
            title: "Choose a Template",
            description: "Select from a variety of templates to make your blog look professional."
        },
        {
            id: 3,
            icon: <FileCheck2 size={30} />,
            title: "Write & Publish",
            description: "Start writing and publish your articles with ease."
        },
        {
            id: 4,
            icon: <Rocket size={30} />,
            title: "Grow Your Audience",
            description: "Share your blog and connect with readers worldwide."
        }
    ];
    return (
        <section className="text-light py-16 mt-6">
            <div className="">
                <div className="text-center">
                    <p data-aos={"fade-up"} className="text-sm font-bold uppercase tracking-widest text-gray-700">
                        How We Works
                    </p>
                    <h2 data-aos={"fade-up"} className="mt-6 text-3xl font-bold tracking-tight text-light sm:text-4xl lg:text-5xl">
                        We deliver simple and efficient solutions.
                    </h2>
                </div>

                <ul
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="mx-auto mt-12 grid grid-cols-1 gap-4 sm:mt-16 lg:mt-20 lg:grid-cols-3">

                    {
                        steps.map((step, index) => <li

                            key={step?.id} className="flex-start bg-[#0a091e] group relative flex lg:flex-col p-8 rounded-lg">
                            <span className="absolute right-6 top-1 opacity-[0.1] text-[#62718ce2] text-8xl font-bold">{index + 1}</span>
                            <div className="flex gap-4">
                                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300  transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                                    {step?.icon}
                                </div>
                                <h3 className="text-xl font-bold text-light before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                                    Add your databases
                                </h3>
                            </div>
                            <div className="ml-6 lg:ml-0 lg:mt-10">
                                <h4 className="mt-2 text-base text-gray-500">
                                    Use your own Notion databases or duplicate ours.
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