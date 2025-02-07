import Contact from "@/components/Contact";
import OurPortfolio from "@/components/portfolio/OurPortfolio";
import Services from "@/components/services/Services";
import Hero from "@/components/shared/Hero";
import WhyChoseUs from "@/components/WhyChoseUs";

export default function Home() {
   const projects = [
        {
            id: 1,
            imageHref: "https://i.ibb.co/64WfFPt/image-01.jpg",
            category: "branding",
            title: "Creative Agency asdfas asdf asdfasdf sdafasdfasdf asdf asd fasd fasd fasdf asfasd",
            button: "View Details",
            buttonHref: "#"
        },
        {
            id: 2,
            imageHref: "https://i.ibb.co/PT7ghRs/image-06.jpg",
            category: "marketing",
            title: "Creative Agency",
            button: "View Details",
            buttonHref: "#"
        },
        {
            id: 3,
            imageHref: "https://i.ibb.co/vkt8C1P/image-02.jpg",
            category: "marketing",
            title: "Creative Agency",
            button: "View Details",
            buttonHref: "#"
        },
        {
            id: 4,
            imageHref: "https://i.ibb.co/3FKqS1G/image-03.jpg",
            category: "development",
            title: "Creative Agency",
            button: "View Details",
            buttonHref: "#"
        },
        {
            id: 5,
            imageHref: "https://i.ibb.co/m6dq2fX/image-04.jpg",
            category: "design",
            title: "Creative Agency",
            button: "View Details",
            buttonHref: "#"
        },
        {
            id: 6,
            imageHref: "https://i.ibb.co/mCPjBsH/image-05.jpg",
            category: "marketing",
            title: "Creative Agency",
            button: "View Details",
            buttonHref: "#"
        }
    ];
  return (
    <main className=" overflow-hidden">
      <Hero />
      <WhyChoseUs />
      <Services />
      <OurPortfolio projects={projects}/>
      <Contact />
      <br /><br />
    </main>
  );
}
