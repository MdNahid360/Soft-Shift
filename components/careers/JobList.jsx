import { Building, Building2, Calendar, UserRoundCheck } from "lucide-react";
import Link from "next/link";

const JobList = ({ index, job }) => {

  return (
    <div className="">
      <div data-aos="fade-up" className='lg:flex relative hidden items-center justify-between min-h-[50px] py-2 md:min-h-[70px] gap-2 px-4 border border-primary text-sm rounded-lg duration-300 bg-[#1b1f33] hover:bg-[#131624]'>
        <h1 className="text-md  w-[220px] font-bold">{job?.title}</h1>

        <div className=" w-[220px] flex items-center gap-2">
          <Building2 strokeWidth={1} />
          <span>{job?.location}</span>
        </div>

        <div className="flex  w-[186px] items-center gap-2">
          <UserRoundCheck strokeWidth={1} />
          <span>{job?.type}</span>
        </div>

        <div className="flex  w-[210px] items-center gap-2">
          <Calendar strokeWidth={1} />
          <span>{job?.applyDuration}</span>
        </div>
        <div className="flex items-center gap-2">
          <Link href={`#`} className="btn btn-primary hover:bg-dark_primary duration-300 bg-light_primary px-4 py-1 rounded-full">Apply</Link>
          <Link href={`/careers/${job?.id}`} className="btn btn-primary hover:bg-gray-800 duration-300 bg-gray-700 px-4 py-1 rounded-full">Learn More</Link>
        </div>
      </div>
      {/* small view */}
      <div className="lg:hidden  relative w-full border border-solid border-gray-700 bg-gray-900 text-white rounded-2xl p-4 transition-all duration-500 col-span-12  xl:p-7   lg:col-span-3 md:col-span-6 ">
        <h4 className="text-xl font-semibold mb-2 capitalize transition-all duration-500 ">
          {job?.title}
        </h4>

        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <Building strokeWidth={1} />
            <span>{job?.location}</span>
          </li>
          <li className="flex items-center gap-2">
            <UserRoundCheck strokeWidth={1} />
            <span>{job?.type}</span>
          </li>
          <li className="flex items-center gap-2">
            <Calendar strokeWidth={1} />
            <span>{job?.applyDuration}</span>
          </li>
        </ul>
        <br />

        <div className="flex items-center gap-2">
          <Link href={`#`} className="btn btn-dark_primary hover:bg-primary duration-300 bg-light_primary px-4 py-2 rounded">Apply</Link>
          <Link href={`/careers/${job?.id}`} className="btn  hover:bg-gray-800 duration-300 bg-gray-700 px-4 py-2 rounded">Learn More</Link>
        </div>
        <div className="absolute right-8 opacity-[0.1] text-[#1a61caa7] top-4 text-[130px] font-bold">{index + 1}</div>
      </div>
    </div>
  );
};

export default JobList;
