

const Featur = ({job}) => {
    const {logo, category_name, availability } = job;
    return (
        <div className="border gap-6 p-6 bg-blue-100 rounded-lg">
            <img src={logo} alt="" />
            <h1 className="text-2xl font-bold text-black mt-4">{category_name}</h1>
            <p className="mt-4">{availability}</p>
        </div>
    );
};

export default Featur;