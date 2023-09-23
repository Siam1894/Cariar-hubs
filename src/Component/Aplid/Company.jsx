

const Company = ({data}) => {
    const {logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = data;
    return (
        <div className="border rounded-lg my-4 shadow">
            <div className="flex gap-32 p-6">
                <div className=" bg-gray-100 w-[250px] p-4">
                    <img className="justify-center" src={logo} alt="" />
                </div>
                <div className="items-center w-[400px]">
                    <h1 className="text-2xl font-bold">{job_title}</h1>
                    <p className="mt-3">{company_name}</p>
                    <div className="flex gap-6 mt-3">
                        <button className="btn btn-outline btn-primary">{remote_or_onsite}</button>
                        <button className="btn btn-outline btn-primary">{job_type}</button>
                    </div>
                    <div className="flex gap-6 mt-3">
                        <p className="flex"><img src="/icons/location2.png" alt="" />{location}</p>
                        <p className="flex"><img src="/icons/money.png" alt="" />{salary}</p>
                    </div>
                </div>
                <div>
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
            
        </div>
    );
};

export default Company;