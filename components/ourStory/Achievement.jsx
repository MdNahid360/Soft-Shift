/* eslint-disable react/no-unescaped-entities */
'use client';

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const achievements = [
    { title: "33+ Years", description: "Influencing Digital Landscapes Together" },
    { title: "125+ Projects", description: "Excellence Achieved Through Success" },
    { title: "26+ Awards", description: "Our Dedication to Innovation Wins Understanding" },
    { title: "99% Happy Clients", description: "Mirrors our Focus on Client Satisfaction." }
];

const Achievement = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <section className=" relative md:py-12 py-4">
            <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                    <div className="w-full flex-col justify-center items-start gap-8 flex">
                        <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                <h2
                                    data-aos="fade-right"
                                    className="text-indigo-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                    The Tale of Our Achievement Story
                                </h2>
                                <p
                                    data-aos="fade-right"
                                    data-aos-duration="500"
                                    className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                    Our achievement story is a testament to teamwork and
                                    perseverance. Together, we've overcome challenges, celebrated
                                    victories, and created a narrative of progress and success.
                                </p>
                            </div>
                        </div>
                        <div className="w-full flex-col justify-center items-start gap-6 flex">
                            <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                {achievements.map((item, index) => (
                                    <div
                                        key={index}
                                        data-aos="fade-up"
                                        className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 className="text-white text-2xl font-bold font-manrope leading-9">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-500 text-base font-normal leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:justify-start justify-center items-start flex">
                    <div
                        data-aos="fade-left"
                        className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-800 rounded-3xl  relative">
                        <Image
                            className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                            src="/assets/banner2.jpg"
                            alt="about Us image"
                            width={564}
                            height={646}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievement;
