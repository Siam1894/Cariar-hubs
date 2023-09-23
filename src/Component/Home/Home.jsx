import Category from "./Category";
import Featured from "./Featured";
import Banner from "./banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Featured></Featured>
        </div>
    );
};

export default Home;