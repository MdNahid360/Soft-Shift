"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const progress = (scrollTop / scrollHeight) * 100;
            setScrollProgress(progress);
            setIsVisible(scrollTop > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div
            className={`fixed bottom-6 right-6 z-50 transition-opacity ${isVisible ? "opacity-100" : "opacity-0"
                }`}
        >
            <button
                onClick={scrollToTop}
                className="relative md:w-16 w-14 md:h-16 h-14 flex items-center justify-center bg-transparent text-primary backdrop-blur-sm rounded-full shadow-lg  transition-all"
            >
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <circle
                        className="text-gray-900"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                    />
                    <circle
                        className="text-primary"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                        strokeDasharray="251.2"
                        strokeDashoffset={251.2 - (251.2 * scrollProgress) / 100}
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                    />
                </svg>
                <ArrowUp className="w-6 h-6 text-light_primary" />
            </button>
        </div>
    );
};

export default ScrollToTop;
