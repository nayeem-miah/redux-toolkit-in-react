import Banner from "../../Components/HomePage/Banner";
import CountdownTimer from "../../Components/HomePage/CountdownTimer";
import RecentProduct from "../../Components/HomePage/RecentProduct";
import ReviewSection from "../../Components/HomePage/ReviewSection";

const Home = () => {
    return (
        <div className="">
            <Banner />
            <div className="my-10">
                <CountdownTimer />
            </div>
            <div className="my-10">
                <RecentProduct />
            </div>
            <ReviewSection />
        </div>
    )
}
export default Home;

