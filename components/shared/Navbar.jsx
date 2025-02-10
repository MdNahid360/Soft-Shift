'use client'

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Collapse, Dropdown, Menu } from "antd";
import { AlignJustify, ChevronDown, X } from "lucide-react";
import ContainerWrapper from "./ContainerWrapper";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsMobileMenuOpen(false);
            }
        };

        const handleScroll = () => {
            const scrollThreshold = pathname === "/" ? 800 : 100; // Check the route and set threshold
            setIsScrolled(window.scrollY > scrollThreshold);
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [pathname]);

    const navItems = [
        {
            name: "Home",
            href: "/",
            isDropdown: false
        },
        {
            name: "About",
            href: "/",
            isDropdown: true,
            menu: [
                { name: "Our Story", href: "/our-story" },
                { name: "Our team", href: "/team" },
            ]
        },
        {
            name: "Portfolio",
            href: "/portfolio",
            isDropdown: false,
        },
        {
            name: "Blog",
            href: "/blog",
            isDropdown: false
        },
        {
            name: "Contact Us",
            href: "/#contact",
            isDropdown: false
        },
        {
            name: "Careers",
            href: "/careers",
            isDropdown: false
        },

    ];

    // const renderDropdownMenu = (menuItems) => (
    //     <Menu className="!mt-3 !p-2">
    //         {menuItems.map((item) => (
    //             <Menu.Item
    //                 key={item.name}>
    //                 <motion.div
    //                     whileHover={{ x: 0 }}>
    //                     <Link
    //                         href={item.href}
    //                         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    //                         className={`text-light transition duration-300 ${pathname === item.href ? "text-primary" : ""}`}
    //                     >
    //                         {item.name}
    //                     </Link>

    //                 </motion.div>
    //             </Menu.Item>
    //         ))}
    //     </Menu>
    // );

    const renderDropdownMenu = (menuItems) => (
        <Menu className="!mt-3 !bg-[#292444e5] !min-w-[140px] !rounded-md !p-2 !z-[9000]">
            {menuItems.map((item) => (
                <Menu.Item key={item.name}>
                    <motion.div whileHover={{ x: 0 }}>
                        <Link href={item.href}>
                            <div className={`px-2 py-1 text-start transition duration-300 
                            ${pathname === item.href ? "text-light_primary" : "text-white"}`}
                            >
                                {item.name}
                            </div>
                        </Link>
                    </motion.div>
                </Menu.Item>
            ))}
        </Menu>
    );


    return (
        <nav className="navbar">
            <div className={`${isScrolled ? 'bg-gradient-to-r from-[#161123]  to-[#1515409c] text-light fixed backdrop-blur duration-300'
                : 'bg-transparent duration-300 absolute text-light'} border-gray-700 h-[80px] flex items-center left-0 right-0 top-0 w-full nav !z-[10000]`}>
                <ContainerWrapper>
                    <div className="flex items-center justify-between ">
                        <Link href="/" className="logo">
                            <Image
                                src="/assets/logo.png"
                                width={500}
                                height={500}
                                alt="logo"
                                className="md:w-[170px] w-[120px] h-[40px]"
                            />
                        </Link>
                        <button className="lg:hidden block" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            <AlignJustify className="text-light" strokeWidth={1} size={30} />
                        </button>

                        <div className="lg:flex hidden items-center gap-6">
                            {navItems.map((item) => (
                                <div key={item.name} className="relative">
                                    {!item.isDropdown ? (
                                        <motion.div>
                                            <Link
                                                href={item.href}
                                                className={`hover:text-muted transition duration-300 ${pathname === item.href ? "text-light_primary font-bold" : "text-light"}`}
                                            >
                                                {item.name}
                                            </Link>

                                        </motion.div>
                                    ) : (
                                        <Dropdown
                                            overlay={renderDropdownMenu(item.menu)} trigger={["hover"]}
                                            className="custom-dropdown"
                                        >
                                            <motion.button
                                                className={`flex items-center gap-1 hover:text-muted transition duration-300 
            ${item.menu.some(subItem => pathname === subItem.href) ? "text-light_primary font-bold" : "text-light"}`}
                                            >
                                                {item.name} <ChevronDown strokeWidth={1.5} />
                                            </motion.button>
                                        </Dropdown>

                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </ContainerWrapper>
            </div>

            <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : '-100%' }}
                transition={{ duration: 0.3 }}
                className="fixed !h-screen lg:hidden top-0 left-0 right-0 bottom-0 bg-primary p-4 !z-[10000]"
            >


                <div className="flex flex-col nav text-4xl space-y-4 relative z-[10000]">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="absolute text-light right-1 !z-[10000]">
                        <X size={40} />
                    </button>
                    {navItems.map((item) => (
                        <div key={item.name} className="relative">
                            {!item.isDropdown ? (
                                <motion.div
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    whileHover={{ x: 3 }}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                        className={`text-light transition duration-300 ${pathname === item.href ? "text-dark" : ""}`}>
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ) : (
                                <Collapse ghost expandIconPosition="end">
                                    <Collapse.Panel key={item.name} header={item.name}>
                                        <div className="flex flex-col space-y-2">
                                            {item.menu.map((subItem) => (
                                                <motion.div
                                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                    key={subItem.name} whileHover={{ x: 3 }}>
                                                    <Link
                                                        href={subItem.href}
                                                        className={`pl-4 text-2xl text-light transition duration-300 ${pathname === subItem.href ? "text-dark" : ""}`}>
                                                        {subItem.name}
                                                    </Link>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </Collapse.Panel>
                                </Collapse>
                            )}
                        </div>
                    ))}
                </div>


                {/* Zoom-in Menu Text */}
                <div className="h-full absolute top-0 left-0 bottom-0 right-0 flex flex-col justify-center items-end">
                    <motion.h1
                        initial={{ scale: 0.5, opacity: 0, rotate: 0 }}
                        animate={{
                            scale: isMobileMenuOpen ? 1 : 0.5,
                            opacity: isMobileMenuOpen ? 0.2 : 0,
                            rotate: isMobileMenuOpen ? 90 : 0
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="text-8xl mr-[-70px] seaside font-bold text-start"
                    >
                        MENU
                    </motion.h1>

                </div>
            </motion.div>
        </nav>

    );
};

export default Navbar;
