import Banner from "../../components/Banner/banner";
import FeaturedFoods from "../../components/FeaturedFoods/FeaturedFoods";

const Home = () => {
  return (
    <div>
      <div className="bg-gray-100">
        {/* Banner Section  */}
        <Banner></Banner>
        {/* Featured Foods Section */}
        <FeaturedFoods></FeaturedFoods>
      </div>
    </div>
  );
};

export default Home;
