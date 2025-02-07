'use client';
import HowWeWorks from "@/components/services/HowWeWorks";
import ServiceQan from "@/components/services/ServiceQan";
import ContainerWrapper from "@/components/shared/ContainerWrapper";
import Title from "@/components/shared/Title";
import { serviceData } from "@/data/sercive";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

const ServiceDetailsPage = ({ params: { serviceId } }) => {
    const findService = serviceData?.find(itm => itm.id == serviceId);


   useEffect(() => {
    Aos.init();
    Aos.refresh();
}, []);

    return (
        <div className="overflow-hidden service">
            <header
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/banner1.png")`,
                }}
                className="bg-fixed bg-cover md:h-[500px] h-[360px] overflow-hidden flex items-center justify-center">
                <ContainerWrapper>
                    <h1 className="lg:text-6xl md:text-5xl text-3xl lg:w-[900px] md:w-[650px] w-auto m-auto text-center font-bold animate__animated animate__rubberBand">
                        We turn ideas into reality with expert IT solutions.
                    </h1>
                </ContainerWrapper>
            </header>

            <figure className="py-12">
                <ContainerWrapper>
                    {/* service details */}
                    <div className="grid md:grid-cols-2 gap-3">
                        <div className="">
                            <h1 className="animate__animated animate__backInLeft lg:text-5xl md:text-2xl text-2xl font-bold">{findService?.name}</h1>
                            <p className="text-muted mt-5 animate__animated animate__backInLeft">
                                {findService?.description}
                            </p>
                            
                            <ul className="mt-4 px-3 list-disc grid md:grid-cols-2 md:gap-4 gap-2">
                                {
                                    findService?.services?.map((itm, idx) => <li
                                        key={itm}
                                        data-aos="fade-up"
                                    >{itm}</li>)
                                }
                            </ul>
                        </div>   
                        
                        <div className=" rounded-xl overflow-hidden animate__animated animate__backInRight  md:block hidden ">
                            <Image
                                src={'/assets/banner2.jpg'}
                                className="w-full h-full object-cover"
                                alt="icon"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                    <br />
                                <HowWeWorks />
                    <br />
                    {/* user question and answer */}
                    <div className="grid md:grid-cols-2 lg:gap-8 gap-3 md:mt-14">
                       <div  className=" rounded-xl overflow-hidden md:mt-0 mt-14">
                            <Image
                                 data-aos="fade-right"
                                src={findService?.qan?.cover_img || findService?.qan?.cover_img === '' ? '/assets/pic3.jpg' : findService?.qan?.cover_img}
                                className="w-full h-full object-cover"
                                alt="icon"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div  data-aos="fade-left" className="">
                            <ServiceQan />
                        </div>
                    </div>
                </ContainerWrapper>
            </figure>
        </div>
    );
};

export default ServiceDetailsPage;