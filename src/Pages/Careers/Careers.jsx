import { Link } from "react-router-dom";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import useJobs from "../../Hooks/useJobs";

const Careers = () => {
    const { allJobs } = useJobs();
    return (
        <section>
            <SectionHeader title="Careers" description="Discover new opportunities" />

            <div className="my-20 grid grid-cols-12 gap-10">
                {
                    allJobs?.map((job) => <div key={job?._id} className="col-span-full lg:col-span-4 card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-primary">{job?.position}</h2>
                            <p className='font-semibold text-sm'>By {job?.company_name}</p>
                            <p>{job?.job_type}</p>
                            <p>{job?.working_hours}</p>
                            <div className="card-actions justify-end">
                                <Link className='myBtn' to={`/dashboard/apply-job-post/${job?._id}`}>Apply</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default Careers;