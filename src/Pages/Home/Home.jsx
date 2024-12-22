import Banner from "../../components/Banner/banner";
import FeaturedFoods from "../../components/FeaturedFoods/FeaturedFoods";
import RequestModal from "../../components/RequestModal/RequestModal";

const Home = () => {
  return (
    <div>
      <div className="">
        {/* Banner Section  */}
        <Banner></Banner>
        {/* Featured Foods Section */}
        <FeaturedFoods></FeaturedFoods>
        <RequestModal></RequestModal>
      </div>
    </div>
  );
};

export default Home;
