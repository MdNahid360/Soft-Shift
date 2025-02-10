import Contact from "@/components/Contact";
import OurTeamSection from "@/components/OurTeam";
import OurPortfolio from "@/components/portfolio/OurPortfolio";
import Services from "@/components/services/Services";
import Hero from "@/components/shared/Hero";
import WhyChoseUs from "@/components/WhyChoseUs";
import { projects } from "@/data/projects";

export default function Home() {

  return (
    <main className=" overflow-hidden">
      <Hero />
      <WhyChoseUs />
      <Services />
      <OurPortfolio projects={projects} />
      <OurTeamSection />
      <Contact />
      <br /><br />
    </main>
  );
}
