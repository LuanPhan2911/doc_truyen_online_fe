import Header from "./Header";
import Footer from "./Footer";
import "./HomeLayout.scss";
import { useAuth } from "../../hooks";

const HomeLayout = ({ children, color, backgroundColor }) => {
  useAuth();
  return (
    <div
      style={{
        color,
        backgroundColor,
      }}
    >
      <Header color={color} backgroundColor={backgroundColor} />
      <div className="main container justify-content-center d-flex">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
