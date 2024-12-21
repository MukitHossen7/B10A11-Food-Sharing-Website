import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayouts = () => {
  return (
    <div>
      <div className=" sticky top-0 z-50 bg-white backdrop:blur-md ">
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-470px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
