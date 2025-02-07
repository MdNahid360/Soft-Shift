import Image from "next/image";

const TeamCard = ({ itm }) => {

    return (
        <div className="bg-[#36324d3b] group shadow-lg backdrop-blur-lg overflow-hidden team-card md:p-4 p-2">
            <div className="relative team-img overflow-hidden">
                <Image
                    src={itm?.img}
                    alt={itm.name}
                    width={300}
                    height={300}
                    className="w-full  lg:h-[310px] md:h-[220px] h-[160px] object-cover"
                />

                <div className="absolute team-img flex items-end justify-center p-4 top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-[#000000] to-[#0000]  opacity-0 group-hover:opacity-100 duration-300 ">
                    <ul className="mt-3 flex duration-500 group-hover:translate-y-0 translate-y-10 text-blue-600 gap-4 justify-start ">
                        {
                            itm?.socialLinks?.map((itm) => <li key={itm?.id}>
                                <a
                                    href={itm?.link}
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-blue-500 transition hover:text-primary dark:text-teal-500 dark:hover:text-teal-500/75"
                                >
                                    <Image
                                        className="w-6 duration-300 hover:scale-[1.2]"
                                        src={itm?.icon}
                                        alt="icon"
                                        width={300}
                                        height={300}
                                    />
                                </a>
                            </li>)
                        }
                    </ul>

                </div>
            </div>
            <div className="pt-4">
                <h1 className="md:text-2xl text-sm font-bold text-center">{itm?.name}</h1>
                <p className="md:text-md text-xs text-center text-muted">{itm?.role}</p>
            </div>
        </div>
    );
};

export default TeamCard;