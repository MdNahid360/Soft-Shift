import ContainerWrapper from "./shared/ContainerWrapper";
import Title from "./shared/Title";

const Services = () => {

    return (
        <div className="border py-12">
            <ContainerWrapper>
                <span
                    data-aos={"fade-up"}
                    className="px-3 bg-primary w-[140px] text-center flex items-center mb-3 justify-center m-auto text-light py-1 rounded-full">
                    Our Services
                </span>
                <Title
                    text={"Drive Innovation with Our Dedicated Services"}
                    move={"fade-up"}
                    position={"center"}
                    size={'md:w-[500px] w-full'}
                />

                <br />
            </ContainerWrapper>
        </div>
    );
};

export default Services;