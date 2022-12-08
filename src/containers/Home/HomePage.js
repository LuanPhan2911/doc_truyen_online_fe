import Body from "./sections/Body";
import Footer from "./sections/Footer";
import Header from "./sections/Header";

const HomePage = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <Body>{children}</Body>
      <Footer />
    </div>
  );
};

export default HomePage;
