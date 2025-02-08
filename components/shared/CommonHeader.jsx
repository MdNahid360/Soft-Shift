"use client";

import { Breadcrumb } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContainerWrapper from "./ContainerWrapper";

const CommonHeader = ({ title, banner, heighLarge, heightSmall, pathTrack }) => {
    const pathname = usePathname();
    const pathSegments = pathname.split("/").filter(segment => segment);

    const breadcrumbs = pathSegments.map((segment, index) => {
        const path = "/" + pathSegments.slice(0, index + 1).join("/");
        return {
            path: index !== pathSegments.length - 1 ? path : "", // Ensure path is always a string
            breadcrumbName: segment.charAt(0).toUpperCase() + segment.slice(1),
        };
    });

    return (
        <header
            style={{
                backgroundImage: `linear-gradient(#000000ba, #050524), url("${banner}")`,
            }}
            className={`common-header bg-fixed bg-cover md:h-[${heighLarge ?? 500}px] h-[${heightSmall ?? 360}px] overflow-hidden flex flex-col items-center justify-center text-white`}
        >
            <ContainerWrapper>
                <h1 className="lg:text-6xl md:text-5xl text-3xl lg:w-[900px] md:w-[650px] w-auto m-auto text-center font-bold animate__animated animate__rubberBand">
                    {title}
                </h1>

                {pathTrack && (
                    <div className="mt-3 !flex !items-center !justify-center">
                        {breadcrumbs.length > 0 && (
                            <Breadcrumb className="mt-2  h-[30px] overflow-hidden !flex !items-center !justify-center ">
                                <Breadcrumb.Item>
                                    <Link href="/" className="md:text-xl text-lg !text-blue-500 hover:text-blue-600">
                                        Home
                                    </Link>
                                </Breadcrumb.Item>
                                {breadcrumbs.map((breadcrumb, index) => (
                                    <Breadcrumb.Item key={index}>
                                        {breadcrumb.path ? (
                                            <Link href={breadcrumb.path} className="md:text-xl text-lg !text-blue-500 hover:text-blue-600">
                                                {breadcrumb.breadcrumbName}
                                            </Link>
                                        ) : (
                                            <span className="md:text-xl text-lg !text-white hover:text-white">
                                                {breadcrumb.breadcrumbName}
                                            </span>
                                        )}
                                    </Breadcrumb.Item>
                                ))}
                            </Breadcrumb>
                        )}
                    </div>
                )}
            </ContainerWrapper>
        </header>
    );
};

export default CommonHeader;
