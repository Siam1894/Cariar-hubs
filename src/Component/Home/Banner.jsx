
const Banner = () => {
    return (
        <div className="flex gap-96 bg-blue-50 mx-auto justify-center">
            <div className="">
                <h1 className="font-extrabold text-[60px] mt-4 text-black">One Step <br />Closer To Your <br /><span className="text-blue-400">Dream Job</span></h1>
                <p className="font-semibold mt-4 ">Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className="btn btn-primary mt-4">Get Started</button>
            </div>
            <div>
                <img className="w-[500px] h-[500px]" src="../../../images/user.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;