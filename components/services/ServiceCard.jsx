import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ itm }) => {
    return (
        <div className="bg-gradient-to-r from-[#161625f4] to-[#23233449] backdrop-blur-sm p-6 rounded-xl">
            <h1 className="text-2xl font-bold">{itm?.name}</h1>
            <Image
                src={itm?.icon}
                className="mt-4 w-20 h-20 object-cover rounded-lg border border-primary p-1"
                alt="icon"
                width={200}
                height={200}
            />
            <br />
            <p className="text-muted">{itm?.description}</p>
            <br />
            <Link
                href={`/service-details/${itm?.id}`}
                className="mt-3 px-4 py-2 duration-300 bg-[#1b1f335e] hover:bg-[#1b1f33e3] backdrop-blur-md">
                Read more
            </Link>
        </div>
    );
};

export default ServiceCard;