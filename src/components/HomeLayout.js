import Header from "./Header";
import Footer from "./Footer";
import background from "../assets/background/6003102db8cee56306b947451bde51c1.jpg";
const HoneLayout = ({ children, isShowBackground }) => {
  return (
    <>
      <Header />
      <div className="container-fluid">
        {isShowBackground ? (
          <img
            src={background}
            alt={"Not found"}
            className="image"
            height={"40%"}
            width={"100%"}
          />
        ) : (
          <></>
        )}
        {children}
      </div>
      <Footer />
    </>
  );
};

export default HoneLayout;
