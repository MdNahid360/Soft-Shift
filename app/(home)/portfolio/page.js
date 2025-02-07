import Contact from '@/components/Contact';
import OurPortfolio from '@/components/portfolio/OurPortfolio';
import ContainerWrapper from '@/components/shared/ContainerWrapper'

const portfolioPage = () => {
     const projects = [
        {
            id: 1,
            imageHref: "https://i.ibb.co/64WfFPt/image-01.jpg",
            category: "branding",
            title: "test",
            button: "View Details",
            buttonHref: "#"
        },
        {
            id: 2,
            imageHref: "https://i.ibb.co/PT7ghRs/image-06.jpg",
            category: "marketing",
            title: "fdgd Agency",
            button: "View Details",
            buttonHref: "#"
        },
        {
            id: 3,
            imageHref: "https://i.ibb.co/vkt8C1P/image-02.jpg",
            category: "marketing",
            title: "Nahid Agency",
            button: "View Details",
            buttonHref: "#"
        },
        {
            id: 4,
            imageHref: "https://i.ibb.co/3FKqS1G/image-03.jpg",
            category: "development",
            title: "sss Agency",
            button: "View Details",
            buttonHref: "#"
        },
        {
            id: 5,
            imageHref: "https://i.ibb.co/m6dq2fX/image-04.jpg",
            category: "design",
            title: "ddd Agency",
            button: "View Details",
            buttonHref: "#"
        },
        {
            id: 6,
            imageHref: "https://i.ibb.co/mCPjBsH/image-05.jpg",
            category: "bb",
            title: "Creative Agency",
            button: "View Details",
            buttonHref: "#"
        }
    ];
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