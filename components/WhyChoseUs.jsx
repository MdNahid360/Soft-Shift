/* eslint-disable react/no-unescaped-entities */
"use client";

import ContainerWrapper from "./shared/ContainerWrapper";
import Image from "next/image";
import CountAnimate from "./shared/CountAnimate";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "./shared/Title";

const WhyChoseUs = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="why-chose-us overflow-hidden lg:h-[800px] h-auto flex items-center bg-[#0a0617] text-light relative">
            <span className="absolute bottom-[40%]  -left-10 m-auto shadow-shape-1  w-1 h-2 rounded-full"></span>
            <span className="absolute top-[30%]  -right-10 m-auto shadow-shape-2  w-1 h-2 rounded-full"></span>
            <ContainerWrapper>
                <section className="py-24 relative">
                    <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                        <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                            <div className="w-full justify-center items-start gap-6 grid grid-cols-2 lg:order-first order-last">
                                <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                                    <Image
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                        className=" rounded-xl object-cover"
                                        src="/assets/pic-lg2.jpg"
                                        alt="vct"
                                        width={500}
                                        height={500}
                                    />
                                </div>
                                <Image
                                    data-aos="fade-down"
                                    data-aos-duration="500"
                                    className="sm:ml-0 ml-auto rounded-xl object-cover"
                                    src="/assets/pic-lg3.jpg"
                                    alt="vct"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                                <div className="w-full flex-col justify-center items-start gap-8 flex">
                                    <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                        <Title text={'Building a Future of Excellence'} />
                                        <p
                                            data-aos="fade-left"
                                            data-aos-duration="600"
                                            className="text-gray-500 text-justify font-normal leading-relaxed lg:text-start md:text-center md:text-md text-sm">
                                            Our commitment to quality and innovation has shaped every project we've delivered.
                                            With a focus on excellence, we turn ideas into reality, creating lasting impacts in every community we serve.
                                            Collaboration and dedication drive us to exceed expectations and set new industry standards.
                                            Every structure we build reflects our passion for craftsmanship and attention to detail.
                                            We believe in creating sustainable solutions that inspire growth and transform lives.
                                        </p>

                                    </div>
                                    <div
                                        data-aos="fade-left"
                                        data-aos-duration="600"
                                        className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                                        <div className="flex-col justify-start items-start inline-flex">
                                            <CountAnimate value={33} />
                                            <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                                                Years of Experience
                                            </h6>
                                        </div>
                                        <div className="flex-col justify-start items-start inline-flex">
                                            <CountAnimate value={125} />
                                            <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                                                Successful Projects
                                            </h6>
                                        </div>
                                        <div className="flex-col justify-start items-start inline-flex">
                                            <CountAnimate value={52} />
                                            <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                                                Happy Clients
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ContainerWrapper>
        </div>
    );
};

export default WhyChoseUs;
