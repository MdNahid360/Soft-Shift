'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

import ContainerWrapper from "./shared/ContainerWrapper";
import Title from "./shared/Title";
import TeamCard from "./TeamCard";
import { teamData } from "@/data/teamData";

const OurTeamSection = () => {
    return (
        <div className="pb-12">
            <ContainerWrapper>
                <Title position={"center"} move="fade-up" text="Our Team" shadow={true} />
                <p className="text-center mt-4 md:w-[600px] m-auto">
                    Our team is made up of a group of talented individuals who are passionate about what they do.
                </p>
                <br /><br />
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    freeMode={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        1024: { slidesPerView: 4 },
                        768: { slidesPerView: 3 },
                        480: { slidesPerView: 2 },
                        360: { slidesPerView: 2 },
                        340: { slidesPerView: 2 },
                        320: { slidesPerView: 2 },
                        300: { slidesPerView: 2 },
                        280: { slidesPerView: 2 },
                    }}
                    modules={[FreeMode, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {teamData?.map(item => (
                        <SwiperSlide className='pb-16' key={item?.id}>
                            <TeamCard itm={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </ContainerWrapper>
            <br /><br />
        </div>
    );
};

export default OurTeamSection;
