import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Jobsdetails = () => {
    const handleApplybtn = () =>{
        toast('You have applied successfully');
    }
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInd = parseInt(id);
    const job = jobs.find(job => job.id === idInd);
    console.log(job)
    return (
        <div className="px-14 mt-10">
            <div className="grid grid-cols-4 gap-4">
                <div className="md:col-span-3 p-4">
                    <p className="mb-3"><span className="font-bold">Job description:</span> {job.job_description}</p>
                    <p className="mb-3"><span className="font-bold">Job responsibility:</span> {job.job_responsibility}</p>
                    <p className="mb-3"><span className="font-bold">Educational requirements:</span> {job.educational_requirements}</p>
                    <p><span className="font-bold">Experiences:</span> {job.experiences}</p>
                    
                </div>
                <div className="p-4 bg-blue-100 rounded-lg">
                    <h2 className="text-2xl font-bold border-b-2 mb-3">Job detail</h2>
                    <h1 className="flex mb-2"><img className="w-5 h-5" src="/icons/money.png" alt="" /><span className="font-bold">Salary:</span> {job.salary} (per month)</h1>
                    <p className="flex"><img className="w-5 h-5" src="/icons/calendar.png" alt="" /><span className="font-bold">Job-title:</span> {job.job_title}</p>
                    <h1 className="font-bold text-2xl border-b-2 mt-5 mb-3">Contact Information</h1>
                    <p className="flex mb-2"><img className="w-5 h-5" src="/icons/phone.png" alt="" /><span className="font-bold">Phone:</span> {job.contact_information.phone}</p>
                    <p className="flex mb-2"><img className="w-5 h-5" src="/icons/email.png" alt="" /><span className="font-bold">Email:</span> {job.contact_information.email}</p>
                    <p className="flex mb-2"><img className="w-6 h-6" src="/icons/Location.png" alt="" /><span className="font-bold">Address:</span> {job.contact_information.address}</p>
                    <button onClick={handleApplybtn} className="btn btn-primary w-full">Apply Now</button>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default Jobsdetails;