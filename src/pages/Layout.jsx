import { Outlet } from "react-router-dom";
import Navbar from "../components/CoinTable/Navbar/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default MainLayout;