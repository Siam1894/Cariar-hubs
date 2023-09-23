import { useEffect, useState } from "react";
import Company from "./Company";


const Applied = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/public/jobs.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <div>
            <div className="bg-blue-50 flex gap-72 mx-auto">
                <div className="items-start">
                    <img src="/images/bg1.png" alt="" />
                </div>
                <div className="text-center justify-center items-center ">
                    <h1 className="text-[40px] font-extrabold text-black mt-16">Applied Jobs</h1>
                </div>
                <div className="items-end">
                    <img className="-mt-16 " src="/images/bg2.png" alt="" />
                </div>
            </div>
            <div className="p-10 px-40 mx-auto">
                {
                    data.map(data => <Company key={data.id} data={data}></Company>)
                }
            </div>

            
        </div>
    );
};

export default Applied;