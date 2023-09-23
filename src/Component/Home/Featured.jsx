import { useEffect, useState } from "react";
import Job from "./Job";



const Featured = () => {
    const [jobs, setJobs] = useState([]);
    const [datalength, setDatalength] = useState(4)
    useEffect(() => {
        fetch('/public/jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div className="mt-10">
            <div>
            <h2 className="text-center text-[48px] font-extrabold">Featured Jobs</h2>
            <p className="text-center font-semibold">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  justify-center items-center gap-4 p-10">
                {
                    jobs.slice(0, datalength).map(job => <Job key={jobs.id} job={job}></Job>)
                }

            </div>
            <div className={datalength === jobs.length &&'hidden' }><button onClick={() => setDatalength(jobs.length)} className="btn btn-primary">See All Jobs</button></div>
        </div>
    );
};

export default Featured;