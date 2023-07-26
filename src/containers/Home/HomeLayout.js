import Header from "./Header";
import Footer from "./Footer";
import "./HomeLayout.scss";

const HoneLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="main container">{children}</div>
      <Footer />
    </>
  );
};

export default HoneLayout;
