import Header from "./Header";
import Footer from "./Footer";
import "./HomeLayout.scss";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const HomeLayout = () => {
  const { color, backgroundColor } = useSelector((state) => state.app);
  return (
    <div
      style={{
        color,
        backgroundColor,
      }}
    >
      <Header color={color} backgroundColor={backgroundColor} />
      <div className="main container">{<Outlet />}</div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
