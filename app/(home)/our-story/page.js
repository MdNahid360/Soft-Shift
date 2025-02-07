import Contact from '@/components/Contact';
import Achievement from '@/components/ourStory/Achievement';
import StoryHeader from '@/components/ourStory/StoryHeader';
import ContainerWrapper from '@/components/shared/ContainerWrapper';
import Title from '@/components/shared/Title';
import React from 'react';

const StoryPpage = () => {
    return (
        <div className='story-bg'>
         <header
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/banner5.jpg")`,
                }}
                className="bg-fixed bg-cover md:h-[500px] h-[360px] overflow-hidden flex items-center justify-center">
                <ContainerWrapper>
                    <h1 className="lg:text-6xl md:text-5xl text-3xl lg:w-[900px] md:w-[650px] w-auto m-auto text-center font-bold animate__animated animate__rubberBand">
                      Our Story
                    </h1>
                </ContainerWrapper>
            </header>
            <figure>
                <ContainerWrapper>
                    <StoryHeader />
                    <Achievement />
                </ContainerWrapper>
                <br />
                <Contact />
            </figure>
        </div>
    );
};

export default StoryPpage;