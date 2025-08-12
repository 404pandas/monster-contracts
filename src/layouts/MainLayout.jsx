import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Nav/Nav";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Outlet />
    </>
  );
};
export default MainLayout;
