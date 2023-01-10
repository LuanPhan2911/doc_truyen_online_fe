import Body from "./body/Body";
import Header from "./header/Header";
import Footer from "./footer/Footer";
const HomePage = ({ children }) => {
  return (
    <>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </>
  );
};

export default HomePage;
