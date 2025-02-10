import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import Scroller from "../Scroller/Scroller";
const MainLayouts = () => {
  return (
    <div>
      <div className=" sticky top-0 z-50 bg-white/95 backdrop:blur-md ">
        <Scroller></Scroller>
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-470px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default MainLayouts;
