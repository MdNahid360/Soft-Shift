import JobList from "@/components/careers/JobList";
import CommonHeader from "@/components/shared/CommonHeader";
import ContainerWrapper from "@/components/shared/ContainerWrapper";
import { jobData } from "@/data/careersData";
import Image from "next/image";

const CareersPage = () => {

  return (
    <section className="team-bg ">
      <CommonHeader
        title="Join Our Team."
        banner="/assets/banner4.jpg"
        pathTrack={true}
      />
      <div className="py-12">
        <ContainerWrapper>
          <div className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-6">
            {!jobData.length > 0 ? (
              <div className="flex flex-col items-center justify-center text-center p-8  border-gray-900 rounded-lg shadow-lg bg-transparent">
                <Image
                  src="/assets/no-job2.png"
                  alt="No jobs available"
                  className="w-32 h-32 mb-4"
                  width={500}
                  height={500}
                />
                <h1 className="text-2xl font-semibold text-gray-400">
                  No Job Openings at the Moment
                </h1>
                <p className="text-gray-600 mt-2">
                  Stay tuned! New job opportunities will be available soon.
                </p>
              </div>
            ) : (
              jobData?.map((job, index) => <JobList key={index} index={index} job={job} />)
            )}
          </div>

        </ContainerWrapper>
      </div>
    </section>
  );
};

export default CareersPage;