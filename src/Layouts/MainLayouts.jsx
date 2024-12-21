import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayouts = () => {
  return (
    <div>
      <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayouts;
