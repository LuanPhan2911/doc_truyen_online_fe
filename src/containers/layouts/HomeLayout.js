import Header from "./Header";
import Footer from "./Footer";
import "./HomeLayout.scss";
const HomeLayout = ({ children, color, backgroundColor }) => {
  return (
    <div
      style={{
        color,
        backgroundColor,
      }}
    >
      <Header color={color} backgroundColor={backgroundColor} />
      <div className="main container">{children}</div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
