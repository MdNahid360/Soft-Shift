import Contact from '@/components/Contact';
import OurPortfolio from '@/components/portfolio/OurPortfolio';
import ContainerWrapper from '@/components/shared/ContainerWrapper'
import { projects } from '@/data/projects';

const portfolioPage = () => {
   
  return (
      <div>
         <header
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/banner1.png")`,
                }}
                className="bg-fixed bg-cover md:h-[500px] h-[360px] overflow-hidden flex items-center justify-center">
                <ContainerWrapper>
                    <h1 className="lg:text-6xl md:text-5xl text-3xl lg:w-[900px] md:w-[650px] w-auto m-auto text-center font-bold animate__animated animate__rubberBand">
                      Explore our latest projects showcasing innovation and expertise.
                    </h1>
              </ContainerWrapper>

            </header>

          <OurPortfolio title="Project Showcase" subtitle={"Portfolio"} projects={projects} description={""} isSearch={true} allProject={true} />
          
          <br /><br /><br />
          <Contact />
    </div>
  )
}


export default portfolioPage;