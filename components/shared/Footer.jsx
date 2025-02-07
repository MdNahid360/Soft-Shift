/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import ContainerWrapper from "./ContainerWrapper";
import { Facebook, Home, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    const socialLinks = [
        {
            id: 1,
            icon: <Facebook strokeWidth={1} />,
            link: "",
        },
        {
            id: 2,
            icon: <Linkedin strokeWidth={1} />,
            link: "",
        },
        {
            id: 3,
            icon: <Twitter strokeWidth={1} />,
            link: "",
        },
    ];

    const companyMenu = [
        {
            label: "Company History",
            href: "/company-history",
        },
        {
            label: "Meet the Team",
            href: "/team",
        },
        {
            label: "Careers",
            href: "/careers",
        },
    ];

    const helpLinks = [
        { name: "About", url: "#" },
        { name: "Services", url: "#" },
        { name: "Contact", url: "#" },
        { name: "Privacy Policy", url: "#" },
    ];

    const ourServices = [
        {
            title: "Web Development",
            description: "Custom websites and web applications built with modern technologies.",
            icon: "code",
        },
        {
            title: "UI/UX Design",
            description: "Creating user-friendly interfaces with great user experience.",
            icon: "brush",
        },
        {
            title: "SEO Optimization",
            description: "Boost your website’s ranking with our SEO strategies.",
            icon: "search",
        },
        {
            title: "Digital Marketing",
            description: "Grow your business with targeted online marketing campaigns.",
            icon: "megaphone",
        },
        {
            title: "Mobile App Development",
            description: "Build cross-platform mobile apps with the latest frameworks.",
            icon: "smartphone",
        },
    ];

    const contactUs = [
        {
            type: "Phone",
            icon: <Phone strokeWidth={1} size={20} />,
            href: "tel:+8801303531371",
            value: "+8801303531371",
        },
        {
            type: "Email",
            icon: <Mail strokeWidth={1} size={20} />,
            href: "mailto: support@yourwebsite.com",
            value: "mdnahid360s@gmail.com",
        },
        {
            type: "Address",
            icon: <Home strokeWidth={1} size={20} />,
            href: "",
            value: "123 Main Street, City, Country",
        }
    ];



    return (
        <footer className="relative">
            <div className="bg-[#13152b] dark:bg-gray-900">
                <ContainerWrapper>
                    <div className=" pb-6 pt-16 sm:px-6 lg:pt-24">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                            <div>
                                <div className="flex justify-start text-teal-600 dark:text-teal-300">
                                    <div className="logo">
                                        <Image
                                            src="/assets/logo.png"
                                            width={500}
                                            height={500}
                                            alt="logo"
                                            className="md:w-[170px] w-[120px]"
                                        />
                                    </div>
                                </div>
                                <p className="mt-6 max-w-md  text-start leading-relaxed text-muted sm:max-w-xs sm:text-left dark:text-gray-400">
                                    Expand your reach and maximize your potential with cutting-edge solutions. Elevate your brand and stay ahead in today's competitive market.
                                </p>
                                <ul className="mt-8 flex text-blue-600 gap-6 justify-start md:gap-8">
                                    {
                                        socialLinks.map((itm) => <li key={itm?.id}>
                                            <a
                                                href={itm?.link}
                                                rel="noreferrer"
                                                target="_blank"
                                                className="text-blue-500 transition hover:text-primary dark:text-teal-500 dark:hover:text-teal-500/75"
                                            >
                                                {itm?.icon}
                                            </a>
                                        </li>)
                                    }
                                </ul>
                            </div>

                            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
                                <div className=" text-start sm:text-left">
                                    <p className="text-lg font-medium text-light  ">
                                        About Us
                                    </p>
                                    <ul className="mt-8 space-y-4 text-sm">
                                        {
                                            companyMenu.map((itm) => <li key={itm?.label}>
                                                <Link
                                                    className="text-muted transition hover:text-blue-400 duration-300 dark:hover:text-white/75"
                                                    href={itm?.href}
                                                >
                                                    {itm?.label}
                                                </Link>
                                            </li>)
                                        }

                                    </ul>
                                </div>

                                <div className=" text-start sm:text-left">
                                    <p className="text-lg font-medium text-light  ">
                                        Our Services
                                    </p>
                                    <ul className="mt-8 space-y-4 text-sm">
                                        {
                                            ourServices.map((itm) => <li key={itm?.label}>
                                                <div
                                                    className="text-muted transition "
                                                >
                                                    {itm?.title}
                                                </div>
                                            </li>)
                                        }
                                    </ul>
                                </div>

                                <div className=" text-start sm:text-left">
                                    <p className="text-lg font-medium text-light  ">
                                        Helpful Links
                                    </p>
                                    <ul className="mt-8 space-y-4 text-sm">
                                        {
                                            helpLinks.map((itm) => <li key={itm?.label}>
                                                <Link
                                                    className="text-muted transition hover:text-blue-400 duration-300 dark:hover:text-white/75"
                                                    href={itm?.url}
                                                >
                                                    {itm?.name}
                                                </Link>
                                            </li>)
                                        }
                                    </ul>
                                </div>

                                <div className=" text-start sm:text-left">
                                    <p className="text-lg font-medium text-light  ">
                                        Contact Us
                                    </p>
                                    <ul className="mt-8 space-y-4 text-sm">
                                        {
                                            contactUs?.map(itm => <li key={itm?.label}>
                                                {itm?.href ? <a
                                                    className="text-muted transition hover:text-blue-400 duration-300 flex gap-2 items-center dark:hover:text-white/75"
                                                    href={itm?.href}
                                                >
                                                    <span>
                                                        {itm?.icon}
                                                    </span>
                                                    <span>
                                                        {itm?.value}
                                                    </span>
                                                </a>
                                                    : <div
                                                        className="text-muted transition hover:text-blue-400 duration-300 flex gap-2 items-center dark:hover:text-white/75">
                                                        <span>
                                                            {itm?.icon}
                                                        </span>
                                                        <span>
                                                            {itm?.value}
                                                        </span>
                                                    </div>}
                                            </li>)
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 border-t border-gray-700 pt-6 dark:border-gray-800">
                            <p className="text-sm text-muted flex items-center justify-center">
                                &copy; {new Date().getFullYear()} Soft Shift. All rights reserved.
                            </p>
                        </div>
                    </div>
                </ContainerWrapper>
            </div>
            <span className="absolute bottom-[-18%]  left-0 right-0 m-auto footer-shadow-shape  w-[300px] h-0.1 rounded-full"></span>
        </footer>
    );
};

export default Footer;