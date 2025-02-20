'use client';
import ContainerWrapper from "./shared/ContainerWrapper";
import "aos/dist/aos.css";
import { Facebook, Home, Linkedin, Mail, MessageCircle, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import ContactForm from "./ContactForm";
import dynamic from "next/dynamic";
import AnimationWrapper from "./shared/AnimationWrapper";

const Aos = dynamic(() => import('aos'), { ssr: false });


const Contact = () => {
    useEffect(() => {
        if (typeof window !== "undefined" && Aos.init) {
            Aos.init();
            Aos.refresh();
        }
    }, []);

    const socialLinks = [
        {
            id: 1,
            icon: '/assets/facebook.svg',
            link: "",
        },
        {
            id: 2,
            icon: '/assets/linkedin.svg',
            link: "",
        },
        {
            id: 3,
            icon: '/assets/X.svg',
            link: "",
        },
    ];
    return (
        <section id="contact" className="mb-32">
            <div
                id="map"
                className="relative h-[500px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                    className="h-[500px]"
                    width="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                />
            </div>
            <ContainerWrapper>
                <div className="relative">
                    <div className="overflow-hidden rounded-lg bg-gradient-to-r from-[#161625f4] to-[#23233449] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 -mt-[100px] backdrop-blur-[30px] border-gray-800 relative ">

                        <AnimationWrapper>
                            <div className="flex  seaside opacity-[0.2] items-start justify-center lg:text-[160px] md:text-[110px] text-4xl font-bold text-[gray] absolute top-0 bottom-0 left-0 right-0 m-auto md:pt-16 pt-0">
                                <h1 className="md:mt-4 mt-4">Contact Us</h1>
                            </div>
                        </AnimationWrapper>

                        <div className=" grid md:grid-cols-2 gap-6 relative z-10">
                            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:px-6">
                                <ContactForm />
                            </div>
                            <div className="w-full shrink-0 grow-0 basis-auto">
                                {/* lg */}
                                <div className="md:flex hidden flex-wrap items-center pt-8">
                                    <a href="tel:+8801303531371"
                                        className="md:mb-12 mb-4  w-full shrink-0 grow-0 basis-auto md:w-6/12  lg:w-full xl:w-6/12">
                                        <div className="flex items-start">
                                            <div className="shrink-0">
                                                <div className="inline-block rounded-md bg-[#5b585da1] p-4 text-light">
                                                    <Phone />
                                                </div>
                                            </div>
                                            <div className="ml-6 grow">
                                                <p className="mb-2 font-bold ">Technical support</p>
                                                <p className="text-sm text-neutral-500">+8801303531371</p>
                                            </div>
                                        </div>
                                    </a>

                                    <div
                                        className="md:mb-12 mb-4 w-full shrink-0 grow-0 basis-auto md:w-6/12 lg:w-full xl:w-6/12">
                                        <div className="flex items-start">
                                            <div className="shrink-0">
                                                <div className="inline-block rounded-md bg-[#5b585da1] p-4 text-light">
                                                    <Home />
                                                </div>
                                            </div>
                                            <div className="ml-6 grow">
                                                <p className="mb-2 font-bold ">Address</p>
                                                <p className="text-sm text-neutral-500">Dhaka, Mirpur-10</p>
                                            </div>
                                        </div>
                                    </div>

                                    <a href="mailto:mdnahid360s@gmail.com"
                                        className="md:mb-12 mb-4 w-full shrink-0 grow-0 basis-auto md:w-6/12 lg:w-full xl:w-6/12">
                                        <div className="flex items-start">
                                            <div className="shrink-0">
                                                <div className="inline-block rounded-md bg-[#5b585da1] p-4 text-light">
                                                    <Mail />
                                                </div>
                                            </div>
                                            <div className="ml-6 grow">
                                                <p className="mb-2 font-bold ">Email</p>
                                                <p className="text-sm text-neutral-500">mdnahid360s@gmail.com</p>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="https://wa.me/8801303531371"
                                        className="md:mb-12 mb-4 w-full shrink-0 grow-0 basis-auto md:w-6/12 lg:w-full xl:w-6/12">
                                        <div className="flex items-start">
                                            <div className="shrink-0">
                                                <div className="inline-block rounded-md bg-[#5b585da1] p-4 text-light">
                                                    <MessageCircle />
                                                </div>
                                            </div>
                                            <div className="ml-6 grow">
                                                <p className="mb-2 font-bold ">Whatsapp</p>
                                                <p className="text-sm text-neutral-500">+8801303531371</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                {/* small */}
                                <div className="md:hidden flex flex-wrap items-center md:pt-8">
                                    <a href="tel:+8801303531371"
                                        className="md:mb-12 mb-4  w-full shrink-0 grow-0 basis-auto md:w-6/12  lg:w-full xl:w-6/12">
                                        <div className="flex items-start">
                                            <div className="shrink-0">
                                                <div className="inline-block rounded-md bg-[#5b585da1] p-4 text-light">
                                                    <Phone />
                                                </div>
                                            </div>
                                            <div className="ml-6 grow">
                                                <p className="mb-2 font-bold ">Technical support</p>
                                                <p className="text-sm text-neutral-500">+8801303531371</p>
                                            </div>
                                        </div>
                                    </a>

                                    <div
                                        className="md:mb-12 mb-4 w-full shrink-0 grow-0 basis-auto md:w-6/12 lg:w-full xl:w-6/12">
                                        <div className="flex items-start">
                                            <div className="shrink-0">
                                                <div className="inline-block rounded-md bg-[#5b585da1] p-4 text-light">
                                                    <Home />
                                                </div>
                                            </div>
                                            <div className="ml-6 grow">
                                                <p className="mb-2 font-bold ">Address</p>
                                                <p className="text-sm text-neutral-500">Dhaka, Mirpur-10</p>
                                            </div>
                                        </div>
                                    </div>

                                    <a href="mailto:mdnahid360s@gmail.com"
                                        className="md:mb-12 mb-4 w-full shrink-0 grow-0 basis-auto md:w-6/12 lg:w-full xl:w-6/12">
                                        <div className="flex items-start">
                                            <div className="shrink-0">
                                                <div className="inline-block rounded-md bg-[#5b585da1] p-4 text-light">
                                                    <Mail />
                                                </div>
                                            </div>
                                            <div className="ml-6 grow">
                                                <p className="mb-2 font-bold ">Email</p>
                                                <p className="text-sm text-neutral-500">mdnahid360s@gmail.com</p>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="https://wa.me/8801303531371"
                                        className="md:mb-12 mb-4 w-full shrink-0 grow-0 basis-auto md:w-6/12 lg:w-full xl:w-6/12">
                                        <div className="flex items-start">
                                            <div className="shrink-0">
                                                <div className="inline-block rounded-md bg-[#5b585da1] p-4 text-light">
                                                    <MessageCircle />
                                                </div>
                                            </div>
                                            <div className="ml-6 grow">
                                                <p className="mb-2 font-bold ">Whatsapp</p>
                                                <p className="text-sm text-neutral-500">+8801303531371</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>


                                <h2 className="text-xl font-semibold">Social Media</h2>
                                <ul className="mt-3 flex text-blue-600 gap-4 justify-start ">
                                    {
                                        socialLinks?.map((itm) => <li key={itm?.id}>
                                            <a
                                                href={itm?.link}
                                                rel="noreferrer"
                                                target="_blank"
                                                className="text-blue-500 transition hover:text-primary dark:text-teal-500 dark:hover:text-teal-500/75"
                                            >
                                                <Image
                                                    className="w-8 duration-300 hover:scale-[1.2]"
                                                    src={itm?.icon}
                                                    alt="icon"
                                                    width={300}
                                                    height={300}
                                                />
                                            </a>
                                        </li>)
                                    }
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </ContainerWrapper>
        </section>

    );
};

export default Contact;