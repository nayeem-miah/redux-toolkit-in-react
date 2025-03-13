import Banner from "../../Components/HomePage/Banner";
import CountdownTimer from "../../Components/HomePage/CountdownTimer";
import RecentProduct from "../../Components/HomePage/RecentProduct";

const Home = () => {
    return (
        <div className="">
            <Banner />
            <div className="my-10">
                <CountdownTimer />
                <RecentProduct />
            </div>
        </div>
    )
}
export default Home;

