import Contact from '@/components/Contact';
import Achievement from '@/components/ourStory/Achievement';
import StoryHeader from '@/components/ourStory/StoryHeader';
import CommonHeader from '@/components/shared/CommonHeader';
import ContainerWrapper from '@/components/shared/ContainerWrapper';
import Title from '@/components/shared/Title';
import React from 'react';

const StoryPpage = () => {
    return (
        <div className='story-bg'>
              <CommonHeader title="Our Story" banner="/assets/banner5.jpg" />
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