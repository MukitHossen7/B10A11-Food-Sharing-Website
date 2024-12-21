import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayouts = () => {
  return (
    <div>
      <div className=" sticky top-0 z-50 bg-white backdrop:blur-md ">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
