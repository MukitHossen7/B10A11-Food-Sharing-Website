import { Link } from "react-router-dom";
import Banner from "../../components/Banner/banner";
import FeaturedFoods from "../../components/FeaturedFoods/FeaturedFoods";
import CommunityImpact from "../../components/CommunityImpact/CommunityImpact";

const Home = () => {
  return (
    <div>
      <div className="pb-20 ">
        {/* Banner Section  */}
        <Banner></Banner>
        {/* Featured Foods Section */}
        <FeaturedFoods></FeaturedFoods>
        <div className="flex justify-center">
          <Link to="/availableFoods">
            <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg shadow-md hover:from-teal-600 hover:to-teal-700 transition duration-300">
              Show All
            </button>
          </Link>
        </div>
        <CommunityImpact></CommunityImpact>
      </div>
    </div>
  );
};

export default Home;
