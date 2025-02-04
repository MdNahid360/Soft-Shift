import ContainerWrapper from './ContainerWrapper';
const Hero = () => {
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(-50deg, #06020ed8, #23233890), url("/assets/banner1.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed"
            }}
            className='bg-[#020f12] flex items-center justify-center text-light md:min-h-[800px] min-h-screen py-12 overflow-hidden'>
            <ContainerWrapper>
                <div className="">
                    <div className="grid-cols-3">
                        <div className='text-center'>
                            <h4 className="text-lg">Were help </h4>
                            <h1 className="mt-2 animate__animated animate__rubberBand lg:text-8xl md:text-5xl text-4xl font-bold lg:w-auto md:w-[600px] m-auto ">Take your business to the next label</h1>

                            <p className="text-muted mt-8 mx-auto lg:w-[800px] w-auto">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil totam, quam ab commodi architecto non. Illum quo suscipit repellendus voluptas. Magnam nisi, natus ab consequatur blanditiis aspernatur ratione. Architecto, doloribus!
                            </p>
                            <br />
                            <button className="animate__animated animate__bounceInUp shadow__btn rounded-lg px-6 h-[45px] w-[200px] text-lg duration-300">
                                VIEW WORKS
                            </button>
                        </div>
                    </div>
                </div>
            </ContainerWrapper>

        </div>
    );
};

export default Hero;