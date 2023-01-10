import Body from "./body/Body";
import Header from "./header/Header";
import Footer from "./footer/Footer";
const HomePage = ({ children, isShowBackground }) => {
  return (
    <>
      <Header />
      <Body isShowBackground={isShowBackground}>{children}</Body>
      <Footer />
    </>
  );
};

export default HomePage;
