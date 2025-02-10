import Contact from '@/components/Contact';
import CommonHeader from '@/components/shared/CommonHeader';
import ContainerWrapper from '@/components/shared/ContainerWrapper';
import Title from '@/components/shared/Title';
import TeamCard from '@/components/TeamCard';
import { teamData } from '@/data/teamData';
import React from 'react';

const TeamPage = () => {
   
    return (
        <div className='team-bg relative overflow-x-hidden'>
            <CommonHeader title="Meet Our Team Members" banner="/assets/team.jpg" />

            <figure className='py-12'>
                <ContainerWrapper>
                    <Title text="Our Team" move={"fade-up"} position={"center"} shadow={true}  />
                    <p className="text-muted md:w-[800px] w-auto m-auto text-center mt-3">
                        Our team is a dynamic group of passionate professionals committed to innovation and excellence. Together, we strive to achieve remarkable milestones through collaboration and dedication.
                  </p>
                  <br />
                    <div className="md:mt-12 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  md:gap-4 gap-2 mb-6">
                        {
                            teamData?.map(item => <TeamCard key={item.id} itm={item} />)
                        }
                    </div>
                </ContainerWrapper>
                <br /> <br /> <br />
                <Contact />
                  <span className="absolute top-[40%]  -left-10 m-auto shadow-team  w-1 h-2 rounded-full"></span>
            <span className="absolute top-[30%]  -right-10 m-auto shadow-team  w-1 h-2 rounded-full"></span>
            </figure>
        </div>
    );
};

export default TeamPage;
