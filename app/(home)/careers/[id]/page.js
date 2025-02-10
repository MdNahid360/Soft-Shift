import Contact from "@/components/Contact";
import CommonHeader from "@/components/shared/CommonHeader";
import ContainerWrapper from "@/components/shared/ContainerWrapper";
import { jobData } from "@/data/careersData";
import Image from "next/image";
import Link from "next/link";

const CareersPage = ({ params: { id } }) => {
    const findJob = jobData?.find(job => job?.id === id);
    return (
        <div>
            <CommonHeader title={"Job Detail"} banner="/assets/banner4.jpg"  />
            <ContainerWrapper>
                <div className="grid lg:grid-cols-3 gap-6 py-12">
                    <div className="lg:col-span-2 ">
                        <h1 className="md:text-4xl text-2xl font-bold mb-4">{findJob?.title}</h1>
                        <ul className="space-y-1">
                            <li>
                                <span className="font-semibold">Location : </span>
                                <span className="text-muted">{findJob?.location}</span>
                            </li>
                            <li>
                                <span className="font-semibold">Type : </span>
                                <span className="text-muted">{findJob?.type}</span>
                            </li>
                            <li>
                                <span className="font-semibold">Office Time : </span>
                                <span className="text-muted">{findJob?.officeTime}</span>
                            </li>
                            <li>
                                <span className="font-semibold">Job ID : </span>
                                <span className="text-muted">{findJob?.jobId}</span>
                            </li>
                            <li>
                                <span className="text-muted">Apply before </span>
                                <span className="font-semibold"> {findJob?.applyDuration}</span>
                            </li>
                        </ul>
 
                        <br />
                        {/* Responsibilities */}
                        <section>
                            <h1 className="font-semibold">Responsibilities :</h1>
                            <p className="text-muted">
                                {findJob?.responsibilities}
                            </p>
                        </section>
                     
                        {/* Skills */}
                        <br />
                        <section>
                            <h1 className="font-semibold">Skills :</h1>
                            <ul className="text-muted">
                                {findJob?.skills?.map(skill => <li  key={skill} className="">{skill} . </li>)}
                            </ul>
                        </section>

                        {/* qualifications */}
                        <br />
                        <section>
                            <h1 className="font-semibold">Qualifications :</h1>
                            <ul className="text-muted space-y-1">
                                {findJob?.qualifications?.map(skill => <li  key={skill} className="list-disc ml-2 ">{skill} , </li>)}
                            </ul>
                        </section>
                        
                        {/* benefits */}
                        <br />
                        <section>
                            <h1 className="font-semibold">Benefits :</h1>
                            <ul className="text-muted space-y-1">
                                {findJob?.benefits?.map(skill => <li  key={skill} className="list-disc ml-2 ">{skill} , </li>)}
                            </ul>
                        </section>
                     {findJob?.experience !== "" &&   
                        <div className="my-4">
                                <span className="font-semibold">Experience : </span>
                                <span className="text-muted">{findJob?.experience}</span>
                            </div>}

                    </div>

                    <div>
                        <div className="space-y-4 sticky top-[100px]">
                              <Link href={`/careers/${id}`}>
                        <div className="lg:w-full md:w-[200px] w-full  bg-primary hover:bg-dark_primary duration-300 text-center flex justify-center items-center text-light py-2 rounded ">Apply Now</div>
                        </Link>
                        <Image
                            src="/assets/pic2.jpg"
                            alt="No jobs available"
                            className="w-full h-[240px] lg:block hidden object-cover rounded mb-4"
                            width={500}
                            height={500}
                        />
                      </div>
                    </div>
            </div>
            </ContainerWrapper>


            <Contact />
        </div>
    );
};

export default CareersPage;