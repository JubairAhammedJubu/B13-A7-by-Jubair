import {Outlet} from "react-router-dom";
import {useState} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Toaster} from "react-hot-toast";

const RootLayout = () => {
  const [timeline, setTimeline] = useState([]);

  return (
    <div>
      <Navbar />

      <Outlet context={{timeline, setTimeline}} />

      <Footer />
      <Toaster />
    </div>
  );
};

export default RootLayout;
