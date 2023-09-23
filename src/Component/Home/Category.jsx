import { useEffect, useState } from "react";
import Featur from "./Featur";


const Category = () => {
    const [jobs, setData ] = useState([]);
    useEffect(() => {
        fetch('/public/categories.json')
        .then(res => res.json())
        .then(Data => setData(Data))
    },[])
    
    return (
        <div>
                    <div className="mt-12">
            <h2 className="text-center text-[48px] font-extrabold">Job Category List</h2>
            <p className="text-center font-semibold">Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 p-10">
            {
                jobs.map(job => <Featur key={jobs.id} job={job}></Featur>)
            }
          
        </div>
        </div>
    );
};

export default Category;