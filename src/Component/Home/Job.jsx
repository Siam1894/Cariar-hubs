import { Link } from "react-router-dom";


const Job = ({job}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary} = job;
    return (
        <div>
            <div className="border p-6 shadow rounded-lg">
            <img className="mt-3" src={logo} alt="" />
            <h2 className="text-2xl font-bold mt-3">{job_title}</h2>
            <p className="mt-3">{company_name}</p>
           <div className="flex gap-4 mt-3">
           <button className="btn btn-outline btn-primary">{remote_or_onsite}</button>
           <button className="btn btn-outline btn-primary">{job_type}</button>
           </div>
            <div className="flex gap-4 mt-3">
             <p className="flex"><img src="/icons/Location2.png" alt="" />{location}</p>
             <p className="flex"><img src="/icons/money.png" alt="" />{salary}</p>
            </div>
            <Link to={`/job/${id}`}>
            <button className="btn btn-primary mt-3">View Details</button>
            </Link>
           </div>
        
        </div>

    );
};

export default Job;