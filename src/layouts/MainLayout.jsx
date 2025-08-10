import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
export default MainLayout;
