'use client';
import { useState } from "react";
import ContainerWrapper from "../shared/ContainerWrapper";
import Title from "../shared/Title";
import { ArrowRight, Eye } from "lucide-react";
import Image from "next/image";
import PortfolioCard from "./ProjectCard";
import { Empty } from "antd";
import Link from "next/link";

const OurPortfolio = ({ title, subtitle, allProject = false, description, projects, isSearch }) => {
    const [showCard, setShowCard] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");

    const handleProject = (category) => {
        setShowCard(category);
        setSearchTerm(""); // Reset search when category changes
    };

    const projectCategories = ["all", "test", "branding", "design", "marketing", "development"];

    const filteredProjects = projects?.filter((project) => {
        const matchesCategory = showCard === "all" || project?.category.toLowerCase() === showCard.toLowerCase();
        const matchesSearch = project?.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
            <ContainerWrapper>
                <div className="mx-auto">
                    <header className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="text-center">
                                <span className="text-primary mb-2 block text-lg font-semibold">
                                    {subtitle ?? "Our Portfolio"}
                                </span>
                                <Title position="center" move="fade-up" text={title ?? "Our Recent Projects"} shadow={true} />
                                <p data-aos="fade-up" className="mt-3 text-body-color md:w-[650px] m-auto text-base dark:text-dark-6">
                                    {description ?? "Explore our latest projects showcasing innovation and expertise."}
                                </p>
                                <br /><br />
                            </div>
                        </div>
                    </header>

                    <figure className="w-full flex flex-wrap justify-center">
                        <div className="w-full mb-12">
                            <ul data-aos="zoom-in" className="flex flex-wrap justify-center mb-8 space-x-1">
                                {projectCategories.map((category) => (
                                    <li data-aos="fade-up" key={category} className="mb-1">
                                        <button
                                            onClick={() => handleProject(category)}
                                            className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === category
                                                ? "bg-primary text-white"
                                                : "text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                                                }`}
                                        >
                                            {category.charAt(0).toUpperCase() + category.slice(1)}
                                        </button>
                                    </li>
                                ))}
                            </ul>

                            {isSearch && (
                                <div className="m-auto lg:w-[800px] md:w-[600px] w-full md:h-[50px] h-[40px] bg-[#352a415d] rounded-md border border-primary text-white">
                                    <input
                                        type="text"
                                        className="px-4 bg-transparent w-full h-full"
                                        placeholder="Search Project"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                            )}
                        </div>
                    </figure>

                    <div className="flex flex-wrap -mx-4">
                        {filteredProjects.length === 0 ? (
                            <div className="w-full h-full flex items-center justify-center">
                                <Empty
                                    className="text-white"
                                    description={<span className="text-white">No Project Found</span>}
                                    imageSize="large"
                                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                                />
                            </div>
                        ) : (
                            filteredProjects.map((project) => (
                                <PortfolioCard
                                    key={project?.id}
                                    id={project?.id}
                                    ImageHref={project?.imageHref}
                                    category={project?.category}
                                    title={project?.title}
                                    button={project?.button}
                                    buttonHref={project?.buttonHref}
                                    showCard={showCard}
                                    url={project?.url}
                                />
                            ))
                        )}
                    </div>
                </div>

                {!allProject && (
                    <Link href="/portfolio" className="flex items-center gap-2 px-4 py-2 rounded text-light_primary ml-auto w-[130px] justify-center hover:bg-dark_primary duration-300 hover:text-light">
                        View All <ArrowRight strokeWidth={1} />
                    </Link>
                )}
            </ContainerWrapper>
        </section>
    );
};

export default OurPortfolio;