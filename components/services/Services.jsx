import { serviceData } from "@/data/sercive";
import ContainerWrapper from "../shared/ContainerWrapper";
import Title from "../shared/Title";
import ServiceCard from "./ServiceCard";

const Services = () => {

    return (
        <div className=" text-white py-12 ">
            <ContainerWrapper>
                <div >
                    <span
                        className="px-3 bg-primary w-[140px] text-center flex items-center mb-3 justify-center m-auto text-light py-1 rounded-full">
                        Our Services
                    </span>
                    <Title
                        text={"Drive Innovation with Our Dedicated Services"}
                        move={"fade-up"}
                        position={"center"}
                        size={'md:w-[500px] w-full'}
                        shadow={true}
                    />
                </div>

                <br />

                <div className="grid md:grid-cols-3 mt-6 gap-4 z-10">
                    {
                        serviceData?.map(itm => <ServiceCard key={itm.id} itm={itm} />)
                    }
                </div>

            </ContainerWrapper>
        </div>
    );
};

export default Services;